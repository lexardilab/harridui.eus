import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
import { Resend } from "npm:resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY")!);

serve(async (req) => {
  const { name, email, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "Tu Web <noreply@resend.dev>",           // Remitente válido para pruebas
    to: "lexardi.lab@gmail.com",                   // Tu correo personal (modo test)
    subject: "Nuevo mensaje desde el formulario",
    html: `
      <h2>Nuevo mensaje recibido</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    console.error("Error al enviar el correo:", error.message);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
});