"use client";
import { useEffect, useRef } from "react";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  {
    tag: "Inteligencia Artificial",
    tagColor: "text-violet-soft bg-violet-brand/15",
    title: "Cómo los agentes de IA están redefiniendo el servicio al cliente en 2025",
    excerpt: "Los agentes autónomos ya no son ciencia ficción. Analizamos cómo empresas de todos los tamaños están automatizando el 80% de sus interacciones.",
    time: "8 min",
    date: "12 Mayo 2025",
  },
  {
    tag: "Desarrollo Web",
    tagColor: "text-electric-bright bg-electric/15",
    title: "Next.js 15 vs Astro 4: Cuál elegir para tu próximo proyecto en 2025",
    excerpt: "Una comparativa técnica honesta entre los dos frameworks más populares del ecosistema React. Rendimiento, DX y casos de uso reales.",
    time: "6 min",
    date: "5 Mayo 2025",
  },
  {
    tag: "Automatización",
    tagColor: "text-emerald-400 bg-emerald-500/15",
    title: "ROI de la automatización: Cómo calcular el retorno real en tu empresa",
    excerpt: "Muchas empresas automatizan sin medir. Te mostramos un framework práctico para calcular el impacto económico real de cada flujo automatizado.",
    time: "5 min",
    date: "28 Abril 2025",
  },
];

export default function Blog() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll(".reveal").forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 80));
      }),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="blog" ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-ink/40 to-void" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="reveal inline-flex items-center gap-2 text-xs font-semibold text-electric-bright uppercase tracking-widest mb-4">
              <span className="w-5 h-px bg-electric-bright" />
              Insights
            </div>
            <h2 className="reveal text-headline font-display text-white">
              Conocimiento que
              <br />
              <span className="gradient-text-electric">marca la diferencia.</span>
            </h2>
          </div>
          <a href="#" className="reveal inline-flex items-center gap-2 text-sm font-medium text-electric-bright hover:text-white transition-colors">
            Ver todos los artículos <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <a
              key={p.title}
              href="#"
              className={`reveal reveal-delay-${i + 1} group block glass rounded-2xl border border-white/6 hover:border-white/14 hover:shadow-card-hover transition-all duration-400 overflow-hidden`}
            >
              {/* Placeholder image area */}
              <div className="h-44 bg-gradient-to-br from-ink-raised to-void relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-40" />
                <div className="absolute bottom-0 left-0 right-0 h-px bg-white/8" />
                <img src="/images/insights.png" alt="Insights" className="absolute inset-0 w-full h-full object-cover opacity-30" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-2xl font-bold gradient-text-electric">TB</span>
                </div>
              </div>

              <div className="p-6">
                <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full mb-3 ${p.tagColor}`}>
                  {p.tag}
                </span>
                <h3 className="text-sm font-bold text-white leading-snug mb-2.5 group-hover:text-electric-bright transition-colors line-clamp-2">
                  {p.title}
                </h3>
                <p className="text-xs text-snow-dim leading-relaxed mb-4 line-clamp-2">{p.excerpt}</p>
                <div className="flex items-center gap-3 text-[10px] text-snow-dim">
                  <Clock size={10} />
                  <span>{p.time} lectura</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
