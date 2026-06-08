"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Inicio",      href: "#" },
  { label: "Propuesta",   href: "#valor" },
  { label: "Servicios",   href: "#servicios" },
  { label: "Equipo",      href: "#nosotros" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Reseñas",     href: "#reseñas" },
  { label: "Blog",        href: "#blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white border-b border-[#e5e5e5]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-8 h-[60px] flex items-center justify-between">

        {/* Logo */}
        <a href="#" className={`font-sans font-bold text-base tracking-[0.16em] uppercase transition-colors duration-300 ${scrolled ? "text-[#111]" : "text-white"}`}>
          Tekno<span className={scrolled ? "text-[#2563eb]" : "text-white/70"}>Bai</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`px-3.5 py-2 text-[10px] font-semibold uppercase tracking-[0.13em] transition-colors duration-200 ${
                  scrolled ? "text-[#999] hover:text-[#111]" : "text-white/65 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-5">
          <span className={`text-xs transition-colors duration-300 ${scrolled ? "text-[#ddd]" : "text-white/25"}`}>|</span>
          <a
            href="#contacto"
            className={`text-[10px] font-semibold uppercase tracking-[0.13em] transition-colors duration-200 ${
              scrolled ? "text-[#111] hover:text-[#2563eb]" : "text-white hover:text-white/70"
            }`}
          >
            Contactar
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-[#111]" : "text-white"}`}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${
        scrolled ? "bg-white border-t border-[#e5e5e5]" : "bg-[#111]/95 backdrop-blur-md border-t border-white/10"
      } ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-8 py-6 flex flex-col gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`py-3 text-[10px] font-semibold uppercase tracking-[0.13em] border-b transition-colors ${
                scrolled
                  ? "text-[#999] hover:text-[#111] border-[#f0f0f0]"
                  : "text-white/60 hover:text-white border-white/10"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-4 text-[10px] font-semibold uppercase tracking-[0.13em] text-[#2563eb]"
          >
            Contactar →
          </a>
        </div>
      </div>
    </header>
  );
}