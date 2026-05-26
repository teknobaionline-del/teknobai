import { NextRequest, NextResponse } from "next/server";

const rateLimit = new Map<string, { count: number; timestamp: number }>();
const LIMIT = 3;
const WINDOW = 60 * 60 * 1000; // 1 hora

export async function POST(req: NextRequest) {
  // Rate limiting por IP
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (entry) {
    if (now - entry.timestamp < WINDOW) {
      if (entry.count >= LIMIT) {
        return NextResponse.json(
          { success: false, error: "Demasiados intentos. Espera 1 hora." },
          { status: 429 }
        );
      }
      entry.count++;
    } else {
      rateLimit.set(ip, { count: 1, timestamp: now });
    }
  } else {
    rateLimit.set(ip, { count: 1, timestamp: now });
  }

  const { name, email, message, services } = await req.json();

  // Validación básica
  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: "Faltan campos" }, { status: 400 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "TeknoBai <onboarding@resend.dev>",
      to: "teknobai.online@gmail.com",
      subject: `Nuevo mensaje de contacto — ${name}`,
      html: `
        <h2>Nuevo mensaje de TeknoBai</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Servicios:</strong> ${services?.join(", ") || "No especificado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    }),
  });

  if (res.ok) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}