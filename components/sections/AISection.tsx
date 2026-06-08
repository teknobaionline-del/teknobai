"use client";
import { useEffect, useRef } from "react";
import { Brain, GitBranch, BarChart3, MessageSquare, Workflow } from "lucide-react";

const capabilities = [
  { icon: Brain,         title: "Razonamiento avanzado",   desc: "Modelos LLM entrenados para tu industria específica" },
  { icon: GitBranch,     title: "Decisiones autónomas",    desc: "Agentes que evalúan contexto y actúan sin supervisión" },
  { icon: Workflow,      title: "Flujos complejos",         desc: "Orquestación de procesos multi-paso con memoria" },
  { icon: BarChart3,     title: "Analytics en tiempo real", desc: "Dashboard de rendimiento y métricas de IA" },
  { icon: MessageSquare, title: "Conversaciones naturales", desc: "NLP de última generación para atención al cliente" },
];

const terminalLines = [
  { type: "comment", text: "// TeknoBai AI Agent v2.4" },
  { type: "cmd",     text: "$ agent.init({ model: 'gpt-4o', context: 'business' })" },
  { type: "success", text: "✓ Agente inicializado correctamente" },
  { type: "cmd",     text: "$ agent.connect({ crm: true, calendar: true, email: true })" },
  { type: "success", text: "✓ Integrado con 3 servicios" },
  { type: "cmd",     text: "$ agent.run('Gestionar reservas y consultas')" },
  { type: "info",    text: "→ Procesando 47 consultas activas..." },
  { type: "info",    text: "→ 12 reservas confirmadas automáticamente" },
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
    <section id="ia" ref={ref} className="bg-[#f5f0e8] border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-8 py-20 md:py-28">

        {/* Header */}
        <div className="mb-16 text-center">
          <div className="reveal">
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bbb] font-sans block mb-6">Inteligencia Artificial</span>
          </div>
          <h2 className="reveal text-3xl md:text-4xl leading-[1.1]" style={{ fontFamily: "Georgia, serif" }}>
            <em className="text-[#2563eb]">IA que trabaja por ti</em><br />
            <span className="font-sans font-bold uppercase not-italic tracking-tight text-[#2563eb]">mientras duermes.</span>
          </h2>
          <p className="reveal text-sm text-[#999] mt-4 font-sans max-w-xl mx-auto">
            Implementamos sistemas de inteligencia artificial que automatizan operaciones, mejoran la experiencia del cliente y generan resultados medibles desde el día uno.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Capabilities */}
          <div className="divide-y divide-[#e5e5e5] border-y border-[#e5e5e5]">
            {capabilities.map((c, i) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className={`reveal reveal-delay-${i+1} flex items-center gap-5 py-5`}>
                  <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center border border-[#e5e5e5] bg-white">
                    <Icon size={15} className="text-[#999]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#111] uppercase tracking-wide font-sans mb-0.5">{c.title}</div>
                    <div className="text-[11px] text-[#aaa] font-sans">{c.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Terminal */}
          <div className="reveal reveal-delay-3">
            <div className="border border-[#e5e5e5] bg-white overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-[#e5e5e5] bg-[#f5f0e8]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <span className="text-[10px] text-[#bbb] font-mono ml-3">teknobai-agent — terminal</span>
              </div>
              <div className="p-5 font-mono text-[11px] space-y-1.5 bg-white">
                {terminalLines.map((line, i) => (
                  <div key={i} className={`leading-relaxed ${
                    line.type === "comment" ? "text-[#ccc]" :
                    line.type === "cmd"     ? "text-[#111]" :
                    line.type === "success" ? "text-emerald-600" :
                    "text-blue-500"
                  }`}>
                    {line.text}
                  </div>
                ))}
                <div className="flex items-center gap-1 mt-3">
                  <span className="text-[#2563eb] font-bold">$</span>
                  <span className="w-2 h-3.5 bg-[#2563eb]/60 animate-pulse" />
                </div>
              </div>
            </div>

            {/* Métricas */}
            <div className="grid grid-cols-3 divide-x divide-[#e5e5e5] border border-[#e5e5e5] border-t-0">
              {[
                { v: "6.2h", l: "Ahorradas/día", c: "text-emerald-600" },
                { v: "47",   l: "Consultas/h",   c: "text-[#2563eb]" },
                { v: "94%",  l: "Precisión",      c: "text-[#7c3aed]" },
              ].map(m => (
                <div key={m.l} className="p-4 text-center bg-white">
                  <div className={`text-lg font-bold ${m.c} font-sans tracking-tight`}>{m.v}</div>
                  <div className="text-[9px] text-[#bbb] font-sans uppercase tracking-[0.12em] mt-0.5">{m.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}