import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { env } from "@/env";

const contactSchema = z.object({
  name: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  message: z.string().min(1, "Le message est requis"),
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string | undefined,
      message: formData.get("message") as string,
    };

    const validated = contactSchema.parse(data);

    if (!env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY not configured, logging instead of sending email");
      console.log("Contact form submission:", validated);
      return NextResponse.json(
        { success: true, message: "Message reçu (mode démo)" },
        { status: 200 },
      );
    }

    const resend = new Resend(env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Agence Grey <contact@agence-grey.fr>",
      to: env.CONTACT_EMAIL_TO,
      replyTo: validated.email,
      subject: `Nouveau contact — ${validated.name}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Nom :</strong> ${validated.name}</p>
        <p><strong>Email :</strong> ${validated.email}</p>
        ${validated.phone ? `<p><strong>Téléphone :</strong> ${validated.phone}</p>` : ""}
        <p><strong>Message :</strong></p>
        <p>${validated.message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Message envoyé avec succès" },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ success: false, errors: error.issues }, { status: 400 });
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, message: "Une erreur est survenue" },
      { status: 500 },
    );
  }
}
