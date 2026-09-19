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

    // 2. Direct Backend Hostinger SMTP Configuration
    const smtpHost = (process.env.SMTP_HOST || "smtp.hostinger.com").trim();
    const smtpPort = parseInt((process.env.SMTP_PORT || "465").trim(), 10);
    const smtpUser = (process.env.SMTP_USER || "info@nexoviodigitalsolutions.com").trim();
    const rawPass = process.env.SMTP_PASS || "";
    const smtpPass = rawPass.trim();

    // Plain text alternative for anti-spam deliverability compliance
    const textContent = `
New Project Inquiry - Nexovio Digital Solutions

Client Name: ${name}
Email Address: ${email}
Company: ${company || "Not Specified"}
Phone / WhatsApp: ${phone || "Not Provided"}
Service Required: ${formattedService}
Budget Range: ${formattedBudget}

Project Requirements & Details:
${message}

---
Sent via Nexovio Digital Solutions Contact Form
    `.trim();

    // Clean HTML Template for High Deliverability
    const htmlTemplate = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Segoe UI', Arial, sans-serif; background-color: #f4f6f9; margin: 0; padding: 20px; color: #2d3748; }
            .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06); border: 1px solid #e1e8ed; }
            .header { background: #001025; padding: 24px; text-align: center; border-bottom: 3px solid #00c6ff; }
            .header h1 { color: #ffffff; margin: 0; font-size: 18px; text-transform: uppercase; letter-spacing: 1.5px; }
            .content { padding: 28px; }
            .badge { display: inline-block; background-color: #e0f2fe; color: #0284c7; font-weight: bold; font-size: 11px; padding: 4px 12px; border-radius: 50px; text-transform: uppercase; margin-bottom: 16px; }
            .info-table { width: 100%; border-collapse: collapse; margin-top: 10px; }
            .info-table td { padding: 10px 12px; border-bottom: 1px solid #edf2f7; font-size: 14px; }
            .info-table td.label { font-weight: 600; color: #64748b; width: 140px; }
            .info-table td.value { color: #0f172a; font-weight: 500; }
            .message-box { margin-top: 22px; padding: 18px; background-color: #f8fafc; border-left: 4px solid #00c6ff; border-radius: 6px; }
            .message-title { font-size: 12px; font-weight: bold; color: #475569; text-transform: uppercase; margin: 0 0 8px 0; }
            .message-body { font-size: 14px; color: #1e293b; line-height: 1.6; margin: 0; white-space: pre-wrap; }
            .footer { background-color: #f8fafc; padding: 14px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #edf2f7; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>Nexovio Digital Solutions</h1>
            </div>
            <div class="content">
              <span class="badge">NEW WEBSITE PROJECT INQUIRY</span>
              <table class="info-table">
                <tr>
                  <td class="label">Client Name</td>
                  <td class="value">${name}</td>
                </tr>
                <tr>
                  <td class="label">Email Address</td>
                  <td class="value"><a href="mailto:${email}" style="color: #0284c7; text-decoration: none;">${email}</a></td>
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
                  <td class="value" style="color: #0284c7; font-weight: bold;">${formattedService}</td>
                </tr>
                <tr>
                  <td class="label">Budget Range</td>
                  <td class="value" style="font-weight: bold; color: #10b981;">${formattedBudget}</td>
                </tr>
              </table>

              <div class="message-box">
                <div class="message-title">Project Requirements &amp; Details</div>
                <div class="message-body">${message}</div>
              </div>
            </div>
            <div class="footer">
              Sent via Nexovio Digital Solutions Lead Server • ${new Date().toLocaleDateString("en-US")}
            </div>
          </div>
        </body>
      </html>
    `;

    const emailSubject = `New Project Inquiry: ${name} (${formattedService})`;

    if (smtpPass) {
      // Primary Attempt: Hostinger Port 465 (SSL)
      const primaryTransporter = nodemailer.createTransport({
        host: smtpHost,
        port: 465,
        secure: true, // SSL
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 10000,
        tls: {
          rejectUnauthorized: false,
        },
      });

      const mailOptions = {
        from: `"Nexovio Digital Solutions" <${smtpUser}>`,
        replyTo: email,
        to: recipientEmail,
        subject: `🔥 New Lead: ${name} (${formattedService})`,
        html: htmlTemplate,
      };

      try {
        await primaryTransporter.sendMail(mailOptions);
        return NextResponse.json({
          success: true,
          message: "Your inquiry has been sent directly to our team!",
        });
      } catch (primaryErr: any) {
        console.warn("Primary Port 465 failed, attempting Port 587 fallback...", primaryErr?.message);

        // Secondary Attempt: Hostinger Port 587 (STARTTLS)
        const secondaryTransporter = nodemailer.createTransport({
          host: smtpHost,
          port: 587,
          secure: false, // TLS
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
          connectionTimeout: 10000,
          greetingTimeout: 10000,
          socketTimeout: 10000,
          tls: {
            rejectUnauthorized: false,
          },
        });

        await secondaryTransporter.sendMail(mailOptions);
        return NextResponse.json({
          success: true,
          message: "Your inquiry has been sent directly to our team!",
        });
      }
    } else {
      console.log("=== NEW BACKEND LEAD SUBMISSION (No Password Configured) ===");
      console.log("Recipient:", recipientEmail);
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Message:", message);

      return NextResponse.json({
        success: true,
        message: "Inquiry logged. Add SMTP_PASS in Vercel to route directly to your inbox.",
      });
    }
  } catch (error: any) {
    console.error("Direct backend email error:", error);
    return NextResponse.json(
      {
        success: false,
        message: `Failed to dispatch email: ${error?.message || "Check SMTP credentials in Vercel."}`,
      },
      { status: 500 }
    );
  }
}
