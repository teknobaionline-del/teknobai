"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
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
      }, 300 + i * 150);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#050508]" />
        <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="absolute top-[-200px] left-[5%] w-[700px] h-[700px] rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)', filter: 'blur(60px)', animation: 'float 8s ease-in-out infinite' }} />
        <div className="absolute top-[-100px] right-[10%] w-[500px] h-[500px] rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)', filter: 'blur(80px)', animation: 'float 10s ease-in-out infinite', animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050508]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="max-w-xl">
            <h1
              data-hero
              className="font-display font-bold tracking-tighter text-white mb-6 leading-[1.05]"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', opacity: 0, transform: "translateY(32px)", transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              Tecnología que
              <br />
              <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #34d399 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                transforma
              </span>
              <br />
              tu negocio.
            </h1>

            <p
              data-hero
              className="text-lg text-snow-muted leading-relaxed mb-10"
              style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              Webs premium, automatización con IA y agentes inteligentes.
              Ayudamos a negocios reales a crecer con tecnología de alto nivel.
            </p>

            <div
              data-hero
              className="flex flex-wrap items-center gap-4 mb-12"
              style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2.5 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)', boxShadow: '0 0 30px rgba(59,130,246,0.4)' }}
              >
                Empezar ahora
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-3 text-white font-medium px-6 py-3.5 rounded-full border border-white/10 bg-white/4 hover:bg-white/8 transition-all duration-200"
              >
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Play size={9} fill="currentColor" className="ml-0.5" />
                </div>
                Ver proyectos
              </a>
            </div>

          </div>

          <div
            data-hero
            className="relative hidden lg:block h-[580px]"
            style={{ opacity: 0, transform: "translateY(20px) scale(0.97)", transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            <div
              className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10"
              style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 60px rgba(59,130,246,0.15)', animation: 'float 8s ease-in-out infinite' }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                alt="Equipo tecnológico premium"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.15) 0%, transparent 50%, rgba(139,92,246,0.15) 100%)' }} />
              <div
                className="absolute bottom-6 left-6 right-6 rounded-2xl p-4"
                style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-white mb-0.5">Tecnología que crece contigo</div>
                    <div className="text-xs text-snow-dim">Webs · IA · Automatización</div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-xs text-green-400 font-semibold">Disponibles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent" />
    </section>
  );
}