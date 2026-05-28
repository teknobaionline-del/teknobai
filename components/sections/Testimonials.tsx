"use client";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Marta Eguren",
    role: "CEO · Vértice Inmobiliaria",
    avatar: "ME",
    color: "from-violet-brand to-electric",
    rating: 5,
    text: "TeknoBai transformó nuestra presencia digital por completo. El agente IA que implementaron ha cualificado más de 400 leads este año solos. Es como tener un comercial trabajando 24/7.",
    highlight: "400 leads cualificados",
  },
  {
    name: "Andoni Urrutia",
    role: "Fundador · FlowDesk",
    avatar: "AU",
    color: "from-electric to-cyan-brand",
    rating: 5,
    text: "Lanzamos con un CVR del 8.2% en la landing desde el primer día. El diseño premium que crearon comunica exactamente lo que somos. Levantamos financiación en menos de 3 meses.",
    highlight: "CVR 8.2% día 1",
  },
  {
    name: "Sara Mendizabal",
    role: "Directora · Lumina Restaurant",
    avatar: "SM",
    color: "from-amber-500 to-rose-500",
    rating: 5,
    text: "Las reservas online aumentaron un 68% el primer mes. La web parece de Michelin — eso es exactamente lo que queríamos transmitir. Nuestros clientes siempre lo comentan.",
    highlight: "+68% reservas online",
  },
  {
    name: "Kepa Arrizabalaga",
    role: "Co-fundador · APEX Fitness",
    avatar: "KA",
    color: "from-emerald-500 to-electric",
    rating: 5,
    text: "112 nuevas altas en el primer mes de lanzamiento gracias al sistema de captación con IA. El ROI fue brutal — la web se pagó sola en las primeras dos semanas.",
    highlight: "ROI en 2 semanas",
  },
];

export default function Testimonials() {
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
    <section id="testimonios" ref={ref} className="relative py-28 md:py-36">
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="reveal inline-flex items-center gap-2 text-xs font-semibold text-electric-bright uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-electric-bright" />
            Testimonios
            <span className="w-5 h-px bg-electric-bright" />
          </div>
          <h2 className="reveal text-headline font-display text-white mb-4">
            Lo que dicen los que
            <br />
            <span className="gradient-text-electric">ya lo vivieron.</span>
          </h2>
          <h3 className="reveal text-headline font-display text-white mb-4">
            (reseñas que también son irreales)
            <br />
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${(i % 2) + 1} group relative glass rounded-2xl p-7 border border-white/6 hover:border-white/12 hover:shadow-card-hover transition-all duration-400 overflow-hidden`}
            >
              {/* Subtle gradient */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-amber-400 text-sm">★</span>
                ))}
              </div>

              <p className="text-snow-muted text-sm md:text-base leading-relaxed mb-5">
                "{t.text}"
              </p>

              {/* Highlight chip */}
              <div className="mb-5">
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1.5 rounded-full bg-white/6 text-white border border-white/10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {t.highlight}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/8">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-xs font-bold text-white flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-snow-dim">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
