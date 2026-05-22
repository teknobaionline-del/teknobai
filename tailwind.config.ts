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
        void: "#020205",
        ink: {
          DEFAULT: "#0C0C14",
          soft: "#12121E",
          raised: "#1A1A2E",
          border: "#FFFFFF0D",
          line: "#FFFFFF14",
        },
        snow: {
          DEFAULT: "#FFFFFF",
          muted: "#A1A1B5",
          dim: "#6B6B80",
          ghost: "#FFFFFF08",
        },
        electric: {
          DEFAULT: "#3B82F6",
          bright: "#60A5FA",
          glow: "#3B82F620",
          deep: "#1D4ED8",
        },
        violet: {
          brand: "#8B5CF6",
          glow: "#8B5CF620",
          soft: "#A78BFA",
        },
        cyan: {
          brand: "#06B6D4",
          glow: "#06B6D420",
          soft: "#67E8F9",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-mesh":
          "radial-gradient(at 40% 20%, #3B82F615 0px, transparent 50%), radial-gradient(at 80% 0%, #8B5CF610 0px, transparent 50%), radial-gradient(at 0% 50%, #06B6D410 0px, transparent 50%)",
        "gradient-hero":
          "radial-gradient(ellipse 80% 50% at 50% -10%, #3B82F618 0%, transparent 60%)",
        "gradient-card":
          "linear-gradient(135deg, #FFFFFF06 0%, #FFFFFF02 100%)",
        "gradient-border":
          "linear-gradient(135deg, #FFFFFF18, #FFFFFF06, #FFFFFF18)",
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "slide-right": "slideRight 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "border-flow": "borderFlow 4s linear infinite",
        shimmer: "shimmer 2.5s linear infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(32px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-16px) rotate(1deg)" },
          "66%": { transform: "translateY(-8px) rotate(-1deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        borderFlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        "glow-sm": "0 0 20px #3B82F618",
        glow: "0 0 40px #3B82F625",
        "glow-lg": "0 0 80px #3B82F630",
        "glow-violet": "0 0 40px #8B5CF625",
        "glow-cyan": "0 0 40px #06B6D425",
        card: "0 1px 0 0 #FFFFFF12, 0 0 0 1px #FFFFFF08, 0 8px 32px #00000040",
        "card-hover": "0 1px 0 0 #FFFFFF18, 0 0 0 1px #FFFFFF12, 0 16px 48px #00000060, 0 0 40px #3B82F615",
        float: "0 32px 80px #00000060, 0 0 0 1px #FFFFFF10",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
