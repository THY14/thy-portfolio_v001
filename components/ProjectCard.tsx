"use client";
import Image from "next/image";
import { Project } from "@/types";
import { useState } from "react";

export default function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`rounded-xl overflow-hidden border transition-all duration-300 flex flex-col ${
        hovered ? "border-orange-500/30 -translate-y-1 shadow-2xl" : "border-white/8 shadow-lg"
      }`}
      style={{ background: "#14112a" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>

      {/* Titlebar */}
      <div className={`flex items-center gap-2 px-4 py-2.5 border-b border-black/30 transition-colors ${hovered ? "bg-[#35304a]" : "bg-[#2e2841]"}`}>
        <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <div className="w-3 h-3 rounded-full bg-[#28ca41]" />
        <span className="ml-2 text-xs text-white/30 flex-1 truncate" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>
          {project.id}.app
        </span>
        {project.liveUrl && (
          <a href={project.liveUrl} onClick={e => e.stopPropagation()}
            className="text-[13px] px-2 py-0.5 rounded bg-orange-500/15 text-orange-400 border border-orange-500/25 hover:bg-orange-500/25 transition-colors"
            style={{ fontFamily: "'Ubuntu Mono',monospace" }}>
            ↗ live
          </a>
        )}
      </div>

      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 140 }}>
        <Image src={project.image} alt={project.title} fill
          className={`object-cover transition-transform duration-500 ${hovered ? "scale-105" : "scale-100"}`} />
        <div className={`absolute inset-0 transition-opacity duration-300 ${hovered ? "opacity-60" : "opacity-40"}`}
          style={{ background: "linear-gradient(to bottom,transparent 30%,#14112a 100%)" }} />
        {/* Scanlines */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.04) 2px,rgba(0,0,0,0.04) 4px)" }} />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-semibold text-white text-[15px]" style={{ fontFamily: "'Ubuntu',sans-serif" }}>{project.title}</h3>
          <p className="text-white/45 text-[14px] mt-1" style={{ fontFamily: "'Ubuntu',sans-serif" }}>{project.description}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((tag) => (
            <span key={tag}
              className="text-[11px] px-2 py-0.5 rounded bg-orange-500/8 border border-orange-500/25 text-orange-400/80"
              style={{ fontFamily: "'Ubuntu Mono',monospace" }}>
              {tag}
            </span>
          ))}
          {project.tags.length > 5 && (
            <span className="text-[11px] px-2 py-0.5 rounded bg-white/4 border border-white/10 text-white/30"
              style={{ fontFamily: "'Ubuntu Mono',monospace" }}>
              +{project.tags.length - 5}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-2 border-t border-white/5 mt-auto">
          {project.liveUrl && (
            <a href={project.liveUrl}
              className="flex items-center gap-1.5 text-[12px] text-white/35 hover:text-orange-400 transition-colors"
              style={{ fontFamily: "'Ubuntu Mono',monospace" }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="2"/><polyline points="15 3 21 3 21 9" stroke="currentColor" strokeWidth="2"/><line x1="10" y1="14" x2="21" y2="3" stroke="currentColor" strokeWidth="2"/></svg>
              Live
            </a>
          )}
          {project.cachedUrl && (
            <a href={project.cachedUrl}
              className="flex items-center gap-1.5 text-[12px] text-white/35 hover:text-sky-400 transition-colors"
              style={{ fontFamily: "'Ubuntu Mono',monospace" }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none"><path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" stroke="currentColor" strokeWidth="2"/></svg>
              Cached
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
