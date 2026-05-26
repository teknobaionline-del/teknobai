"use client";
import { useEffect, useRef, useState } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  Timestamp,
} from "firebase/firestore";
import { Star, Send, CheckCircle } from "lucide-react";

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
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Review[];
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
        name,
        business,
        text,
        rating,
        createdAt: Timestamp.now(),
        date: new Date().toLocaleDateString("es-ES", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      });
      setSent(true);
      setName("");
      setBusiness("");
      setText("");
      setRating(5);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <section id="reseñas" ref={ref} className="relative py-28 md:py-36 bg-surface-soft">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="reveal inline-flex items-center gap-2 text-xs font-semibold text-sky-accent uppercase tracking-widest mb-4">
            <span className="w-5 h-px bg-sky-accent" />
            Reseñas
            <span className="w-5 h-px bg-sky-accent" />
          </div>
          <h2 className="reveal font-display text-4xl md:text-5xl font-700 text-ink tracking-tighter mb-4">
            Lo que dicen
            <br />
            <span className="italic text-ink-muted">nuestros clientes.</span>
          </h2>
          <p className="reveal text-ink-muted text-lg">
            Opiniones reales de negocios reales.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Reviews list */}
          <div className="space-y-4">
            {reviews.length === 0 && (
              <div className="reveal glass rounded-2xl p-8 border border-white/8 text-center text-snow-muted">
                Sé el primero en dejar una reseña ✨
              </div>
            )}
            {reviews.map((r, i) => (
              <div
                key={r.id}
                className="reveal group glass rounded-2xl p-6 border border-white/8 hover:border-white/14 transition-all duration-300"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      size={14}
                      className={j < r.rating ? "text-amber-400 fill-amber-400" : "text-snow-dim"}
                    />
                  ))}
                </div>
                <p className="text-snow-muted text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="flex items-center justify-between pt-3 border-t border-white/8">
                  <div>
                    <div className="text-sm font-semibold text-white">{r.name}</div>
                    {r.business && <div className="text-xs text-snow-dim">{r.business}</div>}
                  </div>
                  <span className="text-xs text-snow-dim">{r.date}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="reveal">
            <div className="glass-strong border-gradient rounded-2xl p-8 border border-white/8">
              <h3 className="text-lg font-bold text-white mb-6">Deja tu reseña</h3>
              {sent ? (
                <div className="py-8 text-center">
                  <CheckCircle size={40} className="text-emerald-400 mx-auto mb-3" />
                  <p className="text-white font-semibold mb-1">¡Gracias por tu reseña!</p>
                  <p className="text-snow-muted text-sm">Tu opinión nos ayuda a mejorar.</p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 text-xs text-sky-accent hover:underline"
                  >
                    Dejar otra reseña
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Stars */}
                  <div>
                    <label className="block text-xs font-semibold text-snow-muted mb-2">Valoración</label>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <button
                          type="button"
                          key={j}
                          onClick={() => setRating(j + 1)}
                          onMouseEnter={() => setHover(j + 1)}
                          onMouseLeave={() => setHover(0)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            size={24}
                            className={
                              j < (hover || rating)
                                ? "text-amber-400 fill-amber-400"
                                : "text-snow-dim"
                            }
                          />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-snow-muted mb-2">Tu nombre *</label>
                    <input
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej: María García"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-snow-dim/50 focus:outline-none focus:border-electric/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-snow-muted mb-2">Tu negocio (opcional)</label>
                    <input
                      value={business}
                      onChange={(e) => setBusiness(e.target.value)}
                      placeholder="Ej: Peluquería Nova"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-snow-dim/50 focus:outline-none focus:border-electric/50 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-snow-muted mb-2">Tu opinión *</label>
                    <textarea
                      required
                      rows={4}
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Cuéntanos tu experiencia con TeknoBai..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-snow-dim/50 focus:outline-none focus:border-electric/50 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full inline-flex items-center justify-center gap-2 bg-electric text-white font-semibold py-3.5 rounded-xl hover:bg-electric-bright transition-all duration-200 disabled:opacity-50"
                  >
                    <Send size={15} />
                    {loading ? "Enviando..." : "Enviar reseña"}
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