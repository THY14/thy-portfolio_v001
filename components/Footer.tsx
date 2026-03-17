"use client";
import Image from "next/image";

const LINKS = [
  // { name: "GitHub",  href: "#", icon: "/github.svg" },
  { name: "Linkedin",   href: "#", icon: "/linkedin.svg"  },
  { name: "Email", href: "#", icon: "/email.svg" },
  { name: "Telegram", href: "#", icon: "/telegram.svg" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5" style={{ background: "rgba(0,0,0,0.3)" }}>
      <div className="flex items-center justify-center gap-2 py-3 border-b border-white/5">
        {LINKS.map((l) => (
          <a key={l.name} href={l.href} aria-label={l.name}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-orange-500/15 hover:-translate-y-1 transition-all duration-200">
            <Image src={l.icon} alt={l.name} width={17} height={17} className="opacity-55" />
          </a>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-3">
          {/* <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
            style={{ background: "linear-gradient(135deg,#E95420,#77216F)", fontFamily: "'Ubuntu',sans-serif" }}>T</div>
          <div>
            <p className="text-sm font-semibold text-white" style={{ fontFamily: "'Ubuntu',sans-serif" }}>Methy</p>
            <p className="text-[11px] text-white/30" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>methymuy@gmail.com</p>
          </div> */}
        </div>
        <p className="text-[11px] text-white/25 mb-8 lg:mb-0" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>
          <span className="text-orange-500">©2026</span> <span className="text-red-400"></span>  ·{" "}
          <span className="text-green-400">Ubuntu 22.04 LTS</span>
        </p>
      </div>
    </footer>
  );
}
