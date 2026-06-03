"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Shield, Zap, Users, Star, ArrowRight } from "lucide-react";

const problems = [
  "Pierdes credibilidad ante clientes potenciales",
  "Tu competencia te adelanta digitalmente",
  "Dejas escapar reservas y contactos cada día",
  "Tu negocio parece desactualizado aunque no lo sea",
];

const results = [
  { icon: TrendingUp, title: "Más clientes", desc: "Tu web trabaja por ti 24/7 atrayendo nuevos clientes mientras tú te dedicas a tu negocio." },
  { icon: Shield, title: "Más confianza", desc: "Una imagen profesional y cercana genera confianza instantánea." },
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

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function ValueProposition() {
  return (
    <section id="valor" className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-ink/60 to-void" />
      <div className="absolute inset-0 grid-lines opacity-20" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* EL PROBLEMA */}
        <div className="mb-32">
          <FadeUp>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-widest mb-4">
              <span className="w-5 h-px bg-rose-400" />
              El problema
            </div>
          </FadeUp>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp delay={0.1}>
                <h2 className="font-display text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: 700 }}>
                  Sin web profesional,
                  <br />
                  <span className="italic text-rose-400">tu negocio es prehistórico.</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-snow-muted text-lg leading-relaxed mb-8">
                  Digan lo que digan, la primera imagen es vital. En menos de 3 segundos, un cliente potencial decide si confía en ti o se va a la competencia.
                </p>
              </FadeUp>
              <ul className="space-y-3">
                {problems.map((p, i) => (
                  <FadeUp key={i} delay={0.3 + i * 0.08}>
                    <li className="flex items-start gap-3 text-sm text-snow-muted">
                      <span className="w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-400" />
                      </span>
                      {p}
                    </li>
                  </FadeUp>
                ))}
              </ul>
            </div>

            {/* FOTO EL PROBLEMA */}
            <FadeUp delay={0.2}>
              <div className="relative h-[420px] rounded-3xl overflow-hidden border border-white/10" style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}>
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                  alt="Negocio sin presencia digital"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.8) 0%, rgba(5,5,8,0.2) 60%, transparent 100%)' }} />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass rounded-2xl p-4 border border-rose-500/20" style={{ backdropFilter: 'blur(20px)' }}>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-rose-500/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-rose-400 text-sm font-bold">!</span>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white mb-0.5">Sin web profesional</div>
                        <div className="text-[10px] text-rose-400">Pierdes el 70% de clientes potenciales</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>

        {/* LA SOLUCIÓN */}
        <div className="mb-32">
          <FadeUp>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-electric-bright uppercase tracking-widest mb-4">
              <span className="w-5 h-px bg-electric-bright" />
              La solución
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="font-display text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: 700 }}>
              Lo que consigues con
              <br />
              <span className="gradient-text-electric">TeknoBai.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-snow-muted text-lg leading-relaxed mb-12 max-w-2xl">
              No hacemos webs bonitas. Te ayudamos a tener una presencia online de la que puedas estar orgulloso.
            </p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {results.map((r, i) => {
              const Icon = r.icon;
              return (
                <FadeUp key={r.title} delay={0.1 + i * 0.1}>
                  <div className="group glass rounded-2xl p-6 border border-white/6 hover:border-electric/30 hover:bg-electric/5 transition-all duration-300 cursor-default h-full">
                    <div className="w-10 h-10 rounded-xl bg-electric/15 flex items-center justify-center mb-4 group-hover:bg-electric/25 transition-colors">
                      <Icon size={18} className="text-electric-bright" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{r.title}</h3>
                    <p className="text-xs text-snow-muted leading-relaxed">{r.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>

        {/* POR QUÉ TEKNOBAI */}
        <div>
          <FadeUp>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-4">
              <span className="w-5 h-px bg-emerald-400" />
              Por qué TeknoBai
            </div>
          </FadeUp>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp delay={0.1}>
                <h2 className="font-display text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: 700 }}>
                  No somos una agencia más.
                  <br />
                  <span className="italic text-emerald-400">Somos tu amigo TeknoBai.</span>
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-snow-muted text-lg leading-relaxed mb-8">
                  Identificamos los puntos débiles de tu web, los analizamos y creamos algo que encaje con lo que quieres. No vendemos webs, te proporcionamos una experiencia digital como la que nunca has tenido.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <a href="#contacto" className="inline-flex items-center gap-2 bg-electric text-white font-semibold px-7 py-3.5 rounded-full hover:bg-electric-bright transition-all duration-200 shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5">
                  Quiero mi web yaaa!!
                  <ArrowRight size={16} />
                </a>
              </FadeUp>
            </div>

            {/* FOTO POR QUÉ TEKNOBAI */}
            <div className="space-y-4">
              <FadeUp delay={0.2}>
                <div className="relative h-[280px] rounded-3xl overflow-hidden border border-white/10" style={{ boxShadow: '0 40px 80px rgba(0,0,0,0.4)' }}>
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                    alt="Equipo TeknoBai trabajando"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(5,5,8,0.7) 0%, transparent 60%)' }} />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="glass rounded-xl p-3 border border-white/10" style={{ backdropFilter: 'blur(20px)' }}>
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-white">Proyecto entregado ✓</span>
                        <span className="text-[10px] text-emerald-400 font-semibold">En 14 días</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
              <div className="space-y-3">
                {reasons.map((r, i) => (
                  <FadeUp key={i} delay={0.3 + i * 0.07}>
                    <div className="flex items-center gap-3 glass rounded-xl px-5 py-3.5 border border-white/6 hover:border-emerald-500/20 transition-colors">
                      <Star size={14} className="text-emerald-400 fill-emerald-400 flex-shrink-0" />
                      <span className="text-sm text-snow-muted">{r}</span>
                    </div>
                  </FadeUp>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}