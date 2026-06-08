import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing fields" });
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
    return res.status(500).json({ error });
  }

  return res.status(200).json({ success: true });
}
