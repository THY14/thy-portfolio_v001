"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const CONTACTS = [
  { label: "Discord",  value: "3farmer#3519",   icon: "/discord.svg",  href: "https://discord.com", color: "#5865f2" },
  { label: "Email",    value: "methymuy@gmail.com", icon: "/email.svg",    href: "mailto:elias@elias.me", color: "#E95420" },
  { label: "Telegram", value: "@methy14",         icon: "/telegram.svg", href: "#", color: "#2aabee" },
];

export default function Contacts() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied]   = useState<string | null>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const copy = (v: string) => {
    navigator.clipboard.writeText(v);
    setCopied(v);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contacts" ref={ref} className="py-24" style={{ background: "#1e1a2e" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex items-center gap-3 mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <span className="text-orange-500 font-bold text-2xl" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>#</span>
          <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Ubuntu',sans-serif" }}>contacts</h2>
          <div className="hidden sm:block h-px w-28 bg-orange-500/25" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className={`space-y-5 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
            <p className="text-[16px] text-white/50 leading-relaxed max-w-sm" style={{ fontFamily: "'Ubuntu',sans-serif" }}>
              I&apos;m interested in freelance opportunities. However, if you have other requests or questions, don&apos;t hesitate to contact me.
            </p>

            {/* Status pill */}
            <div className="inline-flex items-center gap-3 px-4 py-3 rounded-xl border border-green-500/20" style={{ background: "rgba(76,255,145,0.05)" }}>
              <div className="relative w-2.5 h-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-60" />
              </div>
              <div>
                <p className="text-[14px] font-medium text-green-400" style={{ fontFamily: "'Ubuntu',sans-serif" }}>Available for work</p>
                <p className="text-[12px] text-white/30 mt-0.5" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>Response time: usually within 24h</p>
              </div>
            </div>
          </div>

          {/* RIGHT — contact window */}
          <div className={`transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}>
            <div className="rounded-xl overflow-hidden border border-white/8 shadow-xl" style={{ background: "#14112a" }}>
              {/* Titlebar */}
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-black/30" style={{ background: "#2e2841" }}>
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
                <span className="ml-2 text-md text-white/30" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>contacts — Messaging</span>
              </div>

              <div className="p-5">
                <p className="text-md text-white/25 mb-4" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>
                  <span className="text-green-400">$ </span>message --to methy
                </p>

                <div className="space-y-2.5">
                  {CONTACTS.map((c) => (
                    <div key={c.label}
                      className="group flex items-center gap-3 p-3 rounded-lg border border-white/5 hover:border-white/12 transition-all"
                      style={{ background: "rgba(255,255,255,0.03)" }}>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 border"
                        style={{ background: `${c.color}18`, borderColor: `${c.color}35` }}>
                        <Image src={c.icon} alt={c.label} width={16} height={16} className="opacity-80" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[14px] text-white/30 mb-0.5" style={{ fontFamily: "'Ubuntu',sans-serif" }}>{c.label}</p>
                        <a href={c.href} target="_blank" rel="noopener noreferrer"
                          className="text-[14px] text-white/80 hover:text-white transition-colors"
                          style={{ fontFamily: "'Ubuntu Mono',monospace" }}>
                          {c.value}
                        </a>
                      </div>
                      <button onClick={() => copy(c.value)}
                        className="opacity-0 group-hover:opacity-100 p-2 rounded text-white/30 hover:text-orange-400 transition-all">
                        {copied === c.value
                          ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><polyline points="20 6 9 17 4 12" stroke="#4cff91" strokeWidth="2.5"/></svg>
                          : <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" strokeWidth="2"/></svg>
                        }
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
