"use client";
import { useEffect, useRef } from "react";

const values = [
  { title: "Obsesión por tu satisfacción", desc: "No entregamos proyectos mal hechos. Todo lo que te entreguemos estará a la perfección." },
  { title: "Visión de futuro",             desc: "Construimos pensando en los próximos 5 años, no en el mes que viene." },
  { title: "Compromiso real",              desc: "Tu éxito es el nuestro. Trabajamos como si fuéramos tu equipo interno." },
  { title: "Innovación continua",          desc: "Si descubrimos una tecnología mejor, actualizaremos tu web para que no te quedes atrás." },
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
    <section id="nosotros" ref={ref} className="border-b border-[#e5e5e5]">

      {/* FOTO GRANDE — reemplaza por vuestra foto de equipo cuando la tengáis */}
      <div className="w-full h-[340px] md:h-[460px] overflow-hidden border-b border-[#e5e5e5]">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&q=80"
          alt="Equipo TeknoBai"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#e5e5e5]">

        {/* Texto */}
        <div className="bg-white px-8 py-16 md:py-20">
          <div className="reveal">
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bbb] font-sans block mb-6">Sobre TeknoBai</span>
          </div>
          <h2 className="reveal text-3xl md:text-4xl leading-[1.1] mb-8" style={{ fontFamily: "Georgia, serif" }}>
            <em className="text-[#2563eb]">No somos una agencia.</em><br />
            <span className="font-sans font-bold uppercase not-italic tracking-tight text-[#2563eb]">Somos tu equipo tech.</span>
          </h2>
          <p className="reveal text-sm text-[#777] leading-relaxed mb-5 font-sans">
            Somos Oier, Iker y Liher, tres estudiantes de bachillerato de la margen izquierda del Nervión. Empezamos TeknoBai porque vimos que muchos negocios de nuestro barrio — la peluquería de la esquina, el bar de toda la vida, el taller del padre de un amigo — no tenían presencia digital o la que tenían era una pena.
          </p>
          <p className="reveal text-sm text-[#777] leading-relaxed font-sans">
            No somos una gran agencia ni pretendemos serlo. Somos tres chavales que saben lo que hacen, que se toman cada proyecto en serio y que van a estar ahí cuando nos necesites. Sin humos, sin letra pequeña — solo trabajo bien hecho y resultados reales para negocios como el tuyo.
          </p>
        </div>

        {/* Values */}
        <div className="bg-[#f5f0e8] px-8 py-16 md:py-20">
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bbb] font-sans block mb-8">Nuestros valores</span>
          <div className="divide-y divide-[#e5e5e5]">
            {values.map((v, i) => (
              <div key={v.title} className={`reveal reveal-delay-${i+1} flex gap-5 py-6`}>
                <div className="w-px bg-[#ddd] flex-shrink-0 mt-1" style={{ height: "40px" }} />
                <div>
                  <h4 className="text-xs font-bold text-[#111] uppercase tracking-wide font-sans mb-1">{v.title}</h4>
                  <p className="text-xs text-[#aaa] leading-relaxed font-sans">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}