"use client";
import { useEffect, useRef } from "react";
import { Brain, GitBranch, BarChart3, MessageSquare, ArrowRight, Workflow } from "lucide-react";

const capabilities = [
  { icon: Brain, title: "Razonamiento avanzado", desc: "Modelos LLM entrenados para tu industria específica" },
  { icon: GitBranch, title: "Decisiones autónomas", desc: "Agentes que evalúan contexto y actúan sin supervisión" },
  { icon: Workflow, title: "Flujos complejos", desc: "Orquestación de procesos multi-paso con memoria" },
  { icon: BarChart3, title: "Analytics en tiempo real", desc: "Dashboard de rendimiento y métricas de IA" },
  { icon: MessageSquare, title: "Conversaciones naturales", desc: "NLP de última generación para atención al cliente" },
];

const terminalLines = [
  { type: "comment", text: "// TeknoBai AI Agent v2.4" },
  { type: "cmd", text: "$ agent.init({ model: 'gpt-4o', context: 'business' })" },
  { type: "success", text: "✓ Agente inicializado correctamente" },
  { type: "cmd", text: "$ agent.connect({ crm: true, calendar: true, email: true })" },
  { type: "success", text: "✓ Integrado con 3 servicios" },
  { type: "cmd", text: "$ agent.run('Gestionar reservas y consultas')" },
  { type: "info", text: "→ Procesando 47 consultas activas..." },
  { type: "info", text: "→ 12 reservas confirmadas automáticamente" },
  { type: "info", text: "→ 3 leads cualificados detectados" },
  { type: "success", text: "✓ Ahorro estimado: 6.2h / día" },
];

export default function AISection() {
  const ref = useRef<HTMLDivElement>(null);
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

  return (
    <section id="ia" ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      {/* BG */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-ink to-void" />
      <div className="glow-orb w-[700px] h-[700px] bg-violet-brand right-[-300px] top-1/2 -translate-y-1/2 opacity-10" />
      <div className="glow-orb w-[400px] h-[400px] bg-electric left-[-150px] top-1/4 opacity-8" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="reveal inline-flex items-center gap-2 text-xs font-semibold text-violet-soft uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-violet-soft" />
            Inteligencia Artificial
            <span className="w-5 h-px bg-violet-soft" />
          </div>
          <h2 className="reveal text-headline font-display text-white mb-5">
            IA que trabaja por ti
            <br />
            <span className="gradient-text-electric">mientras duermes.</span>
          </h2>
          <p className="reveal text-snow-muted text-lg leading-relaxed">
            Implementamos sistemas de inteligencia artificial que automatizan operaciones, mejoran la experiencia del cliente y generan resultados medibles desde el día uno.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — capabilities */}
          <div className="space-y-3">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className={`reveal reveal-delay-${i + 1} group flex items-center gap-4 glass rounded-xl p-4 border border-white/6 hover:border-violet-brand/30 hover:bg-violet-brand/5 transition-all duration-300 cursor-default`}
                >
                  <div className="w-10 h-10 rounded-xl bg-violet-brand/15 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-brand/25 transition-colors">
                    <Icon size={18} className="text-violet-soft" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white mb-0.5">{c.title}</div>
                    <div className="text-xs text-snow-dim">{c.desc}</div>
                  </div>
                  <ArrowRight size={14} className="text-snow-dim ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              );
            })}
          </div>

          {/* Right — terminal mockup */}
          <div className="reveal reveal-delay-3">
            <div className="glass-strong border-gradient rounded-2xl overflow-hidden shadow-float">
              {/* Terminal bar */}
              <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/8 bg-white/3">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-amber-500/70" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/70" />
                <span className="text-xs text-snow-dim font-mono ml-3">teknobai-agent — terminal</span>
              </div>
              {/* Terminal content */}
              <div className="p-5 font-mono text-xs space-y-1.5 bg-black/30">
                {terminalLines.map((line, i) => (
                  <div
                    key={i}
                    className={`leading-relaxed ${
                      line.type === "comment" ? "text-snow-dim/50" :
                      line.type === "cmd" ? "text-white" :
                      line.type === "success" ? "text-emerald-400" :
                      "text-cyan-soft"
                    }`}
                  >
                    {line.text}
                  </div>
                ))}
                {/* Blinking cursor */}
                <div className="flex items-center gap-1 mt-3">
                  <span className="text-electric-bright">$</span>
                  <span className="w-2 h-4 bg-electric-bright/80 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Metric cards below terminal */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              {[
                { v: "6.2h", l: "Ahorradas/día", c: "text-emerald-400" },
                { v: "47", l: "Consultas/h", c: "text-electric-bright" },
                { v: "94%", l: "Precisión", c: "text-violet-soft" },
              ].map((m) => (
                <div key={m.l} className="glass rounded-xl p-3.5 border border-white/6 text-center">
                  <div className={`text-xl font-bold ${m.c} mb-0.5`}>{m.v}</div>
                  <div className="text-[10px] text-snow-dim">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
