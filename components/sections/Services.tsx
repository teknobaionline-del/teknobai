"use client";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    num: "01",
    slug: "desarrollo-web",
    title: "Webs locales y cercanas",
    description: "Webs de alto rendimiento que convierten visitas en clientes. Diseño personalizado a tus necesidades, velocidad, fluidez y una experiencia excepcional.",
    features: ["Next.js / React", "HTML", "CMS integrado", "Transparencia"],
    comingSoon: false,
  },
  {
    num: "02",
    title: "Chatbots con IA",
    description: "Asistentes virtuales tan inteligentes y complejos que todavía no hemos sido capaces de programarlos. Atienden a tus clientes 24/7, resuelven dudas y aumentan las conversiones automáticamente.",
    features: ["GPT-4 / Claude", "Integración web", "Multilenguaje", "Analytics"],
    comingSoon: true,
  },
  {
    num: "03",
    title: "Agentes de IA",
    description: "Sistemas autónomos que ejecutan tareas complejas, toman decisiones y operan procesos enteros sin intervención humana.",
    features: ["Agentes autónomos", "Integración APIs", "Workflows IA", "Monitoreo"],
    comingSoon: true,
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
    <section id="servicios" ref={ref} className="bg-white border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-8 py-20 md:py-28">

        {/* Header */}
        <div className="mb-16">
          <div className="reveal">
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bbb] font-sans block mb-6">Servicios</span>
          </div>
          <h2 className="reveal text-3xl md:text-4xl leading-[1.1]" style={{ fontFamily: "Georgia, serif" }}>
            <em className="text-[#000000]">Los únicos productos digitales</em><br />
            <span className="font-sans font-bold uppercase not-italic tracking-tight text-[#2563eb]">que necesitas para crecer.</span>
          </h2>
          <p className="reveal text-sm text-[#000000] mt-4 font-sans max-w-lg">
            Un equipo entero trabajando en conjunto para ofrecerte las mejores soluciones. No somos superhéroes — somos Liher, Oier e Iker.
          </p>
        </div>

        {/* Lista numerada */}
        <div className="divide-y divide-[#000000] border-y border-[#000000]">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`reveal reveal-delay-${i+1} flex items-start gap-8 py-10 group ${s.comingSoon ? "opacity-45" : ""}`}
            >
              {/* Número */}
              <div className="text-[42px] font-bold text-[#000000] font-sans tracking-tight leading-none w-16 flex-shrink-0 mt-1">
                {s.num}
              </div>

              {/* Contenido */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-3">
                  <h3 className="text-base font-bold text-[#000000] font-sans uppercase tracking-wide">{s.title}</h3>
                  {s.comingSoon && (
                    <span className="text-[8px] font-bold uppercase tracking-[0.1em] text-[#1D4ED8] bg-[#f0f0f0] px-2.5 py-1 font-sans">
                      Próximamente
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#888] leading-relaxed font-sans mb-4 max-w-xl">{s.description}</p>
                <div className="flex flex-wrap gap-2">
                  {s.features.map(f => (
                    <span key={f} className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#374151] border border-[#e5e5e5] px-2.5 py-1 font-sans">
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              {!s.comingSoon && (
                <a
                  href={`/servicios/${s.slug}`}
                  className="hidden md:inline-flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.14em] text-[#999] hover:text-[#111] transition-colors font-sans flex-shrink-0 mt-2 group-hover:text-[#111]"
                >
                  Saber más <ArrowRight size={12} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}