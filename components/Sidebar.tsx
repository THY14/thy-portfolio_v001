"use client";
import Image from "next/image";
import { socialLinks } from "@/lib/data";

export default function Sidebar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center gap-2">
      <div className="w-px h-14" style={{ background: "linear-gradient(to bottom,transparent,rgba(233,84,32,0.4))" }} />
      {socialLinks.map((link) => (
        <a key={link.name} href={link.href} aria-label={link.name}
          className="w-8 h-8 flex items-center justify-center rounded-lg border border-white/6 bg-white/4 hover:bg-orange-500/15 hover:border-orange-500/35 hover:scale-110 transition-all duration-200">
          <Image src={link.icon} alt={link.name} width={13} height={13} className="opacity-55" />
        </a>
      ))}
      <div className="w-px h-14" style={{ background: "linear-gradient(to bottom,rgba(233,84,32,0.4),transparent)" }} />
    </div>
  );
}
