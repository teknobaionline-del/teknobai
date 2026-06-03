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
            Desarrollo Web Premium
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Tu web, tu mejor
            <br />
            <span className="gradient-text-electric">vendedor.</span>
          </h1>
          <p className="text-snow-muted text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Diseñamos webs de alto rendimiento que convierten visitas en clientes.
            Diseño exclusivo, velocidad extrema y experiencia de usuario excepcional.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#contacto"
              className="inline-flex items-center gap-2 bg-electric text-white font-semibold px-8 py-4 rounded-full hover:bg-electric-bright transition-all duration-200 hover:-translate-y-0.5 shadow-glow"
            >
              Quiero mi web ahora
              <ArrowRight size={16} />
            </Link>
            <span className="text-xs text-snow-dim">✓ Primera consulta gratuita</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-y border-white/6">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "+50", label: "Proyectos entregados" },
              { value: "14", label: "Días de entrega media" },
              { value: "100%", label: "Clientes satisfechos" },
              { value: "24h", label: "Tiempo de respuesta" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold gradient-text-electric mb-1">{stat.value}</div>
                <div className="text-xs text-snow-dim">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué incluye */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-white mb-3">¿Qué incluye?</h2>
          <p className="text-snow-muted">Todo lo que necesitas para tener una presencia digital profesional desde el día uno.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { text: "Diseño 100% personalizado para tu negocio", detail: "Nada de plantillas. Tu web refleja tu identidad de marca." },
            { text: "Adaptado a móvil y tablet (responsive)", detail: "Experiencia perfecta en cualquier dispositivo." },
            { text: "Velocidad de carga extrema", detail: "Optimización técnica para cargar en menos de 2 segundos." },
            { text: "SEO técnico incluido", detail: "Estructura optimizada para que Google te encuentre." },
            { text: "Formulario de contacto funcional", detail: "Con notificaciones por email en tiempo real." },
            { text: "Integración con Google Maps", detail: "Para negocios locales con ubicación física." },
            { text: "Panel de administración", detail: "Gestiona tu contenido sin tocar código." },
            { text: "Entrega en menos de 14 días", detail: "Proceso ágil y transparente con actualizaciones diarias." },
            { text: "Hosting y dominio incluido el primer año", detail: "Sin costes ocultos ni sorpresas al terminar." },
            { text: "Soporte técnico post-lanzamiento", detail: "30 días de soporte gratuito tras la entrega." },
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
      </section>

      {/* Proceso */}
      <section className="py-20 bg-ink/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-white mb-3">Cómo trabajamos</h2>
            <p className="text-snow-muted">Un proceso claro y transparente para que sepas exactamente qué ocurre en cada momento.</p>
          </div>
          <div className="space-y-4">
            {[
              { step: "01", title: "Consulta gratuita", desc: "Analizamos tu negocio, tu competencia y tus objetivos. Definimos juntos qué necesitas exactamente.", time: "Día 1" },
              { step: "02", title: "Propuesta y diseño", desc: "Te presentamos el diseño completo antes de escribir una sola línea de código. Revisamos hasta que sea perfecto.", time: "Días 2-5" },
              { step: "03", title: "Desarrollo", desc: "Construimos tu web con las últimas tecnologías: Next.js, React y las mejores prácticas del sector.", time: "Días 6-12" },
              { step: "04", title: "Revisión y ajustes", desc: "Te mostramos la web en un entorno de pruebas. Hacemos todos los ajustes que necesites sin coste adicional.", time: "Días 13-14" },
              { step: "05", title: "Lanzamiento", desc: "Publicamos tu web, configuramos el dominio y te entregamos todo el acceso. Tu negocio ya está en internet.", time: "Día 14" },
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

      {/* Tecnologías */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl font-bold text-white mb-3">Tecnologías que usamos</h2>
          <p className="text-snow-muted">Las mismas herramientas que usan Netflix, Airbnb y Vercel.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {[
            { icon: Code, name: "Next.js 15", desc: "Framework de React más rápido del mercado" },
            { icon: Smartphone, name: "Tailwind CSS", desc: "Diseño moderno y consistente en todos los dispositivos" },
            { icon: Search, name: "SEO avanzado", desc: "Optimización técnica para posicionamiento" },
            { icon: Zap, name: "Vercel", desc: "Hosting de última generación con CDN global" },
            { icon: Shield, name: "TypeScript", desc: "Código robusto y sin errores en producción" },
            { icon: TrendingUp, name: "Analytics", desc: "Seguimiento de visitas y conversiones en tiempo real" },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.name} className="glass rounded-2xl p-5 border border-white/6 hover:border-white/12 transition-all duration-200 text-center">
                <div className="w-10 h-10 rounded-xl bg-electric/15 flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-electric-bright" />
                </div>
                <div className="font-bold text-white text-sm mb-1">{item.name}</div>
                <div className="text-xs text-snow-dim">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Por qué TeknoBai */}
      <section className="py-20 bg-ink/40">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-white mb-3">¿Por qué TeknoBai?</h2>
            <p className="text-snow-muted">No somos una agencia más. Somos tu socio tecnológico.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Clock, title: "Entrega rápida", desc: "Tu web lista en 14 días. Sin excusas, sin retrasos. Trabajamos con plazos reales y los cumplimos." },
              { icon: Shield, title: "Precio cerrado", desc: "Presupuesto fijo desde el primer día. Sin sorpresas, sin costes ocultos, sin letra pequeña." },
              { icon: Star, title: "Diseño premium", desc: "Diseños al nivel de las mejores marcas del mundo. Tu web no parecerá una plantilla, porque no lo es." },
              { icon: Users, title: "Trato personal", desc: "Hablas directamente con quien hace tu web. Sin intermediarios, sin call centers, sin burocracia." },
              { icon: TrendingUp, title: "Orientado a resultados", desc: "No hacemos webs bonitas por hacerlas. Cada decisión de diseño está pensada para convertir visitas en clientes." },
              { icon: Zap, title: "Tecnología puntera", desc: "Usamos Next.js 15, el mismo stack que usan las empresas más innovadoras del mundo." },
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
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 text-center max-w-2xl mx-auto px-6">
        <h2 className="font-display text-4xl font-bold text-white mb-4">
          ¿Listo para empezar?
        </h2>
        <p className="text-snow-muted text-lg mb-8">
          Primera consulta gratuita. Sin compromisos. Te respondemos en menos de 24h.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-electric text-white font-semibold px-8 py-4 rounded-full hover:bg-electric-bright transition-all duration-200 hover:-translate-y-0.5 shadow-glow"
          >
            Empecemos
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