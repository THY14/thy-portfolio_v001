"use client";
import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-24 relative"
      style={{ background: "linear-gradient(180deg,#1e1a2e 0%,#1a162a 100%)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex items-center justify-between mb-10 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="flex items-center gap-3">
            <span className="font-bold text-2xl" style={{ fontFamily: "'Ubuntu Mono',monospace", color: "var(--accent)" }}>#</span>
            <h2 className="text-3xl font-bold text-white" style={{ fontFamily: "'Ubuntu',sans-serif" }}>projects</h2>
            <div className="hidden sm:block h-px w-28" style={{ background: "var(--accent-border)" }} />
          </div>
          <a href="https://github.com/THY14" target="blank"
            className="text-md text-white/35 transition-colors flex items-center gap-1.5"
            style={{ fontFamily: "'Ubuntu Mono',monospace" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}>
            View all →
          </a>
        </div>
        <div className={`flex items-center gap-2 mb-6 text-md transition-all duration-700 delay-100 ${visible ? "opacity-100" : "opacity-0"}`}
          style={{ fontFamily: "'Ubuntu Mono',monospace" }}>
          <span className="text-green-400">methy@ubuntu</span>
          <span className="text-white/20">:</span>
          <span className="text-sky-300">~/projects</span>
          <span style={{ color: "var(--accent)" }}>$</span>
          <span className="text-white/40">ls -la</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.slice(0, 5).map((project, i) => (
            <div key={project.id}
              className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${i * 120 + 150}ms` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}