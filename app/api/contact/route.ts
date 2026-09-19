import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, service, budget, message } = body;

    // 1. Server-side Input Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please complete all required fields (Name, Email, and Message)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const recipientEmail = (process.env.CONTACT_RECEIVER_EMAIL || "info@nexoviodigitalsolutions.com").trim();

    // 2. Direct Backend Hostinger SMTP Configuration (Trims accidental whitespace/newlines)
    const smtpHost = (process.env.SMTP_HOST || "smtp.hostinger.com").trim();
    const smtpPort = parseInt((process.env.SMTP_PORT || "465").trim(), 10);
    const smtpUser = (process.env.SMTP_USER || "info@nexoviodigitalsolutions.com").trim();
    const rawPass = process.env.SMTP_PASS || "";
    const smtpPass = rawPass.trim();

    // Build Transporter using Hostinger SMTP settings
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for port 465 (Hostinger SSL)
      auth: smtpPass
        ? {
            user: smtpUser,
            pass: smtpPass,
          }
        : undefined,
      tls: {
        rejectUnauthorized: false,
      },
    });

    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0b1329; margin: 0; padding: 24px 12px; color: #1e293b; }
            .container { max-width: 620px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 20px 40px rgba(0,0,0,0.3); border: 1px solid #1e293b; }
            .header { background: linear-gradient(135deg, #001025 0%, #062147 100%); padding: 32px 24px; text-align: center; border-bottom: 3px solid #00c6ff; position: relative; }
            .brand-name { color: #ffffff; font-size: 20px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; margin: 0; }
            .brand-tagline { color: #00c6ff; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1.5px; margin-top: 6px; }
            .content { padding: 32px 28px; background-color: #ffffff; }
            .badge { display: inline-block; background-color: rgba(0, 198, 255, 0.12); color: #0088cc; font-weight: 700; font-size: 11px; padding: 6px 14px; border-radius: 50px; text-transform: uppercase; letter-spacing: 1px; border: 1px solid rgba(0, 198, 255, 0.3); margin-bottom: 20px; }
            .headline { font-size: 22px; font-weight: 800; color: #0f172a; margin: 0 0 20px 0; line-height: 1.3; }
            .info-card { background-color: #f8fafc; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 24px; }
            .info-row { display: table; width: 100%; border-bottom: 1px solid #e2e8f0; padding: 10px 0; }
            .info-row:last-child { border-bottom: none; }
            .info-label { display: table-cell; width: 140px; font-weight: 700; font-size: 13px; color: #64748b; text-transform: uppercase; letter-spacing: 0.5px; }
            .info-value { display: table-cell; font-size: 15px; color: #0f172a; font-weight: 600; }
            .info-value a { color: #0088cc; text-decoration: none; font-weight: 700; }
            .service-highlight { color: #0088cc; font-weight: 800; }
            .budget-tag { display: inline-block; background: #10b981; color: #ffffff; font-weight: 700; font-size: 12px; padding: 3px 10px; border-radius: 6px; }
            .message-card { background-color: #0f172a; border-radius: 12px; padding: 24px; color: #ffffff; border-left: 4px solid #00c6ff; margin-bottom: 28px; }
            .message-header { font-size: 11px; font-weight: 700; color: #00c6ff; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; }
            .message-text { font-size: 15px; color: #f1f5f9; line-height: 1.6; margin: 0; white-space: pre-wrap; word-break: break-word; }
            .cta-wrapper { text-align: center; margin: 28px 0 10px 0; }
            .reply-btn { display: inline-block; background: linear-gradient(135deg, #00c6ff 0%, #0072ff 100%); color: #ffffff !important; font-weight: 700; font-size: 14px; text-decoration: none; padding: 14px 28px; border-radius: 8px; box-shadow: 0 4px 14px rgba(0, 198, 255, 0.4); text-transform: uppercase; letter-spacing: 0.5px; }
            .footer { background-color: #001025; padding: 20px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #1e293b; }
            .footer p { margin: 4px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="brand-name">Nexovio Digital Solutions</div>
              <div class="brand-tagline">Web Development &amp; Digital Growth Agency</div>
            </div>
            <div class="content">
              <span class="badge">🔥 New Direct Project Lead</span>
              <h2 class="headline">Project Inquiry Details</h2>

              <div class="info-card">
                <div class="info-row">
                  <div class="info-label">Client Name</div>
                  <div class="info-value">${name}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Email Address</div>
                  <div class="info-value"><a href="mailto:${email}">${email}</a></div>
                </div>
                <div class="info-row">
                  <div class="info-label">Company</div>
                  <div class="info-value">${company || "Not Specified"}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Phone / WhatsApp</div>
                  <div class="info-value">${phone || "Not Provided"}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Service Needed</div>
                  <div class="info-value service-highlight">${service || "General Inquiry"}</div>
                </div>
                <div class="info-row">
                  <div class="info-label">Budget Range</div>
                  <div class="info-value">
                    <span class="budget-tag">${budget || "Unspecified"}</span>
                  </div>
                </div>
              </div>

              <div class="message-card">
                <div class="message-header">Client Project Scope &amp; Goals</div>
                <p class="message-text">${message}</p>
              </div>

              <div class="cta-wrapper">
                <a href="mailto:${email}?subject=Re:%20Nexovio%20Project%20Consultation%20-%20${encodeURIComponent(name)}" class="reply-btn">
                  ✉️ Reply to ${name}
                </a>
              </div>
            </div>
            <div class="footer">
              <p><strong>Nexovio Digital Solutions</strong> • Automated Lead Dispatch</p>
              <p>Received on ${new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })} IST</p>
            </div>
          </div>
        </body>
      </html>
    `;

    if (smtpPass) {
      // Send directly via SMTP
      await transporter.sendMail({
        from: `"Nexovio Website" <${smtpUser}>`,
        replyTo: email,
        to: recipientEmail,
        subject: `🔥 New Lead: ${name} (${service || "Inquiry"})`,
        html: htmlTemplate,
      });

      return NextResponse.json({
        success: true,
        message: "Your inquiry has been sent directly to our team!",
      });
    } else {
      // Log submission on server console if SMTP_PASS is pending
      console.log("=== NEW BACKEND LEAD SUBMISSION ===");
      console.log("Recipient:", recipientEmail);
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Company:", company);
      console.log("Phone:", phone);
      console.log("Service:", service);
      console.log("Budget:", budget);
      console.log("Message:", message);
      console.log("===================================");

      return NextResponse.json({
        success: true,
        message: "Your inquiry has been logged on our backend server! Add SMTP_PASS in Vercel to route directly to your inbox.",
      });
    }
  } catch (error: any) {
    console.error("Direct backend email error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to dispatch email. Please ensure your domain's SMTP_PASS is configured in Vercel.",
      },
      { status: 500 }
    );
  }
}
