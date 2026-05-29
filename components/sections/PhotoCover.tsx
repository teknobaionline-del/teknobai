"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const photos = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80",
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
  "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&q=80",
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
  "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80",
  "https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=600&q=80",
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
];

const TOTAL = photos.length;

export default function PhotoCover() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(Math.floor(TOTAL / 2));

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const index = Math.floor(x * TOTAL);
      setActiveIndex(Math.max(0, Math.min(TOTAL - 1, index)));
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => container.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-[#050508]">
      <div className="absolute inset-0" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }} />

      <div className="relative max-w-7xl mx-auto px-6 mb-12 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-electric-bright uppercase tracking-widest mb-4">
          <span className="w-5 h-px bg-electric-bright" />
          Nuestro trabajo
          <span className="w-5 h-px bg-electric-bright" />
        </div>
        <h2 className="font-display font-bold text-white" style={{
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          letterSpacing: "-0.03em",
        }}>
          Tecnología con
          <span style={{
            background: "linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #34d399 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}> alma.</span>
        </h2>
      </div>

      <div
        ref={containerRef}
        className="relative h-[400px]"
        style={{ perspective: "1200px" }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          {photos.map((src, i) => {
            const offset = i - activeIndex;
            const absOffset = Math.abs(offset);
            const isActive = i === activeIndex;

            return (
              <motion.div
                key={i}
                className="absolute rounded-2xl overflow-hidden border border-white/10"
                animate={{
                  x: offset * 160,
                  rotateY: offset * -12,
                  scale: isActive ? 1 : Math.max(0.6, 1 - absOffset * 0.08),
                  opacity: absOffset > 6 ? 0 : Math.max(0.2, 1 - absOffset * 0.15),
                  zIndex: TOTAL - absOffset,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                style={{
                  width: 260,
                  height: 340,
                  boxShadow: isActive
                    ? "0 40px 80px rgba(0,0,0,0.6), 0 0 40px rgba(59,130,246,0.2)"
                    : "0 20px 40px rgba(0,0,0,0.4)",
                  transformStyle: "preserve-3d",
                }}
              >
                <img
                  src={src}
                  alt={`Proyecto ${i + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0" style={{
                  background: isActive
                    ? "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)"
                    : "rgba(5,5,8,0.45)",
                }} />
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-1.5 mt-8">
        {photos.map((_, i) => (
          <motion.div
            key={i}
            className="rounded-full bg-white"
            animate={{
              width: i === activeIndex ? 20 : 4,
              height: 4,
              opacity: i === activeIndex ? 1 : 0.2,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        ))}
      </div>

      <div className="text-center mt-4">
        <span className="text-xs text-white opacity-40">← Mueve el cursor sobre las fotos →</span>
      </div>
    </section>
  );
}