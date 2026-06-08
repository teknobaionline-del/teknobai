"use client";
import { useEffect, useRef } from "react";
import { Clock, ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "Inteligencia Artificial",
    tagColor: "text-violet-700 bg-violet-50 border border-violet-100",
    title: "Google I/O 2026: Gemini supera los 900 millones de usuarios y lanza agentes autónomos",
    excerpt: "Google presenta la nueva era de agentes de IA capaces de realizar tareas completas de forma autónoma. Gemini 3.5 Flash llega con velocidad 4 veces superior.",
    time: "4 min",
    date: "20 Mayo 2026",
    href: "https://rafaganoticias.com/2026/05/20/novedades-importantes-en-google-io-2026/",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  },
  {
    tag: "Regulación",
    tagColor: "text-blue-700 bg-blue-50 border border-blue-100",
    title: "Nuevas obligaciones legales para empresas con IA desde agosto 2026",
    excerpt: "A partir del 2 de agosto, las empresas deberán informar cuando sus usuarios interactúen con IA y etiquetar contenido generado automáticamente.",
    time: "5 min",
    date: "19 Mayo 2026",
    href: "https://www.multiplicalia.com/novedades-ia-mayo-2026/",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80",
  },
  {
    tag: "Desarrollo Web",
    tagColor: "text-emerald-700 bg-emerald-50 border border-emerald-100",
    title: "WebMCP: el nuevo estándar que conecta agentes de IA directamente con la web",
    excerpt: "Google, Microsoft y el W3C proponen un protocolo abierto que permite a los agentes de IA ejecutar tareas directamente en páginas web.",
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
    <section id="blog" ref={ref} className="bg-white border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-8 py-20 md:py-28">

        {/* Header */}
        <div className="mb-16">
          <div className="reveal">
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bbb] font-sans block mb-6">Insights</span>
          </div>
          <h2 className="reveal text-3xl md:text-4xl leading-[1.1]" style={{ fontFamily: "Georgia, serif" }}>
            <em className="text-[#2563eb]">Conocimiento que</em><br />
            <span className="font-sans font-bold uppercase not-italic tracking-tight text-[#2563eb]">marca la diferencia.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#e5e5e5] border border-[#e5e5e5]">
          {posts.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`reveal reveal-delay-${i + 1} group block bg-white hover:bg-[#f5f0e8] transition-colors duration-300`}
            >
              {/* Imagen */}
              <div className="h-48 overflow-hidden border-b border-[#e5e5e5]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <span className={`inline-block text-[9px] font-bold px-2.5 py-1 mb-4 uppercase tracking-[0.1em] font-sans ${p.tagColor}`}>
                  {p.tag}
                </span>
                <h3 className="text-sm font-bold text-[#111] leading-snug mb-3 font-sans group-hover:text-[#2563eb] transition-colors line-clamp-2">
                  {p.title}
                </h3>
                <p className="text-xs text-[#999] leading-relaxed mb-5 line-clamp-2 font-sans">{p.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] text-[#bbb] font-sans">
                    <Clock size={10} />
                    <span>{p.time} lectura · {p.date}</span>
                  </div>
                  <ArrowUpRight size={13} className="text-[#ccc] group-hover:text-[#111] transition-colors" />
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}