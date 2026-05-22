"use client";
import { useState, useEffect } from "react";
import { setCookie, getCookie } from "cookies-next";
import { X, Cookie } from "lucide-react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = getCookie("cookies-accepted");
    if (!accepted) setVisible(true);
  }, []);

  const accept = () => {
    setCookie("cookies-accepted", "true", { maxAge: 60 * 60 * 24 * 365 });
    setVisible(false);
  };

  const reject = () => {
    setCookie("cookies-accepted", "false", { maxAge: 60 * 60 * 24 * 365 });
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-[999]">
      <div className="glass-strong border border-white/12 rounded-2xl p-5 shadow-float">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-9 h-9 rounded-xl bg-electric/15 flex items-center justify-center flex-shrink-0">
            <Cookie size={16} className="text-electric-bright" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-1">
              Usamos cookies 🍪
            </p>
            <p className="text-xs text-snow-muted leading-relaxed">
              Utilizamos cookies propias para mejorar tu experiencia. 
              Puedes aceptarlas o rechazarlas. Consulta nuestra{" "}
              <a href="#" className="text-electric-bright underline">
                política de privacidad
              </a>.
            </p>
          </div>
          <button
            onClick={reject}
            className="text-snow-dim hover:text-white transition-colors flex-shrink-0"
          >
            <X size={16} />
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={accept}
            className="flex-1 bg-electric text-white text-xs font-semibold py-2.5 rounded-xl hover:bg-electric-bright transition-colors"
          >
            Aceptar todas
          </button>
          <button
            onClick={reject}
            className="flex-1 bg-white/8 text-snow-muted text-xs font-semibold py-2.5 rounded-xl border border-white/10 hover:bg-white/12 transition-colors"
          >
            Solo necesarias
          </button>
        </div>
      </div>
    </div>
  );
}