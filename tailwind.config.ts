import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        display: ["var(--font-cabinet)", "var(--font-geist-sans)", "sans-serif"],
      },
      colors: {
        // "void" ahora es blanco puro
        void: "#FFFFFF",
        ink: {
          DEFAULT: "#0F172A",   // casi negro — títulos principales
          soft:    "#1E293B",   // textos secundarios
          raised:  "#334155",   // textos terciarios
          border:  "#E2E8F0",   // bordes
          line:    "#CBD5E1",   // líneas más marcadas
        },
        snow: {
          DEFAULT: "#0F172A",   // heredado — mapea a oscuro en light mode
          muted:   "#475569",   // texto de párrafo
          dim:     "#64748B",   // texto secundario
          ghost:   "#F8FAFC",   // fondos muy claros
        },
        electric: {
          DEFAULT: "#2563EB",   // azul principal
          bright:  "#3B82F6",   // azul hover / acento
          glow:    "#DBEAFE",   // fondo tenue azul
          deep:    "#1D4ED8",   // azul oscuro
        },
        violet: {
          brand: "#2563EB",
          glow:  "#EFF6FF",
          soft:  "#60A5FA",
        },
        cyan: {
          brand: "#0284C7",
          glow:  "#E0F2FE",
          soft:  "#38BDF8",
        },
        surface: {
          DEFAULT: "#F8FAFC",
          raised:  "#F1F5F9",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-hero":
          "radial-gradient(ellipse 80% 60% at 50% -5%, #DBEAFE50 0%, transparent 65%)",
        "gradient-card":
          "linear-gradient(135deg, #FFFFFF 0%, #F8FAFC 100%)",
        "gradient-mesh":
          "radial-gradient(at 30% 20%, #DBEAFE 0px, transparent 50%), radial-gradient(at 80% 10%, #EFF6FF 0px, transparent 50%)",
      },
      animation: {
        "fade-up":       "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in":       "fadeIn 0.5s ease forwards",
        "slide-right":   "slideRight 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float:           "float 8s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%":   { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-10px)" },
        },
      },
      boxShadow: {
        "glow-sm":    "0 2px 8px rgba(37,99,235,0.15)",
        glow:         "0 4px 20px rgba(37,99,235,0.25)",
        "glow-lg":    "0 8px 40px rgba(37,99,235,0.30)",
        "glow-violet":"0 4px 20px rgba(37,99,235,0.20)",
        "glow-cyan":  "0 4px 20px rgba(2,132,199,0.20)",
        card:         "0 1px 3px rgba(0,0,0,0.04), 0 0 0 1px #E2E8F0, 0 8px 24px rgba(0,0,0,0.05)",
        "card-hover": "0 2px 6px rgba(0,0,0,0.06), 0 0 0 1px #CBD5E1, 0 16px 40px rgba(0,0,0,0.08)",
        float:        "0 20px 60px rgba(0,0,0,0.10), 0 0 0 1px #E2E8F0",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;