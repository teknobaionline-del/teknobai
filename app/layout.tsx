import type { Metadata } from "next";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

export const metadata: Metadata = {
  title: "TeknoBai — Tecnología que transforma negocios",
  description:
    "Agencia tecnológica premium especializada en desarrollo web, chatbots IA, agentes inteligentes y automatización empresarial. Llevamos tu negocio al siguiente nivel.",
  keywords: "desarrollo web premium, chatbots IA, agentes IA, automatización empresarial, branding digital, startup tecnológica",
  authors: [{ name: "TeknoBai" }],
  openGraph: {
    title: "TeknoBai — Tecnología que transforma negocios",
    description: "Agencia tecnológica premium. Web, IA, automatización y branding.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeknoBai — Tecnología premium",
    description: "Desarrollo web, IA y automatización empresarial.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
