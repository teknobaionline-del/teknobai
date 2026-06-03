# TeknoBai V2 — Agencia Tech Premium

Web oficial de TeknoBai. Next.js 15, Framer Motion, Tailwind CSS, dark theme premium.

---

## 🚀 Instalación local

### Requisitos
- Node.js 18.17+
- npm 9+

### Pasos

```bash
# 1. Entra en la carpeta del proyecto
cd teknobai-v2

# 2. Instala dependencias
npm install

# 3. Arranca el servidor de desarrollo
npm run dev
```

Abre **http://localhost:3000**

---

## 🌐 Deploy en Vercel (GRATIS)

### Opción A — Desde GitHub (recomendado)

1. Crea una cuenta en **https://github.com** si no tienes
2. Crea un repositorio nuevo en GitHub
3. Sube los archivos del proyecto:
   ```bash
   git init
   git add .
   git commit -m "TeknoBai v2 initial commit"
   git remote add origin https://github.com/TU_USUARIO/teknobai.git
   git push -u origin main
   ```
4. Ve a **https://vercel.com** → Sign up con tu cuenta de GitHub
5. Haz clic en **"New Project"**
6. Selecciona tu repositorio `teknobai`
7. Vercel detecta Next.js automáticamente → haz clic en **Deploy**
8. En ~2 minutos tienes tu web en vivo con URL tipo `teknobai.vercel.app`

### Opción B — Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### Dominio personalizado
En Vercel → Settings → Domains → añade `teknobai.com` (o tu dominio)

---

## 📁 Estructura

```
teknobai-v2/
├── app/
│   ├── globals.css          # Variables CSS, animaciones, tipografía
│   ├── layout.tsx           # Root layout + metadata SEO
│   └── page.tsx             # Ensamblaje de secciones
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # Navbar glassmorphism sticky
│   │   └── Footer.tsx       # Footer completo con newsletter
│   └── sections/
│       ├── Hero.tsx         # Hero con cards flotantes animadas
│       ├── TrustBar.tsx     # Stats + tecnologías
│       ├── Services.tsx     # 6 servicios SaaS-style
│       ├── AISection.tsx    # Sección IA con terminal animada
│       ├── Portfolio.tsx    # 5 proyectos con métricas
│       ├── About.tsx        # Sobre nosotros + valores
│       ├── Testimonials.tsx # 4 testimonios premium
│       ├── Blog.tsx         # 3 artículos / insights
│       └── Contact.tsx      # Formulario + canales contacto
├── lib/
│   └── useScrollReveal.ts   # Hook animaciones scroll
├── tailwind.config.ts       # Tokens de diseño custom
└── next.config.mjs
```

---

## 🎨 Personalización rápida

### Colores de acento
En `tailwind.config.ts`:
```ts
electric: { DEFAULT: "#3B82F6" }  // ← cambia el azul
violet: { brand: "#8B5CF6" }       // ← cambia el violeta
```

### Datos de contacto
En `components/sections/Contact.tsx` y `components/layout/Footer.tsx`:
```ts
href: "mailto:TU@EMAIL.COM"
href: "https://wa.me/TUNUMERO"
```

### Textos
Cada sección tiene sus datos como constantes al inicio del archivo. Fácil de editar.

---

## ✅ Features incluidas

- Dark theme premium con glassmorphism
- Scroll reveal animations (CSS puro)
- Cards flotantes animadas en Hero
- Terminal IA animada
- Formulario de contacto interactivo
- Selección de servicios con chips
- Navbar glassmorphism con scroll detection
- Newsletter en footer
- SEO metadata completa
- Totalmente responsive / mobile-first
- Tipografía premium (Inter + Cabinet Grotesk)
- Sistema de tokens de diseño consistente

---

Hecho con 💙 por TeknoBai
