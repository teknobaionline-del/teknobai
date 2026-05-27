"use client";
import { useEffect, useRef } from "react";
import { ArrowRight, Play, TrendingUp, Users, Zap, Globe, Bot, BarChart3, CheckCircle, Star } from "lucide-react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = el.querySelectorAll("[data-hero]");
    items.forEach((item, i) => {
      setTimeout(() => {
        (item as HTMLElement).style.opacity = "1";
        (item as HTMLElement).style.transform = "translateY(0) scale(1)";
      }, 300 + i * 150);
    });
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#050508]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
        <div className="absolute top-[-200px] left-[5%] w-[700px] h-[700px] rounded-full opacity-20" style={{
          background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'float 8s ease-in-out infinite'
        }} />
        <div className="absolute top-[-100px] right-[10%] w-[500px] h-[500px] rounded-full opacity-10" style={{
          background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'float 10s ease-in-out infinite',
          animationDelay: '2s'
        }} />
        <div className="absolute bottom-[5%] left-[30%] w-[400px] h-[400px] rounded-full opacity-8" style={{
          background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'float 12s ease-in-out infinite',
          animationDelay: '4s'
        }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050508]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT — Copy */}
          <div className="max-w-xl">
            
            {/* Headline */}
            <h1
              data-hero
              className="font-display font-bold tracking-tighter text-white mb-6 leading-[1.05]"
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 4.5rem)',
                opacity: 0,
                transform: "translateY(32px)",
                transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              Tecnología que
              <br />
              <span style={{
                background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #34d399 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                transforma
              </span>
              <br />
              tu negocio.
            </h1>

            {/* Subheadline */}
            <p
              data-hero
              className="text-lg text-snow-muted leading-relaxed mb-10"
              style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              Webs premium, automatización con IA y agentes inteligentes.
              Ayudamos a negocios reales a crecer con tecnología de alto nivel.
            </p>

            {/* CTAs */}
            <div
              data-hero
              className="flex flex-wrap items-center gap-4 mb-12"
              style={{ opacity: 0, transform: "translateY(24px)", transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              <a
                href="#contacto"
                className="group inline-flex items-center gap-2.5 text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #3b82f6, #6366f1)',
                  boxShadow: '0 0 30px rgba(59,130,246,0.4)'
                }}
              >
                Empezar ahora
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
               <a
                href="#portfolio"
                className="group inline-flex items-center gap-3 text-white font-medium px-6 py-3.5 rounded-full border border-white/10 bg-white/4 hover:bg-white/8 transition-all duration-200"
              >
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Play size={9} fill="currentColor" className="ml-0.5" />
                </div>
                Ver proyectos
              </a>
            </div>
          </div>

          {/* RIGHT — Floating UI */}
          <div
            data-hero
            className="relative hidden lg:block h-[600px]"
            style={{ opacity: 0, transform: "translateY(20px) scale(0.97)", transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            {/* Main dashboard card */}
            <div
              className="absolute top-8 left-8 right-8 rounded-2xl border border-white/10 overflow-hidden"
              style={{
                background: 'rgba(255,255,255,0.03)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 0 60px rgba(59,130,246,0.1), 0 40px 80px rgba(0,0,0,0.4)',
                animation: 'float 7s ease-in-out infinite'
              }}
            >
              {/* Toolbar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-3 h-5 rounded-md bg-white/5 flex items-center px-3">
                  <span className="text-[10px] text-snow-dim">teknobai.com/dashboard</span>
                </div>
              </div>
              {/* Content */}
              <div className="p-5">
                {/* Top metrics */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {[
                    { label: "Visitas", value: "12.4K", trend: "+24%", color: "#60a5fa" },
                    { label: "Conversión", value: "8.2%", trend: "+12%", color: "#34d399" },
                    { label: "Ingresos", value: "€48K", trend: "+31%", color: "#818cf8" },
                  ].map((m) => (
                    <div key={m.label} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="text-[10px] text-snow-dim mb-1">{m.label}</div>
                      <div className="text-base font-bold text-white">{m.value}</div>
                      <div className="text-[10px] font-semibold mt-0.5" style={{ color: m.color }}>{m.trend}</div>
                    </div>
                  ))}
                </div>
                {/* Chart bars */}
                <div className="rounded-xl p-3 mb-3" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-semibold text-snow-muted">Rendimiento mensual</span>
                    <BarChart3 size={12} className="text-electric-bright" />
                  </div>
                  <div className="flex items-end gap-1.5 h-16">
                    {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-sm"
                        style={{
                          height: `${h}%`,
                          background: i === 11
                            ? 'linear-gradient(to top, #3b82f6, #60a5fa)'
                            : 'rgba(255,255,255,0.08)',
                          transition: 'height 0.3s ease'
                        }}
                      />
                    ))}
                  </div>
                </div>
                {/* Activity */}
                <div className="space-y-2">
                  {[
                    { text: "Nueva web lanzada", time: "hace 2m", dot: "#34d399" },
                    { text: "Chatbot activado", time: "hace 1h", dot: "#60a5fa" },
                    { text: "Automatización configurada", time: "hace 3h", dot: "#818cf8" },
                  ].map((a) => (
                    <div key={a.text} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: a.dot }} />
                      <span className="text-[11px] text-snow-muted flex-1">{a.text}</span>
                      <span className="text-[10px] text-snow-dim">{a.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating card — AI */}
            <div
              className="absolute bottom-24 -left-4 w-52 rounded-2xl p-4 border border-white/10"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                animation: 'float 9s ease-in-out infinite',
                animationDelay: '1.5s'
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center">
                  <Bot size={14} className="text-violet-400" />
                </div>
                <span className="text-xs font-semibold text-white">Agente IA</span>
              </div>
              <div className="space-y-1.5">
                <div className="h-2 rounded-full bg-white/8 w-full" />
                <div className="h-2 rounded-full bg-white/8 w-4/5" />
                <div className="h-2 rounded-full bg-violet-500/30 w-3/5" />
              </div>
              <div className="mt-3 flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[10px] text-green-400">Procesando 24/7</span>
              </div>
            </div>

            {/* Floating card — Web */}
            <div
              className="absolute bottom-16 -right-4 w-48 rounded-2xl p-4 border border-white/10"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                animation: 'float 11s ease-in-out infinite',
                animationDelay: '3s'
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Globe size={14} className="text-blue-400" />
                </div>
                <span className="text-xs font-semibold text-white">Web premium</span>
              </div>
              <div className="flex items-center gap-1.5 mt-2">
                <TrendingUp size={12} className="text-green-400" />
                <span className="text-[11px] text-green-400 font-semibold">+340% conversión</span>
              </div>
            </div>

            {/* Floating badge — clients */}
            <div
              className="absolute top-4 -right-2 rounded-full px-3 py-1.5 border border-white/10 flex items-center gap-2"
              style={{
                background: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(20px)',
                animation: 'float 6s ease-in-out infinite',
                animationDelay: '0.5s'
              }}
            >
              <div className="flex -space-x-1">
                {['#3b82f6','#8b5cf6','#34d399'].map((c, i) => (
                  <div key={i} className="w-5 h-5 rounded-full border border-black/40" style={{ background: c }} />
                ))}
              </div>
              <span className="text-[11px] font-semibold text-white">+50 clientes</span>
            </div>

            {/* Stars badge */}
            <div
              className="absolute top-1/2 -right-6 rounded-full px-3 py-1.5 border border-yellow-500/20 flex items-center gap-1.5"
              style={{
                background: 'rgba(234,179,8,0.08)',
                backdropFilter: 'blur(20px)',
                animation: 'float 8s ease-in-out infinite',
                animationDelay: '2s'
              }}
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent" />
    </section>
  );
}