"use client";
import { useEffect, useRef } from "react";
import { ArrowUpRight, Clock } from "lucide-react";

const posts = [
  {
    tag: "Inteligencia Artificial",
    tagColor: "text-violet-soft bg-violet-brand/15",
    title: "Google I/O 2026: Gemini supera los 900 millones de usuarios y lanza agentes autónomos",
    excerpt: "Google presenta la nueva era de agentes de IA capaces de realizar tareas completas de forma autónoma. Gemini 3.5 Flash llega con velocidad 4 veces superior y el Modo IA en Search supera los 1.000 millones de usuarios.",
    time: "4 min",
    date: "20 Mayo 2026",
    href: "https://rafaganoticias.com/2026/05/20/novedades-importantes-en-google-io-2026/",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  },
  {
    tag: "Regulación",
    tagColor: "text-electric-bright bg-electric/15",
    title: "Nuevas obligaciones legales para empresas con IA desde agosto 2026",
    excerpt: "A partir del 2 de agosto, las empresas deberán informar cuando sus usuarios interactúen con IA y etiquetar contenido generado automáticamente. Afecta directamente a negocios con chatbots y automatización.",
    time: "5 min",
    date: "19 Mayo 2026",
    href: "https://www.multiplicalia.com/novedades-ia-mayo-2026/",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
  },
  {
    tag: "Desarrollo Web",
    tagColor: "text-emerald-400 bg-emerald-500/15",
    title: "WebMCP: el nuevo estándar que conecta agentes de IA directamente con la web",
    excerpt: "Google, Microsoft y el W3C proponen un protocolo abierto que permite a los agentes de IA ejecutar tareas directamente en páginas web. Un cambio que transformará cómo se construyen las webs.",
    time: "4 min",
    date: "20 Mayo 2026",
    href: "https://reviblog.net/noticia/noticias-tecnologia-20-mayo-2026/",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  },
];

export default function Blog() {
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
    <section id="blog" ref={ref} className="relative py-28 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-void via-ink/40 to-void" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="reveal inline-flex items-center gap-2 text-xs font-semibold text-electric-bright uppercase tracking-widest mb-4">
              <span className="w-5 h-px bg-electric-bright" />
              Insights
            </div>
            <h2 className="reveal text-headline font-display text-white">
              Conocimiento que
              <br />
              <span className="gradient-text-electric">marca la diferencia.</span>
            </h2>
          </div>
          
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${i + 1} group block glass rounded-2xl border border-white/6 hover:border-white/14 hover:shadow-card-hover transition-all duration-400 overflow-hidden`}
            >
              {/* Placeholder image area */}
              <div className="h-44 relative overflow-hidden">
                <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <span className={`inline-block text-[10px] font-bold px-2.5 py-1 rounded-full mb-3 ${p.tagColor}`}>
                  {p.tag}
                </span>
                <h3 className="text-sm font-bold text-white leading-snug mb-2.5 group-hover:text-electric-bright transition-colors line-clamp-2">
                  {p.title}
                </h3>
                <p className="text-xs text-snow-dim leading-relaxed mb-4 line-clamp-2">{p.excerpt}</p>
                <div className="flex items-center gap-3 text-[10px] text-snow-dim">
                  <Clock size={10} />
                  <span>{p.time} lectura</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
