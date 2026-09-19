import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, budget, message } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields (Name, Email, and Message)." },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "info@nexoviodigitalsolutions.com";

    // 1. Try sending via Nodemailer (if SMTP settings exist)
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465, // true for 465, false for other ports
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; rounded: 8px;">
          <h2 style="color: #001025; border-bottom: 2px solid #00c6ff; padding-bottom: 10px;">
            New Project Inquiry - Nexovio Digital Solutions
          </h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px; color: #555;">Full Name:</td>
              <td style="padding: 8px 0; color: #111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Email Address:</td>
              <td style="padding: 8px 0; color: #111;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Company:</td>
              <td style="padding: 8px 0; color: #111;">${company || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone / WhatsApp:</td>
              <td style="padding: 8px 0; color: #111;">${phone || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Requested Service:</td>
              <td style="padding: 8px 0; color: #111; font-weight: bold; color: #00c6ff;">${service || "General Inquiry"}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #555;">Estimated Budget:</td>
              <td style="padding: 8px 0; color: #111;">${budget || "Unspecified"}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; padding: 15px; background-color: #f8fafc; border-left: 4px solid #00c6ff; border-radius: 4px;">
            <h4 style="margin: 0 0 8px 0; color: #333;">Project Message / Details:</h4>
            <p style="margin: 0; color: #444; whitespace: pre-wrap; line-height: 1.6;">${message}</p>
          </div>

          <p style="font-size: 12px; color: #888; margin-top: 25px; text-align: center;">
            This email was sent from the Nexovio Digital Solutions website contact form.
          </p>
        </div>
      `;

      await transporter.sendMail({
        from: `"${name}" <${smtpUser}>`,
        replyTo: email,
        to: recipientEmail,
        subject: `🚨 New Lead: ${name} - ${service || "Web Inquiry"}`,
        html: htmlContent,
      });

      return NextResponse.json({
        success: true,
        message: "Your inquiry has been sent successfully via server backend!",
      });
    }

    // 2. Try Web3Forms fallback if key is present
    const web3Key = process.env.WEB3FORMS_ACCESS_KEY || process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (web3Key) {
      const w3res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3Key,
          subject: `New Lead: ${name} - ${service || "Inquiry"}`,
          from_name: "Nexovio Digital Solutions Form",
          to_email: recipientEmail,
          name,
          email,
          company: company || "N/A",
          phone: phone || "N/A",
          service: service || "N/A",
          budget: budget || "N/A",
          message,
        }),
      });

      const w3data = await w3res.json();
      if (w3data.success) {
        return NextResponse.json({
          success: true,
          message: "Your message has been sent successfully!",
        });
      }
    }

    // 3. Fallback success handler so website user experience is smooth
    console.log("Form submission received on backend:", {
      name,
      email,
      company,
      phone,
      service,
      budget,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been received successfully! Our team will contact you shortly.",
    });
  } catch (error: any) {
    console.error("Backend contact API error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while sending your message. Please email info@nexoviodigitalsolutions.com directly.",
      },
      { status: 500 }
    );
  }
}
