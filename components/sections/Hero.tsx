"use client";
import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-hero]");
    items.forEach((item, i) => {
      setTimeout(() => {
        (item as HTMLElement).style.opacity = "1";
        (item as HTMLElement).style.transform = "translateY(0)";
      }, 200 + i * 160);
    });
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-end overflow-hidden">

      {/* FOTO DE FONDO — reemplaza esta URL por vuestra foto de equipo cuando la tengáis */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=85"
          alt="Equipo TeknoBai"
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0.05) 100%)" }}
        />
      </div>

      {/* Contenido */}
      <div className="relative max-w-7xl mx-auto px-8 pb-14 pt-40 w-full">

        {/* Bienvenido */}
        <div
          data-hero
          className="mb-8"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.7s cubic-bezier(0.16,1,0.3,1)" }}
        >
          <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/50 font-sans">
            Bienvenido
          </span>
          <div className="w-6 h-px bg-white/30 mt-2" />
        </div>

        {/* Titular */}
        <h1
          data-hero
          className="mb-10 leading-[0.92]"
          style={{
            fontSize: "clamp(3.8rem, 10vw, 8.5rem)",
            opacity: 0,
            transform: "translateY(28px)",
            transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <span className="block italic font-light text-white" style={{ fontFamily: "Georgia, serif" }}>Webs para</span>
          <span className="block font-bold uppercase text-white font-sans tracking-tight">la Margen</span>
          <span className="block italic font-light text-white" style={{ fontFamily: "Georgia, serif" }}>Izquierda</span>
        </h1>

        {/* Bajada + CTA */}
        <div
          data-hero
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-8"
          style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)" }}
        >
          <p className="text-sm text-white/55 leading-relaxed max-w-xs font-sans">
            Tres chavales del País Vasco que hacen webs de verdad para negocios como el tuyo. Sin humos, sin letra pequeña.
          </p>
          <a
            href="#contacto"
            className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white hover:text-white/60 transition-colors font-sans flex-shrink-0"
          >
            Empezar ahora
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
    </section>
  );
}