import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: Request) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response("Missing fields", { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio <portfolio@tattooagenda.ink>",
    to: "gvelasco.dev@gmail.com",
    subject: `Nova mensagem de ${name}`,
    html: `
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensagem:</strong> ${message}</p>
    `,
  });

  if (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
