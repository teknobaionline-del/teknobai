"use client";
import { useEffect, useRef } from "react";

const techs = [
  "Next.js", "React", "OpenAI", "Vercel", "Stripe",
  "Tailwind", "Framer", "Supabase", "Node.js", "Python",
];

const stats = [
  { value: "+4", label: "Proyectos" },
  { value: "€3K", label: "Valor generado" },
  { value: "100%", label: "Retención" },
  { value: "1", label: "Países" },
];

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.querySelectorAll(".reveal").forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 60)); }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-16 border-y border-white/6 overflow-hidden">
      <div className="absolute inset-0 bg-ink/40" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <div key={s.label} className={`reveal reveal-delay-${i + 1} text-center`}>
              <div className="text-3xl font-bold gradient-text-electric mb-1">{s.value}</div>
              <div className="text-xs text-snow-dim font-medium uppercase tracking-widest">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="reveal border-t border-white/6 mb-10" />

        {/* Tech scroll */}
        <div className="reveal text-center mb-4">
          <span className="text-xs text-snow-dim uppercase tracking-widest font-medium">
            Tecnologías que dominamos
          </span>
        </div>
        <div className="reveal flex flex-wrap justify-center gap-3">
          {techs.map((t) => (
            <span
              key={t}
              className="px-4 py-1.5 glass rounded-full text-xs font-semibold text-snow-muted border border-white/8 hover:border-electric/40 hover:text-white transition-all duration-200 cursor-default"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
