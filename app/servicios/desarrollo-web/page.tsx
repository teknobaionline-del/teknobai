import Link from "next/link";
import { Globe, ArrowRight, CheckCircle, Zap, Shield, Star, ArrowLeft, Clock, Users, TrendingUp, Code, Smartphone, Search } from "lucide-react";

export default function DesarrolloWeb() {
  return (
    <main className="min-h-screen bg-void text-white">

      {/* Botón volver */}
      <div className="fixed top-24 left-6 z-40">
        <Link
          href="/"
          className="inline-flex items-center gap-2 glass border border-white/10 rounded-full px-4 py-2 text-xs font-semibold text-snow-muted hover:text-white transition-all duration-200 hover:border-white/20"
        >
          <ArrowLeft size={12} />
          Volver
        </Link>
      </div>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-electric/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 glass border border-white/10 rounded-full px-4 py-2 mb-8 text-xs font-semibold text-electric-bright uppercase tracking-widest">
            <Globe size={12} />
            Desarrollo Web
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Tu web, tu mejor
            <br />
            <span className="gradient-text-electric">vendedor.</span>
          </h1>
          <p className="text-snow-muted text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Una web no es un lujo. Es la diferencia entre un cliente que te llama y uno que se va a tu competencia. Nosotros la hacemos por ti, desde Bilbao, con código real y sin plantillas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 bg-electric text-white font-semibold px-8 py-4 rounded-full hover:bg-electric-bright transition-all duration-200 hover:-translate-y-0.5 shadow-glow"
            >
              Quiero mi web
              <ArrowRight size={16} />
            </Link>
            
          </div>
        </div>
      </section>

      {/* Qué es una web bien hecha */}
      <section className="py-20 border-y border-white/6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-white mb-3">¿Qué es una web bien hecha?</h2>
            <p className="text-snow-muted max-w-2xl mx-auto">
              Una web bien hecha no es solo bonita. Es rápida, clara, fácil de usar y está pensada para que el visitante haga lo que tú quieres: llamarte, reservar, comprar o escribirte.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            {[
              { title: "Carga en menos de 2 segundos", desc: "El 53% de los usuarios abandona una web si tarda más de 3 segundos. La velocidad no es opcional." },
              { title: "Se ve bien en el móvil", desc: "Más del 70% del tráfico web viene del móvil. Tu web tiene que funcionar perfectamente en cualquier pantalla." },
              { title: "Convierte visitas en clientes", desc: "El diseño, los textos y la estructura están pensados para que el visitante acabe contactándote." },
            ].map((item) => (
              <div key={item.title} className="glass rounded-2xl p-6 border border-white/6">
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-snow-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestra idea sobre las webs */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-white mb-3">Nuestra forma de entender las webs</h2>
          <p className="text-snow-muted max-w-2xl mx-auto">
            Hay miles de agencias que te hacen una web. La mayoría coge una plantilla de WordPress, le cambia el logo y te cobra 2.000€. Nosotros no.
          </p>
        </div>
        <div className="space-y-5">
          {[
            {
              title: "Código propio, no plantillas",
              desc: "Cada web que hacemos está construida desde cero con Next.js y React. Esto significa que es más rápida, más segura y 100% tuya. Sin depender de plugins que se rompen ni actualizaciones que todo lo estropean.",
            },
            {
              title: "Diseño pensado para tu cliente, no para ganar premios",
              desc: "Nos da igual si queda bonito en Behance. Lo que nos importa es que tu cliente encuentre lo que busca en menos de 5 segundos y acabe llamándote. El diseño está al servicio del negocio, no al revés.",
            },
            {
              title: "Transparencia total durante el proceso",
              desc: "Te contamos exactamente qué estamos haciendo, cuándo y por qué. No desaparecemos dos semanas y te mandamos un resultado final. Trabajamos contigo, no para ti.",
            },
            {
              title: "Webs que crecen con tu negocio",
              desc: "No te entregamos algo que en 6 meses ya se ha quedado obsoleto. Usamos tecnología moderna que escala: puedes añadir nuevas secciones, cambiar textos tú mismo o integrar nuevas herramientas sin empezar desde cero.",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4 glass rounded-2xl p-6 border border-white/6 hover:border-white/12 transition-all duration-200">
              <CheckCircle size={18} className="text-electric-bright flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-snow-muted leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Qué incluye */}
      <section className="py-20 bg-ink/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-white mb-3">¿Qué incluye?</h2>
            <p className="text-snow-muted">Todo lo que necesitas para tener una presencia digital real desde el primer día.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { text: "Diseño 100% personalizado", detail: "Nada de plantillas. Tu web refleja tu negocio, no el de otro." },
              { text: "Adaptado a móvil y tablet", detail: "Experiencia perfecta en cualquier dispositivo." },
              { text: "Velocidad de carga optimizada", detail: "Código limpio y ligero para cargar en menos de 2 segundos." },
              { text: "SEO técnico incluido", detail: "Estructura optimizada para que Google te encuentre." },
              { text: "Formulario de contacto funcional", detail: "Los mensajes llegan directamente a tu email." },
              { text: "Panel para editar tu contenido", detail: "Cambia textos e imágenes tú mismo sin tocar código." },
              { text: "Entrega en menos de 14 días", detail: "Proceso ágil con actualizaciones constantes." },
              { text: "Soporte tras el lanzamiento", detail: "No desaparecemos cuando entregamos. Seguimos aquí." },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 glass rounded-xl px-5 py-4 border border-white/6 hover:border-white/12 transition-all duration-200">
                <CheckCircle size={16} className="text-electric-bright flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white mb-0.5">{item.text}</div>
                  <div className="text-xs text-snow-dim">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué comprarnos a nosotros */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-white mb-3">Por qué elegirnos a nosotros</h2>
          <p className="text-snow-muted max-w-2xl mx-auto">
            Somos Liher y Oier, dos chavales de la margen izquierda del Nervión. No tenemos 20 años de experiencia ni una oficina en el centro. Lo que sí tenemos es código real, honestidad y ganas de hacer las cosas bien.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { icon: Users, title: "Hablas con quien hace tu web", desc: "Sin comerciales, sin intermediarios. Liher u Oier te responden directamente. Sabes exactamente quién tiene tu proyecto en manos." },
            { icon: Shield, title: "Precio cerrado desde el principio", desc: "Te damos un presupuesto fijo antes de empezar. Sin sorpresas, sin 'esto no estaba incluido', sin letra pequeña." },
            { icon: Clock, title: "14 días, en serio", desc: "No somos una agencia con 10 proyectos a la vez. Cuando cogemos el tuyo, es el nuestro. Lo entregamos en el plazo acordado." },
            { icon: Star, title: "Diseño al nivel de grandes marcas", desc: "Usamos las mismas tecnologías y referencias de diseño que empresas como Linear, Vercel o Stripe. Tu negocio local merece lo mismo." },
            { icon: TrendingUp, title: "Pensado para que funcione", desc: "No hacemos webs para que queden bonitas en un portfolio. Las hacemos para que te traigan clientes. Cada decisión tiene un porqué." },
            { icon: Zap, title: "Tecnología moderna y duradera", desc: "Next.js, React, Tailwind. No WordPress con plugins de 2015. Tu web va a aguantar y a funcionar bien dentro de 3 años." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="glass rounded-2xl p-6 border border-white/8 hover:border-white/14 transition-all duration-200">
                <div className="w-10 h-10 rounded-xl bg-electric/15 flex items-center justify-center mb-4">
                  <Icon size={18} className="text-electric-bright" />
                </div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-snow-muted leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Proceso */}
      <section className="py-20 bg-ink/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-white mb-3">Cómo trabajamos</h2>
            <p className="text-snow-muted">Sin misterios. Esto es exactamente lo que pasa desde que nos escribes hasta que tienes tu web.</p>
          </div>
          <div className="space-y-4">
            {[
              { step: "01", title: "Nos escribes y hablamos", desc: "Nos cuentas qué necesitas, qué hace tu negocio y qué quieres conseguir. Nosotros escuchamos y te hacemos las preguntas necesarias para entenderlo bien.", time: "Día 1" },
              { step: "02", title: "Te presentamos la propuesta", desc: "Te mandamos un diseño inicial y un presupuesto cerrado. Si no te convence, lo cambiamos. No empezamos a construir hasta que estés de acuerdo con todo.", time: "Días 2-4" },
              { step: "03", title: "Construimos tu web", desc: "Empezamos a programar. Te vamos enseñando el avance para que puedas dar feedback en tiempo real, no al final cuando ya está todo hecho.", time: "Días 5-12" },
              { step: "04", title: "Revisamos juntos", desc: "Te damos acceso a la web en un entorno de pruebas. Revisamos cada detalle contigo y hacemos los ajustes que necesites.", time: "Días 13-14" },
              { step: "05", title: "Publicamos", desc: "Configuramos el dominio, el hosting y publicamos. Tu negocio ya está en internet. Y seguimos aquí si necesitas algo.", time: "Día 14" },
            ].map((item) => (
              <div key={item.step} className="flex gap-5 glass rounded-2xl p-6 border border-white/6">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-electric/15 flex items-center justify-center">
                  <span className="text-xs font-bold text-electric-bright">{item.step}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-bold text-white">{item.title}</h3>
                    <span className="text-xs text-snow-dim glass px-2.5 py-1 rounded-full border border-white/8">{item.time}</span>
                  </div>
                  <p className="text-sm text-snow-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 text-center max-w-2xl mx-auto px-6">
        <h2 className="font-display text-4xl font-bold text-white mb-4">
          ¿Hablamos?
        </h2>
        <p className="text-snow-muted text-lg mb-8">
          Sin compromisos. Cuéntanos qué necesitas y te respondemos en menos de 24 horas.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-electric text-white font-semibold px-8 py-4 rounded-full hover:bg-electric-bright transition-all duration-200 hover:-translate-y-0.5 shadow-glow"
          >
            Contactar
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 glass border border-white/10 text-snow-muted hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-200"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
        </div>
      </section>

    </main>
  );
}