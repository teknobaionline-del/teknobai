"use client";
import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "IA", href: "#ia" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Blog", href: "#blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass border-b border-white/8 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-electric rounded-lg opacity-20 blur-md group-hover:opacity-40 transition-opacity" />
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-electric to-violet-brand flex items-center justify-center">
              <Zap size={16} className="text-white fill-white" />
            </div>
          </div>
          <span className="text-white font-bold text-lg tracking-tight">
            Tekno<span className="gradient-text-electric">Bai</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 text-sm text-snow-muted hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 font-medium"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contacto"
            className="btn-primary relative inline-flex items-center gap-2 bg-electric text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-electric-bright transition-all duration-200 shadow-glow-sm hover:shadow-glow hover:-translate-y-px"
          >
            <span className="relative z-10">Contactar</span>
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-snow-muted hover:text-white transition-colors"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden glass-strong border-t border-white/8 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-5 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-2.5 px-3 text-sm text-snow-muted hover:text-white rounded-lg hover:bg-white/5 transition-all font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-3 text-center bg-electric text-white text-sm font-semibold px-5 py-3 rounded-full shadow-glow-sm"
          >
            Contactar
          </a>
        </div>
      </div>
    </header>
  );
}
