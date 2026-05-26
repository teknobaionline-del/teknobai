import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message, services } = await req.json();

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer re_8ZZPVa7A_HDBM8t2qwUJZWHLZ5u75jRef`,
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