"use client";
import { useEffect, useRef } from "react";
import { Globe, Bot, Cpu, Zap, Palette, Search, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    label: "01",
    title: "Desarrollo Web Premium",
    description: "Webs de alto rendimiento que convierten visitas en clientes. Diseño exclusivo, velocidad extrema y experiencia de usuario excepcional.",
    features: ["Next.js / React", "Diseño a medida", "CMS integrado", "Velocidad máxima"],
    gradient: "from-electric/20 via-transparent to-transparent",
    glow: "shadow-glow",
    accent: "text-electric-bright",
    iconBg: "bg-electric/15",
  },
  {
    icon: Bot,
    label: "02",
    title: "Chatbots con IA",
    description: "Asistentes virtuales inteligentes que atienden a tus clientes 24/7, resuelven dudas y aumentan las conversiones automáticamente.",
    features: ["GPT-4 / Claude", "Integración web", "Multilenguaje", "Analytics"],
    gradient: "from-violet-brand/20 via-transparent to-transparent",
    glow: "shadow-glow-violet",
    accent: "text-violet-soft",
    iconBg: "bg-violet-brand/15",
  },
  {
    icon: Cpu,
    label: "03",
    title: "Agentes de IA",
    description: "Sistemas autónomos que ejecutan tareas complejas, toman decisiones y operan procesos enteros sin intervención humana.",
    features: ["Agentes autónomos", "Integración APIs", "Workflows IA", "Monitoreo"],
    gradient: "from-cyan-brand/20 via-transparent to-transparent",
    glow: "shadow-glow-cyan",
    accent: "text-cyan-soft",
    iconBg: "bg-cyan-brand/15",
  },
  {
    icon: Zap,
    label: "04",
    title: "Automatización Empresarial",
    description: "Eliminamos tareas repetitivas y conectamos tus herramientas. Tu equipo se enfoca en lo que importa, el resto funciona solo.",
    features: ["Make / Zapier", "APIs personalizadas", "Flujos complejos", "ROI medible"],
    gradient: "from-amber-500/20 via-transparent to-transparent",
    glow: "shadow-lg shadow-amber-500/10",
    accent: "text-amber-400",
    iconBg: "bg-amber-500/15",
  },
  {
    icon: Palette,
    label: "05",
    title: "Branding Digital",
    description: "Identidad visual que impacta y permanece. Desde el logo hasta el sistema de diseño completo para tu marca digital.",
    features: ["Logo & identidad", "Design system", "Brand guidelines", "Motion design"],
    gradient: "from-rose-500/20 via-transparent to-transparent",
    glow: "shadow-lg shadow-rose-500/10",
    accent: "text-rose-400",
    iconBg: "bg-rose-500/15",
  },
  {
    icon: Search,
    label: "06",
    title: "SEO & Crecimiento",
    description: "Estrategia SEO técnica y de contenido para dominar los resultados de búsqueda. Tráfico orgánico que crece mes a mes.",
    features: ["SEO técnico", "Contenido IA", "Link building", "Core Web Vitals"],
    gradient: "from-emerald-500/20 via-transparent to-transparent",
    glow: "shadow-lg shadow-emerald-500/10",
    accent: "text-emerald-400",
    iconBg: "bg-emerald-500/15",
  },
];

export default function Services() {
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
    <section id="servicios" ref={ref} className="relative py-28 md:py-36">
      {/* Background */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <img src="/images/servicios.png" alt="Servicios" className="absolute right-0 bottom-0 w-96 opacity-10 pointer-events-none" />
      <div className="glow-orb w-[500px] h-[500px] bg-electric left-[-200px] top-1/2 -translate-y-1/2 opacity-8" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16 md:mb-20">
          <div className="reveal inline-flex items-center gap-2 text-xs font-semibold text-electric-bright uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-electric-bright" />
            Servicios
          </div>
          <h2 className="reveal text-headline font-display text-white mb-5">
            Todo lo que tu negocio
            <br />
            <span className="gradient-text-electric">necesita para crecer.</span>
          </h2>
          <p className="reveal text-snow-muted text-lg leading-relaxed">
            Un stack completo de soluciones tecnológicas diseñado para empresas que no se conforman con lo mediocre.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className={`reveal reveal-delay-${(i % 3) + 1} group relative glass rounded-2xl p-7 hover:bg-white/6 transition-all duration-500 cursor-default overflow-hidden border border-white/6 hover:border-white/12 ${s.glow} hover:shadow-card-hover`}
              >
                {/* Card gradient bg */}
                <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-11 h-11 rounded-xl ${s.iconBg} flex items-center justify-center`}>
                      <Icon size={20} className={s.accent} />
                    </div>
                    <span className="font-mono text-[11px] text-snow-dim/50">{s.label}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2.5 tracking-tight">{s.title}</h3>
                  <p className="text-snow-muted text-sm leading-relaxed mb-5">{s.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {s.features.map((f) => (
                      <span key={f} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/6 text-snow-dim border border-white/8">
                        {f}
                      </span>
                    ))}
                  </div>

                  <a href="#contacto" className={`inline-flex items-center gap-1.5 text-xs font-semibold ${s.accent} hover:gap-2.5 transition-all duration-200`}>
                    Saber más <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
