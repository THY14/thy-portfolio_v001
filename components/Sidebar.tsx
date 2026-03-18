"use client";
import Image from "next/image";
import { socialLinks } from "@/lib/data";

export default function Sidebar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2">
      <div className="w-px h-14" style={{ background: "linear-gradient(to bottom,transparent,var(--accent-border))" }} />
      {socialLinks.map((link) => (
        <a key={link.name} href={link.href} aria-label={link.name} target="blank"
          className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/6 bg-white/4 hover:scale-110 transition-all duration-200"
          onMouseEnter={e => {
            e.currentTarget.style.background = "var(--accent-bg)";
            e.currentTarget.style.borderColor = "var(--accent-border)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
          }}>
          <Image src={link.icon} alt={link.name} width={13} height={13} className="opacity-55" />
        </a>
      ))}
      <div className="w-px h-14" style={{ background: "linear-gradient(to bottom,var(--accent-border),transparent)" }} />
    </div>
  );
}