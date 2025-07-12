import { serve } from "https://deno.land/std@0.192.0/http/server.ts";
import { Resend } from "npm:resend";

const resend = new Resend(Deno.env.get("RESEND_API_KEY")!);

serve(async (req) => {
  const { name, email, message } = await req.json();

  const { error } = await resend.emails.send({
    from: "Formulario Web <noreply@tharridui.eus>",
    to: "harridui@harridui.eus",
    subject: "Nuevo mensaje de contacto",
    html: `
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong><br />${message}</p>
    `,
  });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
});
