"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

const services = ["Desarrollo web","Chatbot IA","Agente IA","Automatización","Branding","SEO","Todo lo anterior"];

function ContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

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
    setSelected(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!executeRecaptcha) return;
    setLoading(true);
    const token = await executeRecaptcha("contact_form");
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: (e.target as HTMLFormElement).querySelector<HTMLInputElement>('[type="text"]')?.value,
        email: (e.target as HTMLFormElement).querySelector<HTMLInputElement>('[type="email"]')?.value,
        message: (e.target as HTMLFormElement).querySelector("textarea")?.value,
        services: selected,
        recaptchaToken: token,
      }),
    });
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contacto" ref={ref} className="border-b border-[#e5e5e5]">
      <div className="grid lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#e5e5e5]">

        {/* Izquierda — info */}
        <div className="bg-white px-8 py-16 md:py-20">
          <div className="reveal">
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bbb] font-sans block mb-6">Empecemos</span>
          </div>
          <h2 className="reveal text-3xl md:text-4xl leading-[1.1] mb-8" style={{ fontFamily: "Georgia, serif" }}>
            <em className="text-[#000000]">¿Listo para el</em><br />
            <span className="font-sans font-bold uppercase not-italic tracking-tight text-[#2563eb]">siguiente nivel?</span>
          </h2>
      
          <div className="reveal space-y-6">
            {[
              { label: "Email",    value: "teknobai.online@gmail.com", href: "mailto:teknobai.online@gmail.com" },
              { label: "WhatsApp", value: "+34 000 000 000",           href: "https://wa.me/000000000" },
              { label: "Teléfono", value: "+34 000 000 000",           href: "tel:+000000000" },
            ].map(c => (
              <a key={c.label} href={c.href} className="group flex items-center justify-between border-b border-[#f0f0f0] pb-5 hover:border-[#111] transition-colors">
                <div>
                  <div className="text-[8px] font-semibold uppercase tracking-[0.18em] text-[#bbb] font-sans mb-1">{c.label}</div>
                  <div className="text-sm text-[#444] font-sans">{c.value}</div>
                </div>
                <ArrowRight size={13} className="text-[#ccc] group-hover:text-[#111] group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>

          
        </div>

        {/* Derecha — formulario */}
        <div className="bg-[#f5f0e8] px-8 py-16 md:py-20">
          {sent ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-20">
              <CheckCircle size={40} className="text-emerald-500 mb-4" />
              <h3 className="text-xl font-bold text-[#00000] font-sans mb-2">¡Mensaje enviado!</h3>
              <p className="text-sm text-[#00000] font-sans">Te contactamos en menos de 24h. ¡Hasta pronto!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { label: "Nombre", placeholder: "Tu nombre", type: "text" },
                  { label: "Email",  placeholder: "tu@empresa.com", type: "email" },
                ].map(f => (
                  <div key={f.label}>
                    <label className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#00000] font-sans mb-3">{f.label}</label>
                    <input
                      type={f.type}
                      required
                      placeholder={f.placeholder}
                      className="w-full bg-transparent border-b border-[#ddd] py-2 text-sm text-[#444] placeholder-[#ccc] focus:outline-none focus:border-[#111] transition-colors font-sans"
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#00000] font-sans mb-3">¿Qué necesitas?</label>
                <div className="flex flex-wrap gap-2">
                  {services.map(s => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => toggle(s)}
                      className={`text-[9px] font-semibold uppercase tracking-[0.1em] px-3 py-1.5 border transition-colors font-sans ${
                        selected.includes(s)
                          ? "border-[#111] text-[#111] bg-white"
                          : "border-[#ddd] text-[#bbb] hover:border-[#999] hover:text-[#666]"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#00000] font-sans mb-3">Cuéntanos tu proyecto</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe brevemente tu negocio y qué quieres conseguir..."
                  className="w-full bg-transparent border-b border-[#ddd] py-2 text-sm text-[#444] placeholder-[#ccc] focus:outline-none focus:border-[#111] transition-colors font-sans resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#111] text-white text-[10px] font-semibold uppercase tracking-[0.16em] py-4 hover:bg-[#333] transition-colors font-sans disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Enviando..." : "Enviar mensaje →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}>
      <ContactForm />
    </GoogleReCaptchaProvider>
  );
}