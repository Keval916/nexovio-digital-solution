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
    const {
      name,
      email,
      company,
      phone,
      service,
      budget,
      message,
      agencyName,
      agencyType,
      primaryNeed,
      engagement,
      sourcePage,
    } = body;

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

    const isAgencyPartnership = service === "agency-partnership" || sourcePage === "agency-partnership";
    const displayAgency = agencyName || company || "Agency Partner";
    const displayAgencyType = agencyType || "Digital Agency";
    const displayPrimaryNeed = primaryNeed || formatServiceLabel(service);
    const displayEngagement = engagement || formatBudgetLabel(budget);

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
      connectionTimeout: 10000,
      greetingTimeout: 10000,
      socketTimeout: 15000,
    });

    // Determine Subject, Plain Text, and HTML for Internal Team Notification
    const teamSubject = isAgencyPartnership
      ? `New Agency Partnership Inquiry: ${displayAgency} (${name})`
      : `New Project Inquiry: ${name} (${formattedService})`;

    const textContent = isAgencyPartnership
      ? `
New Agency Partnership Inquiry - Nexovio Digital Solutions

Partner Contact: ${name}
Work Email: ${email}
Agency / Website: ${displayAgency}
Agency Type: ${displayAgencyType}
Primary Technical Need: ${displayPrimaryNeed}
Engagement Model: ${displayEngagement}
Phone / WhatsApp: ${phone || "Not Provided"}

Project Scope & Delivery Requirements:
${message}

Confidentiality & NDA: Discuss NDA before sensitive details are shared.
---
Sent via Nexovio Digital Solutions Agency Partner Server
      `.trim()
      : `
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
    const htmlTemplate = isAgencyPartnership
      ? `
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
            .badge { display: inline-block; background-color: #ecfdf5; color: #059669; font-weight: 700; font-size: 11px; padding: 6px 14px; border-radius: 50px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 18px; border: 1px solid #a7f3d0; }
            .info-table { width: 100%; border-collapse: collapse; margin-top: 10px; margin-bottom: 24px; }
            .info-table td { padding: 12px 10px; border-bottom: 1px solid #f1f5f9; font-size: 14px; }
            .info-table td.label { font-weight: 700; color: #64748b; width: 150px; text-transform: uppercase; font-size: 12px; letter-spacing: 0.5px; }
            .info-table td.value { color: #0f172a; font-weight: 600; }
            .info-table td.value a { color: #0088cc; text-decoration: none; font-weight: 700; }
            .service-text { color: #0088cc; font-weight: 800; }
            .model-badge { display: inline-block; background-color: #0284c7; color: #ffffff; font-weight: 700; font-size: 12px; padding: 4px 10px; border-radius: 6px; }
            .message-box { background-color: #0f172a; border-radius: 10px; padding: 20px; color: #ffffff; border-left: 4px solid #00c6ff; margin-bottom: 24px; }
            .message-title { font-size: 11px; font-weight: 700; color: #00c6ff; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
            .message-body { font-size: 14px; color: #f8fafc; line-height: 1.6; margin: 0; white-space: pre-wrap; word-break: break-word; }
            .nda-note { font-size: 12px; color: #059669; background: #ecfdf5; border: 1px solid #a7f3d0; border-radius: 8px; padding: 10px 14px; margin-bottom: 20px; font-weight: 600; }
            .btn-wrapper { text-align: center; margin: 24px 0 10px 0; }
            .reply-btn { display: inline-block; background-color: #0088cc; color: #ffffff !important; font-weight: 700; font-size: 13px; text-decoration: none; padding: 12px 24px; border-radius: 6px; text-transform: uppercase; letter-spacing: 0.5px; }
            .footer { background-color: #f8fafc; padding: 16px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <h1>Nexovio Digital Solutions</h1>
              <p>White-Label Agency Delivery Partner</p>
            </div>
            <div class="content">
              <span class="badge">🤝 Agency Partnership Inquiry</span>

              <table class="info-table">
                <tr>
                  <td class="label">Partner Contact</td>
                  <td class="value">${name}</td>
                </tr>
                <tr>
                  <td class="label">Work Email</td>
                  <td class="value"><a href="mailto:${email}">${email}</a></td>
                </tr>
                <tr>
                  <td class="label">Agency / Website</td>
                  <td class="value">${displayAgency}</td>
                </tr>
                <tr>
                  <td class="label">Agency Type</td>
                  <td class="value">${displayAgencyType}</td>
                </tr>
                <tr>
                  <td class="label">Primary Technical Need</td>
                  <td class="value service-text">${displayPrimaryNeed}</td>
                </tr>
                <tr>
                  <td class="label">Engagement Model</td>
                  <td class="value">
                    <span class="model-badge">${displayEngagement}</span>
                  </td>
                </tr>
                <tr>
                  <td class="label">Phone / WhatsApp</td>
                  <td class="value">${phone || "Not Provided"}</td>
                </tr>
              </table>

              <div class="message-box">
                <div class="message-title">Project Scope &amp; Client Delivery Details</div>
                <div class="message-body">${message}</div>
              </div>

              <div class="nda-note">
                🔒 Partner requested NDA-friendly confidentiality before sensitive client details are shared.
              </div>

              <div class="btn-wrapper">
                <a href="mailto:${email}?subject=Re:%20Nexovio%20Agency%20Partnership%20-%20${encodeURIComponent(displayAgency)}" class="reply-btn">
                  Reply to ${name} (${displayAgency})
                </a>
              </div>
            </div>
            <div class="footer">
              Sent via Nexovio Digital Solutions Agency Partner Server • ${new Date().toLocaleDateString("en-US")}
            </div>
          </div>
        </body>
      </html>
      `
      : `
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
    const customerSubject = isAgencyPartnership
      ? `Thank You for Your Agency Partnership Inquiry – Nexovio Digital Solutions`
      : `Thank You for Contacting Nexovio – We Received Your Inquiry!`;

    const customerTextContent = isAgencyPartnership
      ? `
Hi ${name},

Thank you for reaching out to Nexovio Digital Solutions regarding a white-label technical partnership for ${displayAgency}!

Our technical leadership and engineering team are reviewing your project requirements and delivery scope. We will follow up within 1 business day (24 hours) to discuss how we can best support your client delivery under strict confidentiality.

Summary of Your Partnership Submission:
- Agency Name: ${displayAgency}
- Agency Type: ${displayAgencyType}
- Primary Need: ${displayPrimaryNeed}
- Engagement Model: ${displayEngagement}

Project Details & Scope:
${message}

Next Steps:
1. Technical Scope & Stack Evaluation: We analyze your tech requirements and timeline.
2. Confidentiality & NDA: We discuss and sign mutual NDAs before sensitive client details.
3. Collaborative Discovery Call: We agree on sprint cadence, workflow, and communication channels.

If you have urgent questions, reply directly to this email or reach us at partners@nexoviodigitalsolutions.com.

Best regards,
The Nexovio Agency Delivery & Technical Leadership Team
Nexovio Digital Solutions
https://www.nexoviodigitalsolutions.com
      `.trim()
      : `
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

    const customerHtmlTemplate = isAgencyPartnership
      ? `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Thank You for Your Agency Partnership Inquiry</title>
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
            .summary-table td.label { color: #64748b; font-weight: 600; width: 140px; }
            .summary-table td.value { color: #ffffff; font-weight: 600; }
            .msg-preview { font-size: 13px; color: #cbd5e1; line-height: 1.5; background: #050a14; padding: 12px; border-radius: 6px; margin-top: 8px; white-space: pre-wrap; word-break: break-word; }
            .steps-card { background: #050a14; border: 1px solid rgba(0, 198, 255, 0.15); border-radius: 10px; padding: 16px; margin-bottom: 24px; }
            .steps-title { font-size: 11px; font-weight: 700; color: #00c6ff; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; }
            .step-item { font-size: 12px; color: #94a3b8; margin-bottom: 6px; line-height: 1.5; }
            .step-item strong { color: #ffffff; }
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
              <p class="header-subtitle">White-Label Technology &amp; Digital Delivery Partner</p>
            </div>
            <div class="body-content">
              <span class="hero-badge">🤝 Partnership Inquiry Received</span>
              <div class="greeting">Hi ${name},</div>
              <div class="intro-text">
                Thank you for reaching out to <strong>Nexovio Digital Solutions</strong> regarding a white-label technical partnership for <strong>${displayAgency}</strong>.
              </div>
              
              <div class="highlight-box">
                <p class="highlight-text">
                  ⚡ Our technical leadership team is evaluating your delivery requirements and project scope. We will follow up within 1 business day (24 hours) to discuss deliverables, milestones, and how we can best support your client delivery under strict confidentiality.
                </p>
              </div>

              <div class="summary-card">
                <div class="summary-title">Summary of Your Partnership Submission</div>
                <table class="summary-table">
                  <tr>
                    <td class="label">Agency / Website</td>
                    <td class="value">${displayAgency}</td>
                  </tr>
                  <tr>
                    <td class="label">Agency Type</td>
                    <td class="value">${displayAgencyType}</td>
                  </tr>
                  <tr>
                    <td class="label">Primary Technical Need</td>
                    <td class="value" style="color: #00c6ff;">${displayPrimaryNeed}</td>
                  </tr>
                  <tr>
                    <td class="label">Engagement Model</td>
                    <td class="value">${displayEngagement}</td>
                  </tr>
                  <tr>
                    <td class="label">Confidentiality</td>
                    <td class="value" style="color: #10b981;">NDA-friendly discussions guaranteed</td>
                  </tr>
                </table>
                <div style="margin-top: 12px; font-size: 11px; color: #64748b; font-weight: 700; text-transform: uppercase;">Your Project Scope &amp; Details:</div>
                <div class="msg-preview">${message}</div>
              </div>

              <div class="steps-card">
                <div class="steps-title">What Happens Next:</div>
                <div class="step-item">1. <strong>Requirements Evaluation:</strong> We evaluate your tech stack, scope, and delivery timeline.</div>
                <div class="step-item">2. <strong>NDA &amp; Confidentiality:</strong> We execute mutual NDA protection before sensitive client IP is shared.</div>
                <div class="step-item">3. <strong>Discovery &amp; Kickoff:</strong> We agree on sprint cadence, repository access, and communication channels (Slack, Teams, GitHub).</div>
              </div>

              <div class="cta-wrapper">
                <a href="https://www.nexoviodigitalsolutions.com/agency-partnership" class="cta-button" target="_blank">
                  View Agency Partnership Model
                </a>
              </div>
            </div>
            <div class="footer">
              Nexovio Digital Solutions • White-Label Delivery Partner for Global Agencies<br>
              Email: <a href="mailto:partners@nexoviodigitalsolutions.com">partners@nexoviodigitalsolutions.com</a> • Web: <a href="https://www.nexoviodigitalsolutions.com">www.nexoviodigitalsolutions.com</a><br>
              © ${new Date().getFullYear()} Nexovio Digital Solutions. All rights reserved.
            </div>
          </div>
        </body>
      </html>
      `
      : `
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

    // Always log the lead to the server console first so inquiries are never lost
    console.log("=== NEW INQUIRY LOGGED ===");
    console.log("Type:", isAgencyPartnership ? "AGENCY PARTNERSHIP" : "STANDARD PROJECT LEAD");
    console.log("Partner/Client Name:", name);
    console.log("Email:", email);
    console.log("Company/Agency:", displayAgency);
    if (isAgencyPartnership) {
      console.log("Agency Type:", displayAgencyType);
      console.log("Primary Need:", displayPrimaryNeed);
      console.log("Engagement Model:", displayEngagement);
    } else {
      console.log("Service:", formattedService);
      console.log("Budget:", formattedBudget);
    }
    console.log("Message/Scope:", message);
    console.log("================================");

    if (smtpPass) {
      try {
        // 1. Send Lead Notification to Nexovio Internal Team
        await transporter.sendMail({
          from: `"Nexovio Website" <${smtpUser}>`,
          replyTo: `"${name}" <${email}>`,
          to: recipientEmail,
          subject: teamSubject,
          text: textContent,
          html: htmlTemplate,
        });

        // 2. Send Automated Confirmation & Thank You Email to Customer / Agency Partner
        try {
          await transporter.sendMail({
            from: `"Nexovio Digital Solutions" <${smtpUser}>`,
            to: `"${name}" <${email}>`,
            subject: customerSubject,
            text: customerTextContent,
            html: customerHtmlTemplate,
          });
        } catch (customerEmailError) {
          console.error("Warning: Failed to dispatch customer auto-responder email:", customerEmailError);
        }

        return NextResponse.json({
          success: true,
          message: isAgencyPartnership
            ? "Your agency partnership inquiry has been sent directly to our leadership team!"
            : "Your inquiry has been sent directly to our team!",
        });
      } catch (smtpError: any) {
        console.error("SMTP dispatch error details:", {
          message: smtpError?.message,
          code: smtpError?.code,
          response: smtpError?.response,
          responseCode: smtpError?.responseCode,
        });

        let userMsg = "Failed to dispatch email. Please ensure your domain's SMTP_PASS is configured in Vercel.";
        if (smtpError?.responseCode === 535 || smtpError?.message?.includes("Invalid login") || smtpError?.message?.includes("authentication")) {
          userMsg = `SMTP authentication failed (535). Please verify that the SMTP_PASS environment variable in Vercel matches your Hostinger email password for ${smtpUser}.`;
        } else if (smtpError?.code === "ETIMEDOUT" || smtpError?.code === "ECONNREFUSED") {
          userMsg = `SMTP connection timed out connecting to ${smtpHost}:${smtpPort}. Try changing SMTP_PORT to 587 in Vercel.`;
        } else if (smtpError?.message) {
          userMsg = `Failed to dispatch email: ${smtpError.message}`;
        }

        return NextResponse.json(
          {
            success: false,
            message: userMsg,
          },
          { status: 500 }
        );
      }
    } else {
      return NextResponse.json({
        success: true,
        message: "Your inquiry has been logged on our backend server!",
      });
    }
  } catch (error: any) {
    console.error("Direct backend handler error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to process form submission. Please try again or email info@nexoviodigitalsolutions.com.",
      },
      { status: 500 }
    );
  }
}
