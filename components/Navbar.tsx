"use client";

import { useState, useEffect } from "react";
import { Settings, Lock, Power, Battery, BatteryCharging } from "lucide-react";
import { navItems } from "../lib/data";

export default function Navbar() {
  const [time, setTime] = useState("00:00");
  const [battery, setBattery] = useState<number | null>(null);
  const [charging, setCharging] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [locked, setLocked] = useState(false);
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState("dark");
  const [accent, setAccent] = useState("#E95420");

  /* Clock */
  useEffect(() => {
    const tick = () => {
      const n = new Date();
      setTime(n.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  /* Battery */
  useEffect(() => {
    const getBattery = async () => {
      if (!("getBattery" in navigator)) return;
      const batteryManager = await (navigator as any).getBattery();
      const updateBattery = () => {
        setBattery(Math.round(batteryManager.level * 100));
        setCharging(batteryManager.charging);
      };
      updateBattery();
      batteryManager.addEventListener("levelchange", updateBattery);
      batteryManager.addEventListener("chargingchange", updateBattery);
    };
    getBattery();
  }, []);

  /* Active Section */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: "-40% 0px -50% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);
  useEffect(() => {
    document.documentElement.style.setProperty("--accent", accent);
    document.documentElement.style.setProperty("--accent-bg",     accent + "18");
    document.documentElement.style.setProperty("--accent-border", accent + "55");
  }, [accent]);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const go = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  const lockScreen = () => { setMenuOpen(false); setLocked(true); };

  const powerOff = () => {
    setMenuOpen(false);
    if (!confirm("Shut down the system?")) return;
    document.body.style.transition = "opacity 1s";
    document.body.style.opacity = "0";
    setTimeout(() => { window.location.href = "/"; }, 1200);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-4 border-b border-white/5"
        style={{ background: "rgba(22,18,34,0.97)", backdropFilter: "blur(16px)" }}
      >
        <div className="flex items-center gap-1">
          <button onClick={() => go("#home")}
            className="flex items-center gap-2 px-3 py-1 rounded text-sm font-medium text-white/90 hover:bg-white/8 transition-colors"
            style={{ fontFamily: "'Ubuntu', sans-serif" }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="3"  y="3"  width="7" height="7" rx="1.5" fill="var(--accent)" />
              <rect x="14" y="3"  width="7" height="7" rx="1.5" fill="var(--accent)" opacity=".6" />
              <rect x="3"  y="14" width="7" height="7" rx="1.5" fill="var(--accent)" opacity=".6" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" fill="var(--accent)" opacity=".3" />
            </svg>
          </button>

          <div className="w-px h-7 bg-white/8 mx-1 hidden md:block" />

          <nav className="hidden md:flex items-center gap-0.5">
            {navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <button key={id} onClick={() => go(item.href)}
                  className="px-3 py-1 rounded text-md transition-all border-b-2"
                  style={{
                    color:             isActive ? "var(--accent)" : "rgba(255,255,255,0.5)",
                    background:        isActive ? "var(--accent-bg)" : "transparent",
                    borderBottomColor: isActive ? "var(--accent)" : "transparent",
                  }}>
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {battery !== null && (
            <div className="hidden sm:flex items-center gap-1 text-white/70 mt-[3px]">
              {charging
                ? <BatteryCharging size={18} className="text-green-400" />
                : <Battery size={24} className="text-green-400" />}
              <span className="text-md">{battery}%</span>
            </div>
          )}
          <span className="text-md text-white">{time}</span>
          <button onClick={() => setMenuOpen((v) => !v)}
            className="w-7 h-7 rounded-full flex items-center justify-center bg-white/6 hover:bg-white/12 transition">
            <Power size={16} className="text-white" />
          </button>
        </div>
      </header>

      {/* SYSTEM MENU */}
      {menuOpen && (
        <div className="fixed top-14 right-3 z-50 rounded-xl border border-white/10 shadow-2xl overflow-hidden"
          style={{ background: "#2a2242", minWidth: 200 }}>
          <button onClick={() => { setMenuOpen(false); setSettingsOpen(true); }}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/8">
            <Settings size={16} style={{ color: "var(--accent)" }} />
            Settings
          </button>
          <button onClick={lockScreen}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/8">
            <Lock size={16} className="text-yellow-400" />
            Lock Screen
          </button>
          <button onClick={powerOff}
            className="w-full flex items-center gap-3 px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-white/8">
            <Power size={16} className="text-red-500" />
            Power Off
          </button>
        </div>
      )}

      {/* SETTINGS PANEL */}
      {settingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur">
          <div className="w-[340px] rounded-xl p-6 border border-white/10" style={{ background: "#2a2242" }}>
            <h2 className="text-lg text-white mb-6" style={{ fontFamily: "'Ubuntu',sans-serif" }}>
              System Settings
            </h2>
            
           
            <div className="mb-6">
              <p className="text-sm text-white/40 mb-3 uppercase tracking-widest"
                style={{ fontFamily: "'Ubuntu Mono',monospace" }}>Accent Color</p>
              <div className="flex gap-2 mb-3">
                {["#E95420","#3584E4","#33D17A","#F5C211","#C061CB","#FF7800"].map((c) => (
                  <button key={c} onClick={() => setAccent(c)}
                    className="w-7 h-7 rounded-full transition-all hover:scale-110"
                    style={{
                      background: c,
                      outline:      accent === c ? `2px solid ${c}` : "none",
                      outlineOffset: 2,
                      boxShadow:    accent === c ? `0 0 8px ${c}80` : "none",
                    }} />
                ))}
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-white/8"
                style={{ background: "rgba(255,255,255,0.03)" }}>
                <input type="color" value={accent} onChange={(e) => setAccent(e.target.value)}
                  className="w-8 h-8 rounded cursor-pointer border-0 bg-transparent" />
                <div>
                  <p className="text-xs text-white/50" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>Custom color</p>
                  <p className="text-xs text-white/25 mt-0.5" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>{accent}</p>
                </div>
              </div>
            </div>
            <button onClick={() => setSettingsOpen(false)}
              className="w-full py-2.5 rounded-lg text-sm font-medium text-white transition-all hover:brightness-110"
              style={{ background: "var(--accent)", fontFamily: "'Ubuntu',sans-serif" }}>
              Close
            </button>
          </div>
        </div>
      )}

      {/* LOCK SCREEN */}
      {locked && (
        <div className="fixed inset-0 z-[100] bg-[#161222] flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl mb-4" style={{ fontFamily: "'Ubuntu',sans-serif" }}>{time}</h1>
          <p className="text-white/60 mb-6">Portfolio Locked</p>
          <button onClick={() => setLocked(false)}
            className="px-6 py-2 rounded-lg text-white transition-all hover:brightness-110"
            style={{ background: "var(--accent)" }}>
            Unlock
          </button>
        </div>
      )}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around py-2 pb-4 border-t border-white/5"
        style={{ background: "rgba(22,18,34,0.97)", backdropFilter: "blur(16px)" }}>
        {navItems.map((item) => {
          const id = item.href.replace("#", "");
          const isActive = active === id;
          return (
            <button key={id} onClick={() => go(item.href)}
              className="flex flex-col items-center gap-1 px-3 text-xs"
              style={{ color: isActive ? "var(--accent)" : "#5a5070" }}>
              <div className="w-1 h-1 rounded-full"
                style={{ background: isActive ? "var(--accent)" : "transparent" }} />
              {item.label}
            </button>
          );
        })}
      </nav>
    </>
  );
}