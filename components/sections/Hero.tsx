"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Play, Sparkles, Code2, Bot, Cpu } from "lucide-react";



export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-hero]");
    items.forEach((item, i) => {
      setTimeout(() => {
        (item as HTMLElement).style.opacity = "1";
        (item as HTMLElement).style.transform = "translateY(0) scale(1)";
      }, 300 + i * 130);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" ref={ref}>
      {/* Background layers */}
      <div className="absolute inset-0">
        {/* Deep grid */}
        <div className="absolute inset-0 grid-lines opacity-100" />
        {/* Hero gradient */}
        <div className="absolute inset-0 bg-gradient-hero" />
        {/* Glow orbs */}
        <img src="/images/hero.png" alt="TeknoBai" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 pointer-events-none" />
        <div className="glow-orb w-[600px] h-[600px] bg-electric top-[-200px] left-[10%] opacity-20" />
        <div className="glow-orb w-[400px] h-[400px] bg-violet-brand top-[-100px] right-[20%] opacity-15" style={{animationDelay: '2s'}} />
        <div className="glow-orb w-[300px] h-[300px] bg-cyan-brand bottom-[10%] left-[30%] opacity-10" style={{animationDelay: '4s'}} />
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-void opacity-80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow */}
         

          {/* Main headline */}
          <h1
            data-hero
            className="text-display font-display text-white mb-6"
            style={{ opacity: 0, transform: "translateY(32px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            Construimos el futuro
            <br />
            <span className="gradient-text-electric">digital</span> de tu empresa.
          </h1>

          {/* Subheadline */}
          <p
            data-hero
            className="text-lg md:text-xl text-snow-muted font-light leading-relaxed max-w-2xl mb-10"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            Webs premium, chatbots IA, agentes inteligentes y automatización empresarial.
            Todo lo que necesitas para liderar en la era digital.
          </p>

          {/* CTAs */}
          <div
            data-hero
            className="flex flex-wrap items-center gap-4 mb-16"
            style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <a
              href="#contacto"
              className="btn-primary group inline-flex items-center gap-2.5 bg-electric text-white font-semibold px-7 py-3.5 rounded-full shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Empezar ahora
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-3 glass border-gradient text-white font-medium px-6 py-3.5 rounded-full hover:bg-white/8 transition-all duration-200"
            >
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-electric/20 transition-colors">
                <Play size={10} fill="currentColor" className="ml-0.5" />
              </div>
              Ver proyectos
            </a>
          </div>

          {/* Stats row */}
          
        </div>

      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent" />
    </section>
  );
}
