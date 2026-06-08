"use client";
import { useEffect, useRef } from "react";

const stats = [
  { value: "+4",   label: "Proyectos entregados" },
  { value: "€3K",  label: "Valor generado" },
  { value: "100%", label: "Retención de clientes" },
  { value: "14d",  label: "Tiempo de entrega" },
];

const techs = ["Next.js","React","OpenAI","Vercel","Stripe","Tailwind","Framer","Supabase","Node.js","Python"];

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll(".reveal").forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 60));
      }),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-[#f5f0e8] border-y border-[#e5e5e5] py-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((s, i) => (
            <div key={s.label} className={`reveal reveal-delay-${i+1} text-center`}>
              <div className="text-2xl font-bold text-[#111] font-sans tracking-tight mb-1">{s.value}</div>
              <div className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#aaa] font-sans">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px h-12 bg-[#e5e5e5]" />

        {/* Techs */}
        <div className="reveal flex flex-wrap justify-center md:justify-end gap-2 max-w-xs">
          {techs.map(t => (
            <span key={t} className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#aaa] border border-[#e0e0e0] px-2.5 py-1 hover:border-[#111] hover:text-[#111] transition-colors cursor-default font-sans">
              {t}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}