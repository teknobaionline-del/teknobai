"use client";
import { useEffect, useRef, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, getDocs, orderBy, query, Timestamp } from "firebase/firestore";
import { Star, CheckCircle } from "lucide-react";

interface Review {
  id: string;
  name: string;
  business: string;
  text: string;
  rating: number;
  date: string;
}

export default function Reviews() {
  const ref = useRef<HTMLDivElement>(null);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    const fetchReviews = async () => {
      const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as Review[];
      setReviews(data);
    };
    fetchReviews();
  }, [sent]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !text) return;
    setLoading(true);
    try {
      await addDoc(collection(db, "reviews"), {
        name, business, text, rating,
        createdAt: Timestamp.now(),
        date: new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" }),
      });
      setSent(true);
      setName(""); setBusiness(""); setText(""); setRating(5);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <section id="reseñas" ref={ref} className="bg-[#f5f0e8] border-b border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-8 py-20 md:py-28">

        {/* Header */}
        <div className="mb-16">
          <div className="reveal">
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bbb] font-sans block mb-6">Reseñas</span>
          </div>
          <h2 className="reveal text-3xl md:text-4xl leading-[1.1]" style={{ fontFamily: "Georgia, serif" }}>
            <em className="text-[#2563eb]">Lo que dicen</em><br />
            <span className="font-sans font-bold uppercase not-italic tracking-tight text-[#2563eb]">nuestros clientes.</span>
          </h2>
          <p className="reveal text-sm text-[#999] mt-4 font-sans">Opiniones reales de negocios reales.</p>
        </div>

        <div className="max-w-2xl mx-auto">

          {/* Reseñas existentes */}
          {reviews.length > 0 && (
            <div className="divide-y divide-[#e5e5e5] border-y border-[#e5e5e5] mb-12">
              {reviews.map((r, i) => (
                <div key={r.id} className="reveal py-8" style={{ transitionDelay: `${i * 60}ms` }}>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} size={13} className={j < r.rating ? "text-[#c9a84c] fill-[#c9a84c]" : "text-[#ddd] fill-[#ddd]"} />
                    ))}
                  </div>
                  <p className="text-sm text-[#555] leading-relaxed mb-5 font-sans" style={{ fontStyle: "italic" }}>
                    "{r.text}"
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-[#111] uppercase tracking-wide font-sans">{r.name}</div>
                      {r.business && <div className="text-[10px] text-[#bbb] font-sans mt-0.5">{r.business}</div>}
                    </div>
                    <span className="text-[10px] text-[#ccc] font-sans">{r.date}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Formulario */}
          <div className="reveal border border-[#e5e5e5] bg-white p-8">
            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#bbb] font-sans block mb-8">Deja tu reseña</span>

            {sent ? (
              <div className="py-12 text-center">
                <CheckCircle size={36} className="text-emerald-500 mx-auto mb-4" />
                <p className="text-sm font-bold text-[#111] font-sans mb-1">¡Gracias por tu reseña!</p>
                <p className="text-xs text-[#999] font-sans mb-6">Tu opinión nos ayuda a mejorar.</p>
                <button
                  onClick={() => setSent(false)}
                  className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2563eb] font-sans border-b border-[#2563eb] pb-0.5"
                >
                  Dejar otra reseña
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">

                {/* Estrellas */}
                <div>
                  <label className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#bbb] font-sans block mb-3">Valoración</label>
                  <div className="flex gap-1.5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <button
                        type="button"
                        key={j}
                        onClick={() => setRating(j + 1)}
                        onMouseEnter={() => setHover(j + 1)}
                        onMouseLeave={() => setHover(0)}
                        className="transition-transform hover:scale-110"
                      >
                        <Star size={22} className={j < (hover || rating) ? "text-[#c9a84c] fill-[#c9a84c]" : "text-[#ddd] fill-[#ddd]"} />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Nombre */}
                <div>
                  <label className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#bbb] font-sans block mb-3">Tu nombre *</label>
                  <input
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Ej: María García"
                    className="w-full bg-transparent border-b border-[#ddd] py-2 text-sm text-[#444] placeholder-[#ccc] focus:outline-none focus:border-[#111] transition-colors font-sans"
                  />
                </div>

                {/* Negocio */}
                <div>
                  <label className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#bbb] font-sans block mb-3">Tu negocio (opcional)</label>
                  <input
                    value={business}
                    onChange={e => setBusiness(e.target.value)}
                    placeholder="Ej: Peluquería Nova"
                    className="w-full bg-transparent border-b border-[#ddd] py-2 text-sm text-[#444] placeholder-[#ccc] focus:outline-none focus:border-[#111] transition-colors font-sans"
                  />
                </div>

                {/* Opinión */}
                <div>
                  <label className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#bbb] font-sans block mb-3">Tu opinión *</label>
                  <textarea
                    required
                    rows={4}
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder="Cuéntanos tu experiencia con TeknoBai..."
                    className="w-full bg-transparent border-b border-[#ddd] py-2 text-sm text-[#444] placeholder-[#ccc] focus:outline-none focus:border-[#111] transition-colors font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#111] text-white text-[10px] font-semibold uppercase tracking-[0.16em] py-4 hover:bg-[#333] transition-colors font-sans disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Enviando..." : "Enviar reseña →"}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}