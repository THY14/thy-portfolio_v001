"use client";
import Image from "next/image";

const LINKS = [
  { name: "Linkedin", href: "https://www.linkedin.com/in/muymethy/", icon: "/linkedin.svg" },
  { name: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=methymuy@gmail.com", icon: "/email.svg" },
  { name: "Telegram", href: "https://t.me/methy14", icon: "/telegram.svg" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5" style={{ background: "rgba(0,0,0,0.3)" }}>
      <div className="flex items-center justify-center gap-2 py-3 border-b border-white/5">
        {LINKS.map((l) => (
          <a key={l.name} href={l.href} aria-label={l.name} target="blank"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:-translate-y-1 transition-all duration-200"
            onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-bg)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.05)")}>
            <Image src={l.icon} alt={l.name} width={17} height={17} className="opacity-55" />
          </a>
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="flex items-center gap-3" />
        <p className="text-[11px] text-white/25 mb-8 lg:mb-0" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>
          <span style={{ color: "var(--accent)" }}>©2026</span> <span className="text-red-400"></span> ·{" "}
          <span className="text-green-400">Ubuntu 22.04 LTS</span>
        </p>
      </div>
    </footer>
  );
}