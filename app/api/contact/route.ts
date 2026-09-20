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
  if (serviceVal === "digital-marketing" || serviceVal === "seo-digital-marketing") return "Digital Marketing / SEO";
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

    // 2. Direct Backend Hostinger SMTP Configuration
    const smtpHost = (process.env.SMTP_HOST || "smtp.hostinger.com").trim();
    const smtpPort = parseInt((process.env.SMTP_PORT || "465").trim(), 10);
    const smtpUser = (process.env.SMTP_USER || "info@nexoviodigitalsolutions.com").trim();
    const rawPass = process.env.SMTP_PASS || "";
    const smtpPass = rawPass.trim();

    // Build Transporter using Hostinger SMTP settings
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
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

    // Plain text notification for team
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

    // HTML Email Template for Nexovio Team Notification
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

    // 3. Customer Auto-Responder Email (Thank You Confirmation)
    const customerTextContent = `
Hi ${name},

Thank you for contacting Nexovio Digital Solutions! We have received your inquiry regarding ${formattedService}.

Our technical engineering team is currently evaluating your project details. We will get back to you ASAP (typically within 1 business day) to discuss your goals and schedule a consultation.

Summary of Your Submission:
- Service Required: ${formattedService}
- Company: ${company || "Not Specified"}
- Estimated Budget: ${formattedBudget}
- Your Message: ${message}

If you have urgent questions, feel free to reply directly to this email or contact us on WhatsApp.

Best regards,
The Nexovio Engineering & Strategy Team
Nexovio Digital Solutions
https://www.nexoviodigitalsolutions.com
    `.trim();

    const customerHtmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Contacting Nexovio</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #03050a; margin: 0; padding: 30px 15px; color: #e2e8f0; }
            .container { max-width: 600px; margin: 0 auto; background: #070e1c; border-radius: 16px; overflow: hidden; border: 1px solid rgba(0, 198, 255, 0.25); box-shadow: 0 20px 50px rgba(0,0,0,0.6); }
            .header { background: linear-gradient(135deg, #001025 0%, #07172e 100%); padding: 32px 24px; text-align: center; border-bottom: 3px solid #00c6ff; }
            .header-title { color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 1px; text-transform: uppercase; }
            .header-subtitle { color: #00c6ff; margin: 6px 0 0 0; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; }
            .body-content { padding: 32px 28px; }
            .hero-badge { display: inline-block; background: rgba(0, 198, 255, 0.12); color: #00c6ff; font-weight: 700; font-size: 11px; padding: 6px 14px; border-radius: 50px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 20px; border: 1px solid rgba(0, 198, 255, 0.3); }
            .greeting { font-size: 18px; font-weight: 700; color: #ffffff; margin-bottom: 12px; }
            .intro-text { font-size: 14px; color: #94a3b8; line-height: 1.65; margin-bottom: 24px; }
            .highlight-box { background: rgba(23, 105, 255, 0.08); border-left: 4px solid #1769ff; border-radius: 8px; padding: 18px 20px; margin-bottom: 24px; }
            .highlight-text { font-size: 14px; color: #38bdf8; font-weight: 600; margin: 0; line-height: 1.5; }
            .summary-card { background: #0a1428; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 20px; margin-bottom: 24px; }
            .summary-title { font-size: 11px; font-weight: 700; color: #00c6ff; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 12px; }
            .summary-table { width: 100%; border-collapse: collapse; }
            .summary-table td { padding: 8px 0; font-size: 13px; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
            .summary-table td.label { color: #64748b; font-weight: 600; width: 130px; }
            .summary-table td.value { color: #ffffff; font-weight: 600; }
            .msg-preview { font-size: 13px; color: #cbd5e1; line-height: 1.5; background: #050a14; padding: 12px; border-radius: 6px; margin-top: 8px; white-space: pre-wrap; word-break: break-word; }
            .cta-wrapper { text-align: center; margin: 28px 0 12px 0; }
            .cta-button { display: inline-block; background: linear-gradient(135deg, #1769ff 0%, #00c6ff 100%); color: #ffffff !important; font-weight: 700; font-size: 13px; text-decoration: none; padding: 13px 28px; border-radius: 8px; text-transform: uppercase; letter-spacing: 0.5px; box-shadow: 0 4px 20px rgba(0, 198, 255, 0.35); }
            .footer { background: #040812; padding: 20px 24px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid rgba(255, 255, 255, 0.05); line-height: 1.6; }
            .footer a { color: #00c6ff; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 class="header-title">Nexovio Digital Solutions</h1>
              <p class="header-subtitle">IT Software Engineering &amp; Digital Growth</p>
            </div>
            <div class="body-content">
              <span class="hero-badge">✓ Inquiry Received</span>
              <div class="greeting">Hi ${name},</div>
              <div class="intro-text">
                Thank you for contacting <strong>Nexovio Digital Solutions</strong>. We have received your project inquiry regarding <strong>${formattedService}</strong>.
              </div>
              
              <div class="highlight-box">
                <p class="highlight-text">
                  ⚡ Our technical engineering team is evaluating your project scope. We will get back to you ASAP (typically within 1 business day) to discuss your goals and schedule a consultation.
                </p>
              </div>

              <div class="summary-card">
                <div class="summary-title">Summary of Your Inquiry</div>
                <table class="summary-table">
                  <tr>
                    <td class="label">Service Required</td>
                    <td class="value" style="color: #00c6ff;">${formattedService}</td>
                  </tr>
                  <tr>
                    <td class="label">Company</td>
                    <td class="value">${company || "Not Specified"}</td>
                  </tr>
                  <tr>
                    <td class="label">Estimated Budget</td>
                    <td class="value">${formattedBudget}</td>
                  </tr>
                </table>
                <div style="margin-top: 12px; font-size: 11px; color: #64748b; font-weight: 700; text-transform: uppercase;">Your Message:</div>
                <div class="msg-preview">${message}</div>
              </div>

              <div class="cta-wrapper">
                <a href="https://www.nexoviodigitalsolutions.com" class="cta-button" target="_blank">
                  Visit Nexovio Digital Solutions
                </a>
              </div>
            </div>
            <div class="footer">
              Nexovio Digital Solutions • IT Software Development &amp; Digital Agency<br>
              Email: <a href="mailto:info@nexoviodigitalsolutions.com">info@nexoviodigitalsolutions.com</a> • Web: <a href="https://www.nexoviodigitalsolutions.com">www.nexoviodigitalsolutions.com</a><br>
              © ${new Date().getFullYear()} Nexovio Digital Solutions. All rights reserved.
            </div>
          </div>
        </body>
      </html>
    `;

    if (smtpPass) {
      // 1. Send Lead Notification to Nexovio Internal Team
      await transporter.sendMail({
        from: `"Nexovio Website" <${smtpUser}>`,
        replyTo: `"${name}" <${email}>`,
        to: recipientEmail,
        subject: `New Project Inquiry: ${name} (${formattedService})`,
        text: textContent,
        html: htmlTemplate,
      });

      // 2. Send Automated Confirmation & Thank You Email to Customer
      try {
        await transporter.sendMail({
          from: `"Nexovio Digital Solutions" <${smtpUser}>`,
          to: `"${name}" <${email}>`,
          subject: `Thank You for Contacting Nexovio – We Received Your Inquiry!`,
          text: customerTextContent,
          html: customerHtmlTemplate,
        });
      } catch (customerEmailError) {
        console.error("Warning: Failed to dispatch customer auto-responder email:", customerEmailError);
      }

      return NextResponse.json({
        success: true,
        message: "Your inquiry has been sent directly to our team!",
      });
    } else {
      console.log("=== NEW BACKEND LEAD SUBMISSION ===");
      console.log("Recipient:", recipientEmail);
      console.log("Customer Email:", email);
      console.log("Name:", name);
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
