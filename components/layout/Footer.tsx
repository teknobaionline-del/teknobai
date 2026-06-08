import { Twitter, Linkedin, Instagram } from "lucide-react";

const nav = {
  Servicios: [{ label: "Desarrollo Web", href: "/servicios/desarrollo-web" }],
  Empresa:   [{ label: "Sobre nosotros", href: "#nosotros" }, { label: "Blog", href: "#blog" }],
  Legal:     [{ label: "Política de privacidad", href: "/privacidad" }, { label: "Aviso legal", href: "/aviso-legal" }, { label: "Cookies", href: "/privacidad" }],
};

const socials = [
  { icon: Twitter,   href: "https://x.com/TeknoBai",                                label: "Twitter" },
  { icon: Linkedin,  href: "https://www.linkedin.com/in/teknobai-online-b391ba412/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/teknobai.online",                  label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f0e8] border-t border-[#e5e5e5]">
      <div className="max-w-7xl mx-auto px-8 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block font-sans font-bold text-base tracking-[0.16em] uppercase text-[#111] mb-4">
              Tekno<span className="text-[#2563eb]">Bai</span>
            </a>
            <p className="text-xs text-[#bbb] leading-relaxed font-sans max-w-xs">
              Webs profesionales para negocios locales del País Vasco. Simples, rápidas y cercanas.
            </p>
          </div>

          {/* Nav */}
          {Object.entries(nav).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-[8px] font-bold text-[#111] uppercase tracking-[0.2em] mb-4 font-sans">{section}</h4>
              <ul className="space-y-2.5">
                {links.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="text-xs text-[#bbb] hover:text-[#111] transition-colors font-sans">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[#e5e5e5]">
          <p className="text-[10px] text-[#ccc] font-sans">
            © {new Date().getFullYear()} TeknoBai. Todos los derechos reservados. Hecho con 💙 en el País Vasco.
          </p>
          <div className="flex items-center gap-2">
            {socials.map(s => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 border border-[#e5e5e5] flex items-center justify-center text-[#ccc] hover:text-[#111] hover:border-[#111] transition-all"
                >
                  <Icon size={12} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}