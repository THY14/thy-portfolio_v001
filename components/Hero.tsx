"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const BOOT_LINES = [
  { text: "[ OK ] Started Ubuntu 22.04 LTS kernel 5.15.0-91-generic", yellow: false },
  { text: "[ OK ] Reached target Graphical Interface.", yellow: false },
  { text: "[ OK ] Loading portfolio.service...", yellow: false },
  { text: "[ OK ] Mounting /home/thy filesystem", yellow: false },
  { text: "[ OK ] Started thy Dev Server on :3000", yellow: false },
  { text: "Welcome to Ubuntu 22.04.3 LTS (Muy Methy-server)", yellow: true },
];

const TERM = [
  { p: true, cmd: "cat about.txt" },
  { p: false, text: "Third-year Computer Science student at CADT" },
  { p: false, text: "Focused on full-stack development and real-world projects" },
  { p: false, text: "" },
  { p: true, cmd: "ls skills/" },
  { p: false, text: "React  Next.js  Vue  Typescripts  Nest.js" },
  { p: false, text: "Node.js  HTML CSS  AWS Docker  MySQL CI/CD" },
  { p: false, text: "" },
  { p: true, cmd: "echo $STATUS" },
  { p: false, text: "🟢 Available for internship / junior role", green: true },
];

export default function Hero() {
  const [bootIdx, setBootIdx]   = useState(-1);
  const [booted, setBooted]     = useState(false);
  const [ready, setReady]       = useState(false);
  const [termIdx, setTermIdx]   = useState(0);

  useEffect(() => {
    BOOT_LINES.forEach((_, i) => setTimeout(() => setBootIdx(i), i * 160));
    setTimeout(() => setBooted(true), 1100);
    setTimeout(() => setReady(true), 1350);
  }, []);

  useEffect(() => {
    if (!ready) return;
    let i = 0;
    const t = setInterval(() => { i++; setTermIdx(i); if (i >= TERM.length) clearInterval(t); }, 95);
    return () => clearInterval(t);
  }, [ready]);

  const goContact  = () => document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
  const goProjects = () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-11"
      style={{ background: "linear-gradient(135deg,#1e1a2e 0%,#231d38 60%,#1e1a2e 100%)" }}>

      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "linear-gradient(white 1px,transparent 1px),linear-gradient(90deg,white 1px,transparent 1px)", backgroundSize: "64px 64px" }} />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(119,33,111,0.18) 0%,transparent 65%)" }} />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle,rgba(233,84,32,0.12) 0%,transparent 65%)" }} />

      {!booted && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center" style={{ background: "#0d0b18" }}>
          <div className="w-full max-w-xl px-8">
            <div className="flex items-center gap-4 mb-10">
              <div className="relative w-12 h-12 flex-shrink-0">
                <div className="absolute inset-0 rounded-full border-[3px] anim-spin" style={{ borderColor: "var(--accent)" }} />
                <div className="absolute inset-[9px] rounded-full" style={{ background: "var(--accent)" }} />
              </div>
              <div>
                <p className="text-xl font-light text-white" style={{ fontFamily: "'Ubuntu',sans-serif" }}>Ubuntu</p>
                <p className="text-[11px] text-white/40 mt-0.5" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>22.04.3 LTS</p>
              </div>
            </div>
            <div className="space-y-1.5">
              {BOOT_LINES.map((line, i) => (
                <p key={i}
                  className={`text-[13px] transition-all duration-300 ${i <= bootIdx ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"} ${line.yellow ? "text-yellow-400" : "text-green-400"}`}
                  style={{ fontFamily: "'Ubuntu Mono',monospace" }}>
                  {line.text}
                </p>
              ))}
            </div>
            <div className="mt-8 h-[3px] bg-white/8 rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all duration-300"
                style={{ width: `${Math.min(100, ((bootIdx + 1) / BOOT_LINES.length) * 100)}%`, background: "var(--accent)" }} />
            </div>
          </div>
        </div>
      )}

      <div className={`max-w-7xl mx-auto px-12 w-full py-16 grid gap-12 items-center transition-opacity duration-700 ${ready ? "opacity-100" : "opacity-0"}`}
        style={{ gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))" }}>

        <div className="anim-fade-left">
          <div className="rounded-xl overflow-hidden border border-white/8 shadow-2xl md:mt-0 lg:mt-14" style={{ background: "#100e1e" }}>
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-black/30" style={{ background: "#2e2841" }}>
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
              <span className="ml-2 text-md text-white/30 flex-1" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>methy@ubuntu: ~</span>
              <span className="text-[10px] px-2 py-0.5 rounded"
                style={{ fontFamily: "'Ubuntu Mono',monospace", background: "var(--accent-bg)", color: "var(--accent)", border: "1px solid var(--accent-border)" }}>bash</span>
            </div>
            <div className="p-5 min-h-72" style={{ fontFamily: "'Ubuntu Mono',monospace", fontSize: 17 }}>
              {TERM.slice(0, termIdx).map((line, i) => (
                <div key={i} className="leading-[22px]">
                  {line.p ? (
                    <span>
                      <span className="text-green-400">methy</span>
                      <span className="text-white/20">@</span>
                      <span className="text-blue-400">ubuntu</span>
                      <span className="text-white/20">:</span>
                      <span className="text-sky-300">~</span>
                      <span style={{ color: "var(--accent)" }}>$ </span>
                      <span className="text-white/90">{line.cmd}</span>
                    </span>
                  ) : (
                    <span className={`pl-2 ${(line as {green?:boolean}).green ? "text-green-400" : "text-white/50"}`}>
                      {line.text || "\u00a0"}
                    </span>
                  )}
                </div>
              ))}
              {ready && (
                <div className="leading-[21px] mt-1">
                  <span className="text-green-400">methy</span>
                  <span className="text-white/20">@</span>
                  <span className="text-blue-400">ubuntu</span>
                  <span className="text-white/20">:</span>
                  <span className="text-sky-300">~</span>
                  <span style={{ color: "var(--accent)" }}>$ </span>
                  <span className="cursor-blink" />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 mt-4">
            {[
              { icon: "⏱", label: "Real-world project experience", accent: false },
              { icon: "🗂", label: "10+ projects", accent: false },
              { icon: "✓", label: "Open to work", accent: true },
            ].map((s) => (
              <div key={s.label}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs border"
                style={{
                  fontFamily: "'Ubuntu Mono',monospace",
                  background:  s.accent ? "var(--accent-bg)"    : "rgba(255,255,255,0.04)",
                  borderColor: s.accent ? "var(--accent-border)" : "rgba(255,255,255,0.08)",
                  color:       s.accent ? "var(--accent)"        : "rgba(255,255,255,0.5)",
                }}>
                {s.icon} {s.label}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 anim-fade-right d-200 lg:-mt-10">
          <div className="w-full max-w-sm rounded-xl border border-white/8 p-4 shadow-xl anim-fade-right d-300"
            style={{ background: "rgba(30,26,48,0.9)", backdropFilter: "blur(12px)" }}>
            <div className="flex items-center gap-3 mb-3">
              <div className="flex-1 min-w-0">
                <p className="text-md font-semibold" style={{ fontFamily: "'Ubuntu',sans-serif", color: "var(--accent)" }}>Muy Methy</p>
                <p className="text-[12px] text-white/40 mt-0.5" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>Software Developer</p>
              </div>
              <div className="relative w-3 h-3">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <div className="absolute inset-0 rounded-full bg-green-400" style={{ animation: "pingDot 1.4s ease-out infinite" }} />
              </div>
            </div>
            <p className="text-[14px] text-white/55 leading-relaxed" style={{ fontFamily: "'Ubuntu',sans-serif" }}>
              Crafts responsive websites where technologies meet creativity.
            </p>
          </div>

          <div className="relative anim-float">
            <div className="absolute -inset-4 rounded-full border border-dashed anim-spin"
              style={{ borderColor: "var(--accent-border)", animationDuration: "14s" }} />
            <div className="absolute -inset-8 rounded-full border border-white/5" />
            <div className="relative rounded-2xl overflow-hidden border-2 shadow-2xl"
              style={{ borderColor: "var(--accent-border)", boxShadow: "0 0 40px var(--accent-bg)" }}>
              <Image src="/methy.png" alt="" width={220} height={100} className="object-contain block" priority />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-1.5 rounded-full whitespace-nowrap shadow-lg"
              style={{ background: "#1e1a2e", fontFamily: "'Ubuntu Mono',monospace", fontSize: 12, color: "rgba(255,255,255,0.5)", border: "1px solid var(--accent-border)" }}>
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent)" }} />
              Status:
              <span className="text-white font-bold ml-1">Coding</span>
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            <button onClick={goContact}
              className="flex items-center gap-2 px-8 py-2 rounded text-sm font-medium text-white transition-all hover:brightness-110 active:scale-95"
              style={{ background: "var(--accent)", fontFamily: "'Ubuntu',sans-serif", boxShadow: "0 2px 8px var(--accent-bg)" }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="white" strokeWidth="2"/><polyline points="22,6 12,13 2,6" stroke="white" strokeWidth="2"/></svg>
              Contact Me
            </button>
            <button onClick={goProjects}
              className="px-8 py-2 rounded text-sm font-medium text-white/70 border border-white/15 hover:bg-white/6 hover:text-white transition-all"
              style={{ fontFamily: "'Ubuntu',sans-serif" }}>
              View Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}