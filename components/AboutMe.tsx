"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const CODE = [
  `<span style="color:#f472b6">const</span> <span style="color:#93c5fd">methy</span> = {`,
  `  name: <span style="color:#86efac">"Methy"</span>,`,
  `  role: <span style="color:#86efac">"Software - Developer"</span>,`,
  `  location: <span style="color:#86efac">"Chroy Chongva, Phnom Penh"</span>,`,
  `  passion: <span style="color:#86efac">"Building web experiences"</span>,`,
  `  experience: <span style="color:#fcd34d">Internship</span> level <span style="color:#86efac"></span>,`,
  `  openToWork: <span style="color:#f472b6">true</span>,`,
  `  <span style="color:#6b7280">// Always learning...</span>`,
  `}`,
];

export default function AboutMe() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [lines, setLines] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let i = 0;
    const t = setInterval(() => { i++; setLines(i); if (i >= CODE.length) clearInterval(t); }, 75);
    return () => clearInterval(t);
  }, [visible]);

  return (
    <section id="about-me" ref={ref} className="py-24"
      style={{ background: "linear-gradient(180deg,#1a162a 0%,#1e1a2e 100%)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex items-center gap-3 mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <span className="text-orange-500 font-bold text-2xl" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>#</span>
          <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Ubuntu',sans-serif" }}>about-me</h2>
          <div className="hidden sm:block h-px w-28 bg-orange-500/25" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className={`space-y-5 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}`}>
            <div className="rounded-xl border border-white/8 p-5" style={{ background: "#14112a" }}>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
                <div className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="text-lg text-white/30" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>about-me.txt — gedit</span>
              </div>
             <p className="text-lg font-medium text-white mb-3" style={{ fontFamily: "'Ubuntu',sans-serif" }}>
                Hello, I&apos;m Muy Methy!
              </p>

              <p className="text-[16px] text-white/50 leading-relaxed mb-3" style={{ fontFamily: "'Ubuntu',sans-serif" }}>
                I&apos;m a 3rd-year Computer Science student at CADT and a web developer based in Phnom Penh. I build responsive, user-friendly web applications using modern technologies.
              </p>

              <p className="text-[14 px] text-white/50 leading-relaxed" style={{ fontFamily: "'Ubuntu',sans-serif" }}>
                I enjoy turning ideas into real-world projects and continuously improving my skills in full-stack development and new technologies.
              </p>
            </div>

            {/* <button className="flex items-center gap-2 px-5 py-2 rounded text-sm font-medium text-white transition-all hover:brightness-110 active:scale-95"
              style={{ background: "linear-gradient(to bottom,#F47421,#C7461A)", fontFamily: "'Ubuntu',sans-serif", boxShadow: "0 2px 8px rgba(233,84,32,0.35)" }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="white" strokeWidth="2"/><polyline points="14 2 14 8 20 8" stroke="white" strokeWidth="2"/></svg>
              Read More →
            </button> */}
          </div>
          <div className={`space-y-5 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}`}>
            <div className="rounded-xl overflow-hidden border border-white/8" style={{ background: "#100e1e" }}>
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-black/30" style={{ background: "#2e2841" }}>
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
                <span className="ml-2 text-md text-white/30 flex-1" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>about.ts — Code</span>
                <span className="text-[12px] text-green-400" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>● TypeScript</span>
              </div>

              <div className="p-7 flex gap-4" style={{ minHeight: 220 }}>
                <div className="flex flex-col text-right select-none" style={{ fontFamily: "'Ubuntu Mono',monospace", fontSize: 13, color: "rgba(255,255,255,0.15)", minWidth: 18 }}>
                  {CODE.slice(0, lines).map((_, i) => (
                    <span key={i} style={{ lineHeight: "22px" }}>{i + 1}</span>
                  ))}
                </div>
                <div className="flex-1">
                  {CODE.slice(0, lines).map((line, i) => (
                    <div key={i} style={{ fontFamily: "'Ubuntu Mono',monospace", fontSize: 14, lineHeight: "22px", color: "rgba(255,255,255,0.8)" }}
                      dangerouslySetInnerHTML={{ __html: line }} />
                  ))}
                  {lines < CODE.length && <span className="cursor-blink" />}
                </div>
              </div>
            </div>

            {/* mini card */}
            <div className="flex items-center gap-4 p-4 rounded-xl border border-white/8" style={{ background: "#14112a" }}>
              <div className="relative w-15 h-20 rounded-xl overflow-hidden border-2 border-orange-500/35 flex-shrink-0"
                style={{ boxShadow: "0 0 18px rgba(233,84,32,0.18)" }}>
                <Image src="/methy.png" alt="Elias" fill className="object-cover" />
              </div>
              <div>
                <p className="font-semibold text-white text-sm" style={{ fontFamily: "'Ubuntu',sans-serif" }}>Muy Methy</p>
                <p className="text-[11px] text-white/30 mt-0.5 mb-2" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>methy@ubuntu:~$</p>
                <div className="flex flex-wrap gap-1.5">
                  {["TypeScript","React","Next.js"].map(t => (
                    <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-orange-500/8 border border-orange-500/25 text-orange-400/70"
                      style={{ fontFamily: "'Ubuntu Mono',monospace" }}>{t}</span>
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
