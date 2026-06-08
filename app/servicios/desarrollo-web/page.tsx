import Link from "next/link";
import { Globe, ArrowRight, CheckCircle, Zap, Shield, Star, ArrowLeft, Clock, Users, TrendingUp } from "lucide-react";

export default function DesarrolloWeb() {
  return (
    <main className="min-h-screen bg-white" style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}>

      {/* Botón volver */}
      <div className="fixed top-6 left-6 z-40">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white border border-[#e5e5e5] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#999] hover:text-[#111] hover:border-[#111] transition-all duration-200"
        >
          <ArrowLeft size={11} />
          Volver
        </Link>
      </div>

      {/* Hero */}
      <section className="relative min-h-[60vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1600&q=85"
            alt="Desarrollo web TeknoBai"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.30) 55%, rgba(0,0,0,0.05) 100%)" }} />
        </div>
        <div className="relative max-w-4xl mx-auto px-8 pb-14 pt-32 w-full">
          <div className="mb-6">
            <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/50">Servicio</span>
            <div className="w-6 h-px bg-white/30 mt-2" />
          </div>
          <h1 className="mb-8 leading-[0.92]" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
            <span className="block italic font-light text-white" style={{ fontFamily: "Georgia, serif" }}>Tu web, tu mejor</span>
            <span className="block font-bold uppercase text-white tracking-tight">vendedor.</span>
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
            <p className="text-sm text-white/55 leading-relaxed max-w-sm">
              Una web no es un lujo. Es la diferencia entre un cliente que te llama y uno que se va a tu competencia. Desde Bilbao, con código real y sin plantillas.
            </p>
            <Link
              href="/#contacto"
              className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-white hover:text-white/60 transition-colors flex-shrink-0"
            >
              Quiero mi web
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </section>

      {/* Qué es una web bien hecha */}
      <section className="bg-[#e8dcc8] border-b border-[#e5e5e5]">
        <div className="max-w-4xl mx-auto px-8 py-20">
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bbb] block mb-6">¿Qué es una web bien hecha?</span>
          <h2 className="text-3xl md:text-4xl leading-[1.1] mb-12" style={{ fontFamily: "Georgia, serif" }}>
            <em className="text-[#2563eb]">No es solo bonita.</em><br />
            <span className="font-sans font-bold uppercase not-italic tracking-tight text-[#111]">Es rápida, clara y convierte.</span>
          </h2>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#d4c8b0] border border-[#d4c8b0]">
            {[
              { title: "Carga en menos de 2s", desc: "El 53% de los usuarios abandona si tarda más de 3 segundos. La velocidad no es opcional." },
              { title: "Perfecta en móvil", desc: "Más del 70% del tráfico viene del móvil. Tu web tiene que funcionar en cualquier pantalla." },
              { title: "Convierte visitas en clientes", desc: "Diseño, textos y estructura pensados para que el visitante acabe contactándote." },
            ].map((item, i) => (
              <div key={item.title} className={`p-8 ${i % 2 === 0 ? "bg-white" : "bg-[#e8dcc8]"}`}>
                <div className="text-[32px] font-bold text-[#e5e5e5] font-sans mb-4 tracking-tight">0{i+1}</div>
                <h3 className="text-sm font-bold text-[#111] uppercase tracking-wide font-sans mb-2">{item.title}</h3>
                <p className="text-xs text-[#999] leading-relaxed font-sans">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestra forma de entender las webs */}
      <section className="bg-white border-b border-[#e5e5e5]">
        <div className="max-w-4xl mx-auto px-8 py-20">
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bbb] block mb-6">Nuestra forma de entender las webs</span>
          <h2 className="text-3xl md:text-4xl leading-[1.1] mb-4" style={{ fontFamily: "Georgia, serif" }}>
            <em className="text-[#2563eb]">Hay miles de agencias.</em><br />
            <span className="font-sans font-bold uppercase not-italic tracking-tight text-[#111]">Nosotros no somos una más.</span>
          </h2>
          <p className="text-sm text-[#777] leading-relaxed mb-12 font-sans max-w-xl">
            La mayoría coge una plantilla de WordPress, le cambia el logo y te cobra 2.000€. Nosotros no.
          </p>
          <div className="divide-y divide-[#e5e5e5] border-y border-[#e5e5e5]">
            {[
              { title: "Código propio, no plantillas", desc: "Cada web está construida desde cero con Next.js y React. Más rápida, más segura y 100% tuya. Sin plugins que se rompen." },
              { title: "Diseño pensado para tu cliente, no para ganar premios", desc: "Lo que importa es que tu cliente encuentre lo que busca en menos de 5 segundos y acabe llamándote." },
              { title: "Transparencia total durante el proceso", desc: "Te contamos exactamente qué estamos haciendo y cuándo. Trabajamos contigo, no para ti." },
              { title: "Webs que crecen con tu negocio", desc: "Tecnología moderna que escala. Añade secciones, cambia textos tú mismo o integra nuevas herramientas sin empezar desde cero." },
            ].map((item, i) => (
              <div key={item.title} className="flex gap-5 py-8">
                <div className="w-px bg-[#2563eb]/30 flex-shrink-0 mt-1" style={{ height: "40px" }} />
                <div>
                  <h3 className="text-sm font-bold text-[#111] uppercase tracking-wide font-sans mb-2">{item.title}</h3>
                  <p className="text-sm text-[#777] leading-relaxed font-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="bg-[#e8dcc8] border-b border-[#e5e5e5]">
        <div className="max-w-4xl mx-auto px-8 py-20">
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bbb] block mb-6">¿Qué incluye?</span>
          <h2 className="text-3xl md:text-4xl leading-[1.1] mb-4" style={{ fontFamily: "Georgia, serif" }}>
            <em className="text-[#2563eb]">Todo lo que necesitas</em><br />
            <span className="font-sans font-bold uppercase not-italic tracking-tight text-[#111]">desde el primer día.</span>
          </h2>
          <p className="text-sm text-[#777] leading-relaxed mb-12 font-sans">Todo para tener una presencia digital real.</p>
          <div className="grid sm:grid-cols-2 gap-0 border border-[#d4c8b0]">
            {[
              { text: "Diseño 100% personalizado",       detail: "Nada de plantillas. Tu web refleja tu negocio, no el de otro." },
              { text: "Adaptado a móvil y tablet",       detail: "Experiencia perfecta en cualquier dispositivo." },
              { text: "Velocidad de carga optimizada",   detail: "Código limpio y ligero para cargar en menos de 2 segundos." },
              { text: "SEO técnico incluido",             detail: "Estructura optimizada para que Google te encuentre." },
              { text: "Formulario de contacto funcional",detail: "Los mensajes llegan directamente a tu email." },
              { text: "Panel para editar tu contenido",  detail: "Cambia textos e imágenes tú mismo sin tocar código." },
              { text: "Entrega en menos de 14 días",     detail: "Proceso ágil con actualizaciones constantes." },
              { text: "Soporte tras el lanzamiento",     detail: "No desaparecemos cuando entregamos. Seguimos aquí." },
            ].map((item, i) => (
              <div key={item.text} className={`flex items-start gap-4 p-6 border-b border-r border-[#d4c8b0] ${i % 2 === 0 ? "bg-white" : "bg-[#e8dcc8]"}`}>
                <CheckCircle size={14} className="text-[#2563eb] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-[#111] uppercase tracking-wide font-sans mb-1">{item.text}</div>
                  <div className="text-xs text-[#999] font-sans leading-relaxed">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="bg-white border-b border-[#e5e5e5]">
        <div className="max-w-4xl mx-auto px-8 py-20">
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bbb] block mb-6">Por qué elegirnos</span>
          <h2 className="text-3xl md:text-4xl leading-[1.1] mb-4" style={{ fontFamily: "Georgia, serif" }}>
            <em className="text-[#2563eb]">Somos Liher y Oier,</em><br />
            <span className="font-sans font-bold uppercase not-italic tracking-tight text-[#111]">de la margen izquierda.</span>
          </h2>
          <p className="text-sm text-[#777] leading-relaxed mb-12 font-sans max-w-xl">
            No tenemos 20 años de experiencia ni una oficina en el centro. Lo que sí tenemos es código real, honestidad y ganas de hacer las cosas bien.
          </p>
          <div className="grid sm:grid-cols-2 gap-0 border border-[#e5e5e5]">
            {[
              { icon: Users,       title: "Hablas con quien hace tu web",         desc: "Sin comerciales, sin intermediarios. Liher u Oier te responden directamente." },
              { icon: Shield,      title: "Precio cerrado desde el principio",    desc: "Presupuesto fijo antes de empezar. Sin sorpresas ni letra pequeña." },
              { icon: Clock,       title: "14 días, en serio",                    desc: "Cuando cogemos tu proyecto, es el nuestro. Lo entregamos en el plazo acordado." },
              { icon: Star,        title: "Diseño al nivel de grandes marcas",    desc: "Las mismas tecnologías que Linear, Vercel o Stripe. Tu negocio local merece lo mismo." },
              { icon: TrendingUp,  title: "Pensado para que funcione",            desc: "No hacemos webs para portfolios. Las hacemos para que te traigan clientes." },
              { icon: Zap,         title: "Tecnología moderna y duradera",        desc: "Next.js, React, Tailwind. No WordPress con plugins de 2015." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className={`p-7 border-b border-r border-[#e5e5e5] ${i % 2 === 0 ? "bg-white" : "bg-[#e8dcc8]"}`}>
                  <div className="w-8 h-8 border border-[#e5e5e5] bg-white flex items-center justify-center mb-5">
                    <Icon size={14} className="text-[#2563eb]" />
                  </div>
                  <h3 className="text-xs font-bold text-[#111] uppercase tracking-wide font-sans mb-2">{item.title}</h3>
                  <p className="text-xs text-[#999] leading-relaxed font-sans">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-[#e8dcc8] border-b border-[#e5e5e5]">
        <div className="max-w-4xl mx-auto px-8 py-20">
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bbb] block mb-6">Cómo trabajamos</span>
          <h2 className="text-3xl md:text-4xl leading-[1.1] mb-4" style={{ fontFamily: "Georgia, serif" }}>
            <em className="text-[#2563eb]">Sin misterios.</em><br />
            <span className="font-sans font-bold uppercase not-italic tracking-tight text-[#111]">Esto es lo que pasa.</span>
          </h2>
          <p className="text-sm text-[#777] leading-relaxed mb-12 font-sans">Exactamente lo que ocurre desde que nos escribes hasta que tienes tu web.</p>
          <div className="divide-y divide-[#d4c8b0] border-y border-[#d4c8b0]">
            {[
              { step: "01", title: "Nos escribes y hablamos",      desc: "Nos cuentas qué necesitas y qué quieres conseguir. Escuchamos y hacemos las preguntas necesarias.", time: "Día 1" },
              { step: "02", title: "Te presentamos la propuesta",  desc: "Diseño inicial y presupuesto cerrado. Si no te convence, lo cambiamos. No empezamos hasta que estés de acuerdo.", time: "Días 2–4" },
              { step: "03", title: "Construimos tu web",           desc: "Programamos y te enseñamos el avance en tiempo real para que puedas dar feedback.", time: "Días 5–12" },
              { step: "04", title: "Revisamos juntos",             desc: "Acceso a la web en entorno de pruebas. Revisamos cada detalle y hacemos los ajustes necesarios.", time: "Días 13–14" },
              { step: "05", title: "Publicamos",                   desc: "Configuramos dominio y hosting. Tu negocio ya está en internet. Y seguimos aquí si necesitas algo.", time: "Día 14" },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-6 py-8 bg-white px-6">
                <div className="text-[36px] font-bold text-[#e5e5e5] font-sans tracking-tight leading-none w-14 flex-shrink-0 mt-1">{item.step}</div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-bold text-[#111] uppercase tracking-wide font-sans">{item.title}</h3>
                    <span className="text-[9px] font-semibold uppercase tracking-[0.12em] text-[#bbb] border border-[#e5e5e5] px-2.5 py-1 font-sans">{item.time}</span>
                  </div>
                  <p className="text-sm text-[#777] leading-relaxed font-sans">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-white py-24 text-center">
        <div className="max-w-2xl mx-auto px-8">
          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bbb] block mb-6">Empecemos</span>
          <h2 className="text-3xl md:text-4xl leading-[1.1] mb-6" style={{ fontFamily: "Georgia, serif" }}>
            <em className="text-[#2563eb]">¿Hablamos?</em><br />
            <span className="font-sans font-bold uppercase not-italic tracking-tight text-[#111]">Sin compromisos.</span>
          </h2>
          <p className="text-sm text-[#777] mb-10 font-sans leading-relaxed">
            Cuéntanos qué necesitas y te respondemos en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contacto"
              className="group inline-flex items-center gap-3 bg-[#111] text-white text-[10px] font-semibold uppercase tracking-[0.16em] px-8 py-4 hover:bg-[#333] transition-colors font-sans"
            >
              Contactar
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/"
              className="group inline-flex items-center gap-3 border border-[#e5e5e5] text-[#999] hover:text-[#111] hover:border-[#111] text-[10px] font-semibold uppercase tracking-[0.16em] px-8 py-4 transition-all font-sans"
            >
              <ArrowLeft size={13} />
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}