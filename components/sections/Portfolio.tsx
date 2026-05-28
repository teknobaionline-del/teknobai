"use client";
import { useEffect, useRef } from "react";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const projects = [
  {
    name: "Lumina Restaurant",
    category: "Restaurante Premium",
    year: "2025",
    desc: "Web inmersiva con carta digital dinámica, reservas en tiempo real y sistema de pedidos integrado. Experiencia gastronómica desde el primer clic.",
    stack: ["Next.js", "Stripe", "Supabase"],
    metrics: [{ v: "+68%", l: "Reservas online" }, { v: "4.9★", l: "Valoración" }],
    color: "from-amber-500/15 to-rose-500/10",
    accent: "#F59E0B",
    tag: "Restauración",
    featured: true,
  },
  {
    name: "APEX Fitness Club",
    category: "Gimnasio & Wellness",
    year: "2025",
    desc: "Plataforma de captación con agente IA integrado que cualifica leads, gestiona altas y envía seguimientos automáticos.",
    stack: ["React", "OpenAI", "Framer Motion"],
    metrics: [{ v: "+112%", l: "Nuevas altas" }, { v: "82%", l: "Cualificación IA" }],
    color: "from-electric/15 to-cyan-brand/10",
    accent: "#3B82F6",
    tag: "Fitness",
    featured: false,
  },
  {
    name: "Vértice Inmobiliaria",
    category: "Real Estate Premium",
    year: "2024",
    desc: "Portal inmobiliario con búsqueda avanzada, visitas virtuales 360° y chatbot IA que filtra compradores automáticamente.",
    stack: ["Next.js", "Three.js", "GPT-4"],
    metrics: [{ v: "+44%", l: "Contactos" }, { v: "3x", l: "Tiempo en web" }],
    color: "from-violet-brand/15 to-electric/10",
    accent: "#8B5CF6",
    tag: "Inmobiliaria",
    featured: false,
  },
  {
    name: "FlowDesk SaaS",
    category: "Startup SaaS B2B",
    year: "2024",
    desc: "Landing de conversión para software de productividad. Diseño tipo Linear con animaciones Framer Motion y onboarding optimizado.",
    stack: ["Next.js", "Framer Motion", "Vercel"],
    metrics: [{ v: "8.2%", l: "CVR landing" }, { v: "$40k", l: "MRR primer mes" }],
    color: "from-emerald-500/15 to-cyan-brand/10",
    accent: "#10B981",
    tag: "SaaS",
    featured: true,
  },
  {
    name: "Maré Collective",
    category: "E-commerce Premium",
    year: "2024",
    desc: "Tienda online de moda sostenible con experiencia de compra premium, filtros inteligentes y recomendaciones IA personalizadas.",
    stack: ["Next.js", "Shopify", "OpenAI"],
    metrics: [{ v: "+91%", l: "Conversión" }, { v: "AOV +34%", l: "Pedido medio" }],
    color: "from-rose-500/15 to-violet-brand/10",
    accent: "#F43F5E",
    tag: "eCommerce",
    featured: false,
  },
];

export default function Portfolio() {
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
    <section id="portfolio" ref={ref} className="relative py-28 md:py-36">
      <div className="absolute inset-0 grid-lines opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-20">
          <div>
            <div className="reveal inline-flex items-center gap-2 text-xs font-semibold text-electric-bright uppercase tracking-widest mb-4">
              <span className="w-5 h-px bg-electric-bright" />
              Portfolio
            </div>
            <h2 className="reveal text-headline font-display text-white">
              Galería de
              <br />
              <span className="gradient-text-electric">proyectos terminados.</span>
            </h2>
          </div>
          <p className="reveal text-snow-muted text-base max-w-xs md:text-right leading-relaxed">
            Estas reseñas no son reales, tan solo estan para darle estatus a nuestra web :)
          </p>
        </div>

        {/* Projects grid */}
        <div className="space-y-5">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className={`reveal group relative overflow-hidden glass rounded-2xl border border-white/6 hover:border-white/12 transition-all duration-500 hover:shadow-card-hover p-8 md:p-10`}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
                {/* Left */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-[10px] font-bold px-2.5 py-1 rounded-full"
                      style={{ background: p.accent + "22", color: p.accent }}
                    >
                      {p.tag}
                    </span>
                    <span className="text-xs text-snow-dim font-mono">{p.year}</span>
                    {p.featured && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-white/8 text-snow-muted border border-white/10">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 tracking-tight">{p.name}</h3>
                  <p className="text-snow-dim text-xs mb-4 font-medium">{p.category}</p>
                  <p className="text-snow-muted text-sm md:text-base leading-relaxed mb-5 max-w-lg">{p.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.stack.map((t) => (
                      <span key={t} className="text-[11px] font-semibold px-3 py-1 rounded-full glass border border-white/8 text-snow-muted">
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:gap-3 transition-all"
                    style={{ color: p.accent }}
                  >
                    Quiero algo así <ArrowUpRight size={14} />
                  </a>
                </div>

                {/* Right — metrics */}
                <div className="flex gap-4 md:flex-col md:gap-3">
                  {p.metrics.map((m) => (
                    <div key={m.l} className="glass-strong rounded-xl p-5 border border-white/8 text-center min-w-[110px]">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        <TrendingUp size={12} style={{ color: p.accent }} />
                        <span className="text-xl font-bold text-white">{m.v}</span>
                      </div>
                      <div className="text-[10px] text-snow-dim font-medium">{m.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
