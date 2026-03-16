"use client";
import { useEffect, useRef, useState } from "react";

export default function Quote() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 border-y border-white/5" style={{ background: "rgba(0,0,0,0.2)" }}>
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <p className="text-lg font-light text-white/55 leading-relaxed italic" style={{ fontFamily: "'Ubuntu',sans-serif" }}>
            &quot;It is not enough for code to work — it must be{" "}
            <span className="text-orange-400 not-italic font-medium">elegant</span>,{" "}
            <span className="text-sky-400 not-italic font-medium">readable</span>, and{" "}
            <span className="text-green-400 not-italic font-medium">maintainable</span>.&quot;
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-10 bg-white/15" />
            <span className="text-[11px] text-white/25" style={{ fontFamily: "'Ubuntu Mono',monospace" }}>muymethy.dev/philosophy</span>
            <div className="h-px w-10 bg-white/15" />
          </div>
        </div>
      </div>
    </section>
  );
}
