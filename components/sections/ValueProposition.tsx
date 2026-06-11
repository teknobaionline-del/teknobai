"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const problems = [
  "Pierdes credibilidad ante clientes potenciales",
  "Tu competencia te adelanta digitalmente",
  "Dejas escapar reservas y contactos cada día",
  "Tu negocio parece desactualizado aunque no lo sea",
];

const results = [
  { title: "Más clientes",   desc: "Tu web trabaja por ti 24/7 atrayendo nuevos clientes mientras tú te dedicas a tu negocio." },
  { title: "Más confianza",  desc: "Una imagen profesional y cercana genera confianza instantánea." },
  { title: "Más velocidad",  desc: "Webs rápidas, modernas y optimizadas. Lista en menos de 14 días." },
  { title: "Más reservas",   desc: "Sistemas de contacto y reserva integrados para que no pierdas ninguna oportunidad." },
];

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}>
      {children}
    </motion.div>
  );
}

export default function ValueProposition() {
  return (
    <div id="valor">

      

      {/* ── EL PROBLEMA ───────────────────────────── */}
      <section className="border-b border-[#e5e5e5] bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-8 py-20 md:py-28">
          <FadeUp>
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bbb] font-sans block mb-6">El problema</span>
          </FadeUp>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl leading-[1.1] mb-8" style={{ fontFamily: "Georgia, serif" }}>
                  <span className="text-[#00000]">Sin web profesional,</span><br />
                  <em className="text-[#2563eb] not-italic" style={{ fontStyle: "italic" }}>tu negocio es prehistórico.</em>
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-sm text-[#00000] leading-relaxed mb-8 font-sans">
                  Digan lo que digan, la primera imagen es vital. En menos de 3 segundos, un cliente potencial decide si confía en ti o se va a la competencia.
                </p>
              </FadeUp>
              <ul className="space-y-4">
                {problems.map((p, i) => (
                  <FadeUp key={i} delay={0.3 + i * 0.07}>
                    <li className="flex items-start gap-4 text-sm text-[#00000] font-sans">
                      <span className="w-px h-5 bg-[#e03]/40 flex-shrink-0 mt-0.5" />
                      {p}
                    </li>
                  </FadeUp>
                ))}
              </ul>
            </div>
            {/* FOTO — reemplaza por vuestra foto cuando la tengáis */}
            <FadeUp delay={0.2}>
              <div className="h-[420px] overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.10)" }}>
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80"
                  alt="Negocio sin presencia digital"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── LA SOLUCIÓN ───────────────────────────── */}
      <section className="border-b border-[#e5e5e5] bg-white">
        <div className="max-w-7xl mx-auto px-8 py-20 md:py-28">
          <FadeUp>
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bbb] font-sans block mb-6">La solución</span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl md:text-4xl leading-[1.1] mb-4" style={{ fontFamily: "Georgia, serif" }}>
              Lo que consigues con{" "}
              <span className="font-sans font-bold uppercase not-italic text-[#2563eb]">TeknoBai.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-sm text-[#00000] leading-relaxed mb-14 max-w-xl font-sans">
              No hacemos webs bonitas. Te ayudamos a tener una presencia online de la que puedas estar orgulloso.
            </p>
          </FadeUp>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[#e5e5e5]">
            {results.map((r, i) => (
              <FadeUp key={r.title} delay={0.1 + i * 0.08}>
                <div className={`p-8 h-full border-r border-[#e5e5e5] last:border-r-0 ${i % 2 === 0 ? "bg-white" : "bg-[#f5f0e8]"}`}>
                  <div className="text-[32px] font-bold text-[#00000] font-sans mb-4 tracking-tight">0{i+1}</div>
                  <h3 className="text-sm font-bold text-[#00000] font-sans mb-2 uppercase tracking-wide">{r.title}</h3>
                  <p className="text-xs text-[#00000] leading-relaxed font-sans">{r.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ TEKNOBAI ──────────────────────── */}
      <section className="border-b border-[#e5e5e5] bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-8 py-20 md:py-28">
          <FadeUp>
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bbb] font-sans block mb-6">Por qué TeknoBai</span>
          </FadeUp>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <FadeUp delay={0.1}>
                <h2 className="text-3xl md:text-4xl leading-[1.1] mb-8" style={{ fontFamily: "Georgia, serif" }}>
                  <span className="text-[#00000]">No somos una agencia más.</span><br />
                  <em className="text-[#2563eb]">Somos tu amigo y vecino TeknoBai.</em>
                </h2>
              </FadeUp>
              <FadeUp delay={0.2}>
                <p className="text-sm text-[#00000] leading-relaxed mb-10 font-sans">
                  Identificamos los puntos débiles de tu web, los analizamos y creamos algo que encaje con lo que quieres. No vendemos webs, te proporcionamos una experiencia digital como la que nunca has tenido.
                </p>
              </FadeUp>
              <FadeUp delay={0.3}>
                <a href="#contacto" className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#111] hover:text-[#2563eb] transition-colors font-sans border-b border-[#111] hover:border-[#2563eb] pb-1">
                  Quiero mi web yaaa!!
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </FadeUp>
            </div>
            {/* FOTO — reemplaza por vuestra foto cuando la tengáis */}
            <FadeUp delay={0.2}>
              <div className="h-[420px] overflow-hidden" style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Equipo TeknoBai trabajando"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

    </div>
  );
}