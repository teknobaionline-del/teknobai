"use client";
import { useEffect, useRef, useState } from "react";
import { Mail, MessageSquare, Phone, ArrowRight, Send, CheckCircle } from "lucide-react";

const services = [
  "Desarrollo web",
  "Chatbot IA",
  "Agente IA",
  "Automatización",
  "Branding",
  "SEO",
  "Todo lo anterior",
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.querySelectorAll(".reveal").forEach((el, i) => setTimeout(() => el.classList.add("visible"), i * 80));
      }),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const toggle = (s: string) =>
    setSelected((prev) => prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-void via-ink to-void" />
        <div className="glow-orb w-[600px] h-[600px] bg-electric left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-8" />
        <div className="absolute inset-0 grid-lines opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Big CTA headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal inline-flex items-center gap-2 text-xs font-semibold text-electric-bright uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-electric-bright" />
            Empecemos
            <span className="w-5 h-px bg-electric-bright" />
          </div>
          <h2 className="reveal text-display font-display text-white mb-5">
            ¿Listo para el
            <br />
            <span className="gradient-text-electric">siguiente nivel?</span>
          </h2>
          <p className="reveal text-snow-muted text-lg leading-relaxed">
            Primera consulta gratuita. Sin compromisos. Te respondemos en menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, label: "Email directo", value: "teknobai.online@gmail.com", href: "mailto:teknobai.online@gmail.com", color: "text-electric-bright", bg: "bg-electric/15" },
              { icon: MessageSquare, label: "WhatsApp", value: "+34 747 439 421", href: "https://wa.me/34747439421", color: "text-emerald-400", bg: "bg-emerald-500/15" },
              { icon: Phone, label: "Llamada directa", value: "+34 747 439 421", href: "tel:+34747439421", color: "text-violet-soft", bg: "bg-violet-brand/15" },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.label}
                  href={c.href}
                  className="reveal group flex items-center gap-4 glass rounded-2xl p-5 border border-white/6 hover:border-white/14 hover:bg-white/4 transition-all duration-300"
                >
                  <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0`}>
                    <Icon size={18} className={c.color} />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-snow-dim mb-0.5">{c.label}</div>
                    <div className="text-sm font-semibold text-white">{c.value}</div>
                  </div>
                  <ArrowRight size={14} className="text-snow-dim opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              );
            })}

            <div className="reveal glass rounded-2xl p-5 border border-white/6 mt-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-white">Disponibles ahora</span>
              </div>
              <p className="text-xs text-snow-muted leading-relaxed">
                Respuesta garantizada en menos de 24h laborables. Para urgencias, WhatsApp.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-[10px] text-snow-dim">
                {["✓ Presupuesto gratuito", "✓ Sin permanencia", "✓ Sin letra pequeña"].map(t => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="reveal glass-strong border-gradient rounded-2xl p-8 shadow-float">
              {sent ? (
                <div className="py-12 text-center">
                  <CheckCircle size={48} className="text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">¡Mensaje enviado!</h3>
                  <p className="text-snow-muted">Te contactamos en menos de 24h. ¡Hasta pronto!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { id: "name", label: "Nombre", placeholder: "Tu nombre" },
                      { id: "email", label: "Email", placeholder: "tu@empresa.com", type: "email" },
                    ].map((f) => (
                      <div key={f.id}>
                        <label className="block text-xs font-semibold text-snow-muted mb-2">{f.label}</label>
                        <input
                          type={f.type || "text"}
                          required
                          placeholder={f.placeholder}
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-snow-dim/50 focus:outline-none focus:border-electric/50 focus:bg-white/8 transition-all duration-200"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-snow-muted mb-2">¿Qué necesitas?</label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          type="button"
                          key={s}
                          onClick={() => toggle(s)}
                          className={`text-xs font-semibold px-3.5 py-2 rounded-full border transition-all duration-200 ${
                            selected.includes(s)
                              ? "bg-electric/20 border-electric/50 text-electric-bright"
                              : "bg-white/4 border-white/10 text-snow-muted hover:border-white/20"
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-snow-muted mb-2">Cuéntanos tu proyecto</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe brevemente tu negocio y qué quieres conseguir..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-snow-dim/50 focus:outline-none focus:border-electric/50 focus:bg-white/8 transition-all duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full inline-flex items-center justify-center gap-2.5 bg-electric text-white font-semibold py-4 rounded-xl shadow-glow hover:shadow-glow-lg hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <Send size={15} />
                    Enviar mensaje
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
