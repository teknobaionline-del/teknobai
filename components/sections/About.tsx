"use client";
import { useEffect, useRef } from "react";
import { Target, Eye, Heart, Lightbulb } from "lucide-react";

const values = [
  { icon: Target, title: "Obsesión por tu satisfacción", desc: "No entregamos proyectos mal hechos. Todo lo que te entreguemos estará a la perfección." },
  { icon: Eye, title: "Visión de futuro", desc: "Construimos pensando en los próximos 5 años, no en el mes que viene." },
  { icon: Heart, title: "Compromiso real", desc: "Tu éxito es el nuestro. Trabajamos como si fuéramos tu equipo interno." },
  { icon: Lightbulb, title: "Innovación continua", desc: "En caso de que descubramos un programa más rápido o mejor, actualizaremos tu web para no quedarte atras." },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll(".reveal").forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 90));
      }),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-ink/60 to-void" />
      <div className="glow-orb w-[500px] h-[500px] bg-cyan-brand right-[-200px] top-1/2 -translate-y-1/2 opacity-8" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <div>
            <div className="reveal inline-flex items-center gap-2 text-xs font-semibold text-cyan-soft uppercase tracking-widest mb-4">
              <span className="w-5 h-px bg-cyan-soft" />
              Sobre TeknoBai
            </div>
            <h2 className="reveal text-headline font-display text-white mb-6">
              No somos una agencia.
              <br />
              <span className="gradient-text-electric">Somos tu equipo tech.</span>
            </h2>
            <p className="reveal text-snow-muted text-lg leading-relaxed mb-5">
            Somos Oier y Liher, dos estudiantes de bachillerato de la margen izquierda del Nervión. 
            Empezamos TeknoBai porque vimos que muchos negocios de nuestro barrio — la peluquería 
            de la esquina, el bar de toda la vida, el taller del padre de un amigo — no tenían 
            presencia digital o la que tenían era una pena.
           </p>
            <p className="reveal text-snow-muted leading-relaxed mb-8">
            No somos una gran agencia ni pretendemos serlo. Somos dos chavales que saben lo que 
            hacen, que se toman cada proyecto en serio y que van a estar ahí cuando nos necesites. 
            Sin humos, sin letra pequeña — solo trabajo bien hecho y resultados reales para 
            negocios como el tuyo.
            </p>
          </div>

          {/* Right — values */}
          <div className="space-y-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className={`reveal reveal-delay-${i + 1} group glass rounded-xl p-5 border border-white/6 hover:border-cyan-brand/30 hover:bg-cyan-brand/5 transition-all duration-300 flex items-start gap-4 cursor-default`}
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-brand/15 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-brand/25 transition-colors">
                    <Icon size={18} className="text-cyan-soft" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-1">{v.title}</h4>
                    <p className="text-xs text-snow-muted leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
