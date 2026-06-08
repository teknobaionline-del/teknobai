"use client";
import { useEffect, useRef } from "react";

const featured = [
  {
    text: "TeknoBai transformó nuestra presencia digital por completo. El agente IA que implementaron ha cualificado más de 400 leads este año solos. Es como tener un comercial trabajando 24/7.",
    name: "Marta Eguren",
    role: "CEO · Vértice Inmobiliaria",
  },
  {
    text: "Las reservas online aumentaron un 68% el primer mes. La web parece de Michelin — eso es exactamente lo que queríamos transmitir. Nuestros clientes siempre lo comentan.",
    name: "Sara Mendizabal",
    role: "Directora · Lumina Restaurant",
  },
];

const cards = [
  {
    name: "Andoni Urrutia",
    role: "Fundador · FlowDesk",
    rating: 5,
    text: "Lanzamos con un CVR del 8.2% en la landing desde el primer día. El diseño premium que crearon comunica exactamente lo que somos. Levantamos financiación en menos de 3 meses.",
    highlight: "CVR 8.2% día 1",
  },
  {
    name: "Kepa Arrizabalaga",
    role: "Co-fundador · APEX Fitness",
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
    <section id="testimonios" ref={ref} className="bg-[#f5f0e8] border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-8 py-20 md:py-28">

        {/* Header */}
        <div className="mb-16">
          <div className="reveal">
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bbb] font-sans block mb-6">Testimonios</span>
          </div>
          <h2 className="reveal text-3xl md:text-4xl leading-[1.1]" style={{ fontFamily: "Georgia, serif" }}>
            <em className="text-[#2563eb]">Lo que dicen los que</em><br />
            <span className="font-sans font-bold uppercase not-italic tracking-tight text-[#2563eb]">ya lo vivieron.</span>
          </h2>
        </div>

        {/* Citas grandes */}
        <div className="space-y-10 mb-16">
          {featured.map((t, i) => (
            <div key={t.name} className={`reveal reveal-delay-${i+1} border-l-2 border-[#ddd] pl-6`}>
              <p className="text-lg md:text-xl leading-relaxed text-[#333] mb-4" style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}>
                "{t.text}"
              </p>
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#bbb] font-sans">
                — {t.name}, {t.role}
              </div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-0 border border-[#e5e5e5]">
          {cards.map((t, i) => (
            <div key={t.name} className={`reveal reveal-delay-${i+1} p-8 bg-white ${i === 0 ? "border-r border-[#e5e5e5]" : ""}`}>
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="text-[#c9a84c] text-sm">★</span>
                ))}
              </div>
              <p className="text-sm text-[#666] leading-relaxed mb-6 font-sans" style={{ fontStyle: "italic" }}>
                "{t.text}"
              </p>
              <div className="flex items-center justify-between pt-5 border-t border-[#e5e5e5]">
                <div>
                  <div className="text-xs font-bold text-[#111] uppercase tracking-wide font-sans">{t.name}</div>
                  <div className="text-[10px] text-[#bbb] font-sans mt-0.5">{t.role}</div>
                </div>
                <span className="text-[9px] font-bold uppercase tracking-[0.1em] text-[#2563eb] border border-[#2563eb]/20 bg-[#2563eb]/5 px-2.5 py-1 font-sans">
                  {t.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}