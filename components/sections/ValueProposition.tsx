"use client";
import { useEffect, useRef } from "react";
import { TrendingUp, Shield, Zap, Users, Star, ArrowRight } from "lucide-react";

const problems = [
  "Pierdes credibilidad ante clientes potenciales",
  "Tu competencia te adelanta digitalmente",
  "Dejas escapar reservas y contactos cada día",
  "Tu negocio parece desactualizado aunque no lo sea",
];

const results = [
  { icon: TrendingUp, title: "Más clientes", desc: "Tu web trabaja por ti 24/7 atrayendo nuevos clientes mientras tú te dedicas a tu negocio." },
  { icon: Shield, title: "Más confianza", desc: "Una imagen profesional y cercana genera confianza ." },
  { icon: Zap, title: "Más velocidad", desc: "Webs rápidas, modernas, fluidas y optimizadas. Lista en menos de 14 días." },
  { icon: Users, title: "Más reservas", desc: "Sistemas de contacto y reserva integrados para que no pierdas ninguna oportunidad." },
];

const reasons = [
  "Un diseño que encaje con tu negocio",
  "Enfoque moderno con IA y automatización",
  "Entrega en menos de 14 días",
  "Soporte técnico cuando lo necesites",
  "Precio justo para negocios locales",
  "Pero sobre todo, TRANSPARENCIA",
];

export default function ValueProposition() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            e.target
              .querySelectorAll(".reveal")
              .forEach((el, i) =>
                setTimeout(() => el.classList.add("visible"), i * 80)
              );
        }),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="valor" ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-ink/60 to-void" />
      <div className="absolute inset-0 grid-lines opacity-20" />

      <div className="relative max-w-6xl mx-auto px-6">

        <div className="mb-24">
          <div className="reveal inline-flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-rose-400" />
            El problema
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="reveal font-display text-white mb-6" style={{fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: 700}}>
                Sin web profesional,
                <br />
                <span className="italic text-rose-400">tu negocio es prehistórico.</span>
              </h2>
              <p className="reveal text-snow-muted text-lg leading-relaxed mb-8">
                Digan lo que digan la primera imagen es vital. En menos de 3 segundos, un cliente potencial decide si confía en ti o se va a la competencia.
              </p>
              <ul className="space-y-3">
                {problems.map((p, i) => (
                  <li key={i} className="reveal flex items-start gap-3 text-sm text-snow-muted">
                    <span className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
        </div>

        <div className="mb-24">
          <div className="reveal inline-flex items-center gap-2 text-xs font-semibold text-electric-bright uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-electric-bright" />
            La solución
          </div>
          <h2 className="reveal font-display text-white mb-4" style={{fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: 700}}>
            Lo que consigues con
            <br />
            <span className="gradient-text-electric">TeknoBai.</span>
          </h2>
          <p className="reveal text-snow-muted text-lg leading-relaxed mb-12 max-w-2xl">
            No hacemos webs bonitas. Te ayudamos a tener una presencia online de la que puedas estar orgulloso. No te preocuper por tu imagen, esta todo controlado.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {results.map((r, i) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="reveal group glass rounded-2xl p-6 border border-white/6 hover:border-electric/30 hover:bg-electric/5 transition-all duration-300 cursor-default">
                  <div className="w-10 h-10 rounded-xl bg-electric/15 flex items-center justify-center mb-4 group-hover:bg-electric/25 transition-colors">
                    <Icon size={18} className="text-electric-bright" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{r.title}</h3>
                  <p className="text-xs text-snow-muted leading-relaxed">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="reveal inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-emerald-400" />
            Por qué TeknoBai
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="reveal font-display text-white mb-6" style={{fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: 700}}>
                No somos una agencia más.
                <br />
                <span className="italic text-emerald-400">Somos tu amigo y vecino TeknoBai.</span>
              </h2>
              <p className="reveal text-snow-muted text-lg leading-relaxed mb-8">
                Identificamos los puntos débiles de tu web, los analizamos y creamos algo que encaje con lo que quieres. No vendemos webs, te proporcionamos una experiencia digital como la que nunca has tenido.
              </p>
              <a href="#contacto" className="reveal inline-flex items-center gap-2 bg-electric text-white font-semibold px-7 py-3.5 rounded-full hover:bg-electric-bright transition-all duration-200 shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5">
                Quiero mi web yaaa!!
                <ArrowRight size={16} />
              </a>
            </div>
            <div className="reveal space-y-3">
              {reasons.map((r, i) => (
                <div key={i} className="flex items-center gap-3 glass rounded-xl px-5 py-3.5 border border-white/6">
                  <Star size={14} className="text-emerald-400 fill-emerald-400 flex-shrink-0" />
                  <span className="text-sm text-snow-muted">{r}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
