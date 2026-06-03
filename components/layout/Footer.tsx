import { Zap, Twitter, Linkedin, Instagram, Github, ArrowUpRight } from "lucide-react";

const nav = {
  Servicios: [
    { label: "Desarrollo Web", href: "/servicios/desarrollo-web" },
  ],
  Empresa: [
    { label: "Sobre nosotros", href: "#nosotros" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Blog", href: "#blog" },
  ],
  Legal: [
    { label: "Política de privacidad", href: "/privacidad" },
    { label: "Aviso legal", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const socials = [
  { icon: Twitter, href: "https://x.com/TeknoBai", label: "Twitter" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/teknobai-online-b391ba412/", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/teknobai.online", label: "Instagram" },
  { icon: Github, href: "https://github.com/teknobai", label: "GitHub" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 overflow-hidden">
      <div className="absolute inset-0 bg-ink/80" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-2.5 mb-5 group">
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
            <p className="text-sm text-snow-dim leading-relaxed max-w-xs mb-6">
              Tecnología que transforma negocios. Desarrollo web, IA y automatización para empresas que quieren liderar.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-snow-dim/50 focus:outline-none focus:border-electric/40 transition-colors"
              />
              <button className="bg-electric text-white text-xs font-semibold px-3 py-2 rounded-lg hover:bg-electric-bright transition-colors flex-shrink-0">
                <ArrowUpRight size={14} />
              </button>
            </div>
            <p className="text-[10px] text-snow-dim/60 mt-1.5">Insights de tecnología, cada semana.</p>
          </div>

          {/* Nav columns */}
          {Object.entries(nav).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-[10px] font-bold text-white uppercase tracking-widest mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-snow-dim hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/8">
          <p className="text-xs text-snow-dim/60">
            © {new Date().getFullYear()} TeknoBai. Todos los derechos reservados. Hecho con 💙 en el País Vasco.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-snow-dim hover:text-white hover:bg-white/10 hover:border-white/16 transition-all duration-200"
                >
                  <Icon size={13} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}