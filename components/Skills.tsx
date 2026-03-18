"use client";
import { useEffect, useRef, useState } from "react";
import { skillCategories } from "@/lib/data";

const ICONS: Record<string, string> = {
  TypeScript:"", JavaScript:"", Python:"", Lua:"",
  React:"", Vue:"", Flask:"", "Express.js":"",
  "Next.js":"", SQLite:"", PostgreSQL:"", Mongo:"",
  VSCode:"", Neovim:"", Linux:"", Figma:"", XFCE:"", Arch:"",
  Git:"", "Font Awesome":"", HTML:"", CSS:"", SCSS:"",
  EJS:"", REST:"", Jinja:"",
};

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24" style={{ background: "#1e1a2e" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-orange-500 font-bold text-2xl" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>#</span>
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Ubuntu',sans-serif" }}>skills</h2>
            <div className="hidden sm:block h-px w-28 bg-orange-500/25" />
          </div>
          <p className="text-md text-white/30 mt-1" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>
            <span className="text-green-400">$ </span>ls -la /home/elias/.config/skills/
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {skillCategories.map((cat, ci) => (
            <div key={cat.title}
              className={`rounded-xl border border-white/8 overflow-hidden transition-all duration-500 hover:border-orange-500/30 hover:-translate-y-1 hover:shadow-xl ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              style={{ background: "#14112a", transitionDelay: `${ci * 80}ms` }}>

              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-black/30" style={{ background: "#2e2841" }}>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28ca41]" />
                <span className="ml-1.5 text-[14px] text-orange-400 font-bold truncate" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>
                  {cat.title.toLowerCase()}/
                </span>
              </div>
              <div className="p-3 space-y-1.5">
                {cat.skills.map((skill, si) => (
                  <div key={skill}
                    className={`flex items-center gap-2 px-2 py-1 rounded text-[14px] text-white/55 hover:text-white/90 hover:bg-white/5 transition-all cursor-default ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}
                    style={{ transitionDelay: `${ci * 80 + si * 40}ms`, fontFamily: "'Ubuntu Mono',monospace" }}>
                    <span className="text-[11px]">{ICONS[skill] ?? "▸"}</span>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* apt output */}
        <div className={`mt-8 p-4 rounded-lg border border-white/5 text-md transition-all duration-700 delay-500 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ background: "rgba(0,0,0,0.3)", fontFamily: "'Ubuntu Mono',monospace" }}>
          <span className="text-white/25"># apt list --installed | grep skills</span><br />
          <span className="text-green-400 mt-1 block">
            {skillCategories.reduce((a, c) => a + c.skills.length, 0)} packages installed · 0 upgraded · 0 to remove · 0 not upgraded.
          </span>
        </div>
      </div>
    </section>
  );
}
