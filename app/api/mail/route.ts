import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
        return NextResponse.json(
            { error: "Name, email, and message are required" },
            { status: 400 }
        );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER, 
      subject: `Client Message From ${name}, ${email}`,
      text: message,
      html: `
        <h2>New message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,

    });

    return NextResponse.json({ message: "Mail sent successfully" });

  } catch (err) {

    console.error(err);
    return NextResponse.json(
        { error: "Failed to send mail" }, 
        { status: 500 }
    );
  }
}
