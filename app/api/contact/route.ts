import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function formatBudgetLabel(budgetVal?: string): string {
  if (!budgetVal || budgetVal === "unspecified" || budgetVal === "Unspecified") return "Not Specified";
  if (budgetVal === "tier-1") return "$3,000 – $7,500";
  if (budgetVal === "tier-2") return "$7,500 – $15,000";
  if (budgetVal === "tier-3") return "$15,000 – $30,000";
  if (budgetVal === "tier-4") return "$30,000+";
  return budgetVal;
}

function formatServiceLabel(serviceVal?: string): string {
  if (!serviceVal) return "General Inquiry";
  if (serviceVal === "web-development") return "Web Development";
  if (serviceVal === "web-design") return "Web Design";
  if (serviceVal === "ui-ux-design") return "UI/UX Design";
  if (serviceVal === "mobile-app-development") return "Mobile App Development";
  if (serviceVal === "graphic-design") return "Graphic Design";
  if (serviceVal === "digital-marketing") return "Digital Marketing / SEO";
  if (serviceVal === "full-solution") return "Complete End-to-End Digital Solution";
  return serviceVal;
}

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

    const formattedBudget = formatBudgetLabel(budget);
    const formattedService = formatServiceLabel(service);
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

    // Plain text alternative for anti-spam deliverability compliance
    const textContent = `
New Project Inquiry - Nexovio Digital Solutions

Client Name: ${name}
Email Address: ${email}
Company: ${company || "Not Specified"}
Phone / WhatsApp: ${phone || "Not Provided"}
Service Needed: ${formattedService}
Budget Range: ${formattedBudget}

Project Details & Goals:
${message}

---
Sent via Nexovio Digital Solutions Lead Server
    `.trim();

    // Enhanced HTML Email Template with High Deliverability & Premium Styling
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #1e293b; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
            .header { background: #001025; padding: 28px 24px; text-align: center; border-bottom: 3px solid #00c6ff; }
            .header h1 { color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; }
            .header p { color: #00c6ff; margin: 4px 0 0 0; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
            .content { padding: 30px 24px; }
            .badge { display: inline-block; background-color: #e0f2fe; color: #0088cc; font-weight: 700; font-size: 11px; padding: 5px 12px; border-radius: 50px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 18px; border: 1px solid #bae6fd; }
            .info-table { width: 100%; border-collapse: collapse; margin-top: 10px; margin-bottom: 24px; }
            .info-table td { padding: 12px 10px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
            .info-table td.label { font-weight: 700; color: #64748b; width: 140px; text-transform: uppercase; font-size: 12px; letter-spacing: 0.5px; }
            .info-table td.value { color: #0f172a; font-weight: 600; }
            .info-table td.value a { color: #0088cc; text-decoration: none; font-weight: 700; }
            .service-text { color: #0088cc; font-weight: 800; }
            .budget-badge { display: inline-block; background-color: #10b981; color: #ffffff; font-weight: 700; font-size: 12px; padding: 4px 10px; border-radius: 6px; }
            .message-box { background-color: #0f172a; border-radius: 10px; padding: 20px; color: #ffffff; border-left: 4px solid #00c6ff; margin-bottom: 24px; }
            .message-title { font-size: 11px; font-weight: 700; color: #00c6ff; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
            .message-body { font-size: 14px; color: #f8fafc; line-height: 1.6; margin: 0; white-space: pre-wrap; word-break: break-word; }
            .btn-wrapper { text-align: center; margin: 24px 0 10px 0; }
            .reply-btn { display: inline-block; background-color: #0088cc; color: #ffffff !important; font-weight: 700; font-size: 13px; text-decoration: none; padding: 12px 24px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.5px; }
            .footer { background-color: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>Nexovio Digital Solutions</h1>
              <p>IT Software Development &amp; Digital Agency</p>
            </div>
            <div class="content">
              <span class="badge">New Project Inquiry</span>

              <table class="info-table">
                <tr>
                  <td class="label">Client Name</td>
                  <td class="value">${name}</td>
                </tr>
                <tr>
                  <td class="label">Email Address</td>
                  <td class="value"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td class="label">Company</td>
                  <td class="value">${company || "Not Specified"}</td>
                </tr>
                <tr>
                  <td class="label">Phone / WhatsApp</td>
                  <td class="value">${phone || "Not Provided"}</td>
                </tr>
                <tr>
                  <td class="label">Service Required</td>
                  <td class="value service-text">${formattedService}</td>
                </tr>
                <tr>
                  <td class="label">Budget Range</td>
                  <td class="value">
                    <span class="budget-badge">${formattedBudget}</span>
                  </td>
                </tr>
              </table>

              <div class="message-box">
                <div class="message-title">Project Scope &amp; Details</div>
                <div class="message-body">${message}</div>
              </div>

              <div class="btn-wrapper">
                <a href="mailto:${email}?subject=Re:%20Nexovio%20Project%20Consultation%20-%20${encodeURIComponent(name)}" class="reply-btn">
                  Reply to ${name}
                </a>
              </div>
            </div>
            <div class="footer">
              Sent via Nexovio Digital Solutions Lead Server • ${new Date().toLocaleDateString("en-US")}
            </div>
          </div>
        </body>
      </html>
    `;

    if (smtpPass) {
      // Send directly via Hostinger SMTP
      await transporter.sendMail({
        from: `"Nexovio Website" <${smtpUser}>`,
        replyTo: `"${name}" <${email}>`,
        to: recipientEmail,
        subject: `New Project Inquiry: ${name} (${formattedService})`,
        text: textContent,
        html: htmlTemplate,
      });

      return NextResponse.json({
        success: true,
        message: "Your inquiry has been sent directly to our team!",
      });
    } else {
      console.log("=== NEW BACKEND LEAD SUBMISSION ===");
      console.log("Recipient:", recipientEmail);
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Company:", company);
      console.log("Phone:", phone);
      console.log("Service:", formattedService);
      console.log("Budget:", formattedBudget);
      console.log("Message:", message);
      console.log("===================================");

      return NextResponse.json({
        success: true,
        message: "Your inquiry has been logged on our backend server!",
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
