import Link from "next/link";
import { Cpu, ArrowRight, CheckCircle, Zap, Shield, Star } from "lucide-react";

export default function AgentesIA() {
  return (
    <main className="min-h-screen bg-void text-white">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-electric/10 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 glass border border-white/10 rounded-full px-4 py-2 mb-8 text-xs font-semibold text-electric-bright uppercase tracking-widest">
            <Cpu size={12} />
            Agentes de IA
          </div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Tu negocio en
            <br />
            <span className="gradient-text-electric">piloto automático.</span>
          </h1>
          <p className="text-snow-muted text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Sistemas autónomos que ejecutan tareas complejas, toman decisiones
            y operan procesos enteros sin intervención humana. El futuro ya está aquí.
          </p>
          <Link
            href="/#contacto"
            className="inline-flex items-center gap-2 bg-electric text-white font-semibold px-8 py-4 rounded-full hover:bg-electric-bright transition-all duration-200 hover:-translate-y-0.5"
          >
            Quiero mi agente IA
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <section className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="font-display text-3xl font-bold text-white mb-10 text-center">¿Qué puede hacer un agente IA?</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            "Gestionar reservas y citas automáticamente",
            "Enviar emails y mensajes personalizados",
            "Analizar datos y generar informes",
            "Integración con tu CRM y herramientas",
            "Tomar decisiones basadas en reglas",
            "Operar flujos de trabajo complejos",
            "Monitoreo y alertas en tiempo real",
            "Escalable según las necesidades de tu negocio",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3 glass rounded-xl px-5 py-3.5 border border-white/6">
              <CheckCircle size={16} className="text-electric-bright flex-shrink-0" />
              <span className="text-sm text-snow-muted">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 bg-ink/40">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-3xl font-bold text-white mb-10 text-center">¿Por qué un agente IA?</h2>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Zap, title: "Autónomo", desc: "Trabaja solo, sin supervisión constante." },
              { icon: Shield, title: "Inteligente", desc: "Aprende y mejora con cada interacción." },
              { icon: Star, title: "Escalable", desc: "Crece con tu negocio sin coste adicional." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass rounded-2xl p-6 border border-white/8 text-center">
                  <div className="w-12 h-12 rounded-xl bg-electric/15 flex items-center justify-center mx-auto mb-4">
                    <Icon size={20} className="text-electric-bright" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-snow-muted">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 text-center max-w-2xl mx-auto px-6">
        <h2 className="font-display text-4xl font-bold text-white mb-4">
          ¿Listo para el futuro?
        </h2>
        <p className="text-snow-muted text-lg mb-8">
          Primera consulta gratuita. Sin compromisos. Te respondemos en menos de 24h.
        </p>
        <Link
          href="/#contacto"
          className="inline-flex items-center gap-2 bg-electric text-white font-semibold px-8 py-4 rounded-full hover:bg-electric-bright transition-all duration-200 hover:-translate-y-0.5"
        >
          Empecemos
          <ArrowRight size={16} />
        </Link>
      </section>
    </main>
  );
}