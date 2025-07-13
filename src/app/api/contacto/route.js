import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const data = await request.json()
    const { nombre, email, mensaje } = data

    const response = await resend.emails.send({
      from: 'notificaciones@harridui.eus',
      to: 'harridui@harridui.eus',
      subject: 'Nuevo mensaje desde el formulario',
      html: `
        <h2>Nuevo mensaje recibido</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    })

    return new Response(JSON.stringify({ ok: true, response }), { status: 200 })
  } catch (error) {
    console.error('Error al enviar el correo:', error)
    return new Response(JSON.stringify({ ok: false, error: error.message }), { status: 500 })
  }
}

  