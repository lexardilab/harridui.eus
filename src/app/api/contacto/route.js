export async function POST(request) {
    const data = await request.json();
  
    const { nombre, email, mensaje } = data;
  
    // Aquí puedes integrar con MailerSend, Nodemailer, Formspree, etc.
    console.log("Nuevo mensaje de contacto:", nombre, email, mensaje);
  
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }
  