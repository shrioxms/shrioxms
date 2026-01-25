//  resend

import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, companyName, email, interest, message } = body;

    console.log("server data", name, companyName, email, interest, message);

    if (!name || !companyName || !email || !interest || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Contact Form <hr@shrioxms.com>",
      // from: "Contact Form <onboarding@resend.dev>",
      to: [process.env.RECEIVER_EMAIL!],
      subject: `New Enquiry from ${name}`,
      html: `
        <h3>New Enquiry Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${companyName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Interest:</strong> ${interest}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    // route.ts
    console.error("Resend Error:", JSON.stringify(error, null, 2));
    return NextResponse.json(
      { success: false, message: "Email sending failed" },
      { status: 500 },
    );
  }
}

// working gmail nodemailer

// import nodemailer from "nodemailer";
// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const { name, companyName, email, interest, message } = await req.json();

//   console.log("EMAIL_USER:", process.env.EMAIL_USER);

//   console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "OK" : "MISSING");
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   await transporter.sendMail({
//     to: process.env.RECEIVER_EMAIL,
//     subject: "New Enquiry Request",
//     html: `
//       <p>Name: ${name}</p>
//       <p>Company: ${companyName}</p>
//       <p>Email: ${email}</p>
//       <p>Interest: ${interest}</p>
//       <p>Message: ${message}</p>
//     `,
//   });

//   return NextResponse.json({ success: true });
// }

// Zoho nodemailer
// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req: Request) {
//   try {
//     const { name, companyName, email, interest, message } = await req.json();

//     console.log("EMAIL_USER:", process.env.EMAIL_USER);

//     console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "OK" : "MISSING");

//     const transporter = nodemailer.createTransport({
//       host: "smtp.zoho.in",
//       port: 465,
//       secure: true,
//       auth: {
//         user: process.env.EMAIL_USER!,
//         pass: process.env.EMAIL_PASS!,
//       },
//     });

//     await transporter.sendMail({
//       from: `"Contact Form" <${process.env.EMAIL_USER}>`,
//       to: process.env.RECEIVER_EMAIL,
//       replyTo: email, // reply directly to user
//       subject: "New Contact Form Submission",
//       html: `
//         <h3>New Enquiry Request</h3>
//         <p><b>Name:</b> ${name}</p>
//         <p><b>Company:</b> ${companyName}</p>
//         <p><b>Email:</b> ${email}</p>
//         <p><b>Interest:</b> ${interest}</p>
//         <p><b>Message:</b> ${message}</p>
//       `,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error("Zoho mail error:", error);
//     return NextResponse.json(
//       { success: false, error: "Email sending failed" },
//       { status: 500 },
//     );
//   }
// }
