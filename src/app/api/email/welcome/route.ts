import { NextRequest, NextResponse } from "next/server";

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const FROM_EMAIL = process.env.WELCOME_FROM_EMAIL || "dayma.itamunoala@colliers.com";
const FROM_NAME = "ReimbursementIQ";

function buildWelcomeHtml(name?: string): string {
  const greeting = name ? `Hi ${name},` : "Hi there,";
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:8px;overflow:hidden;">
  <tr><td style="background:#0f172a;padding:40px 40px 30px;">
    <h1 style="color:#0ea5e9;margin:0;font-size:28px;">ReimbursementIQ</h1>
    <p style="color:#ffffff;margin:10px 0 0;font-size:14px;opacity:0.8;">Healthcare Reimbursement Intelligence</p>
  </td></tr>
  <tr><td style="padding:40px;">
    <p style="color:#333;font-size:16px;line-height:1.6;margin:0 0 20px;">${greeting}</p>
    <p style="color:#333;font-size:16px;line-height:1.6;margin:0 0 20px;">Welcome to <strong>ReimbursementIQ</strong> — your weekly briefing on healthcare reimbursement changes, payer policy updates, and revenue cycle intelligence.</p>

    <div style="background:#ecf8fd;border-left:4px solid #0ea5e9;padding:20px;margin:25px 0;border-radius:4px;">
      <p style="color:#0f172a;font-weight:bold;margin:0 0 10px;font-size:14px;">📊 SAMPLE INSIGHT</p>
      <p style="color:#333;margin:0;font-size:14px;line-height:1.5;">CMS finalized the 2026 Physician Fee Schedule with a 3.4% conversion factor cut. However, new add-on codes for chronic care management could offset losses for practices with 40%+ Medicare panels.</p>
    </div>

    <p style="color:#333;font-size:15px;line-height:1.6;margin:0 0 5px;font-weight:bold;">Every weekly brief includes:</p>
    <ul style="color:#555;font-size:14px;line-height:2;margin:0 0 25px;padding-left:20px;">
      <li><strong>Reimbursement Alert</strong> — the one change that impacts your bottom line</li>
      <li><strong>Payer Policy Updates</strong> — Medicare, Medicaid, and commercial payer changes</li>
      <li><strong>Coding &amp; Billing</strong> — CPT/ICD updates, modifier guidance, audit trends</li>
      <li><strong>Revenue Cycle Intel</strong> — denial trends, prior auth changes, AR benchmarks</li>
      <li><strong>Regulatory Watch</strong> — CMS rules, OIG advisories, compliance updates</li>
    </ul>

    <p style="color:#333;font-size:15px;line-height:1.6;margin:0 0 25px;">Your first issue arrives this Friday.</p>

    <table width="100%" cellpadding="0" cellspacing="0" style="background:#0f172a;border-radius:8px;margin:25px 0;">
    <tr><td style="padding:25px 30px;">
      <p style="color:#0ea5e9;font-weight:bold;margin:0 0 8px;font-size:16px;">🔓 Upgrade to ReimbursementIQ Pro</p>
      <p style="color:#ffffff;margin:0 0 15px;font-size:14px;line-height:1.5;">Get daily payer alerts, full fee schedule databases, denial analytics, and exclusive reimbursement intelligence.</p>
      <a href="https://reimbursementiq.io/#pricing" style="display:inline-block;background:#0ea5e9;color:#ffffff;padding:12px 28px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:14px;">View Pro Plans →</a>
    </td></tr>
    </table>
  </td></tr>
  <tr><td style="background:#f8f8f8;padding:30px 40px;border-top:1px solid #e0e0e0;">
    <p style="color:#999;font-size:12px;line-height:1.6;margin:0;">
      You're receiving this because you subscribed to ReimbursementIQ.<br>
      <a href="https://reimbursementiq.io/unsubscribe" style="color:#0ea5e9;">Unsubscribe</a> · <a href="https://reimbursementiq.io/preferences" style="color:#0ea5e9;">Email Preferences</a>
    </p>
    <p style="color:#bbb;font-size:11px;line-height:1.5;margin:15px 0 0;">
      SignalStack Media LLC · 1209 Orange Street, Wilmington, DE 19801<br>
      © 2026 SignalStack Media LLC. All rights reserved.
    </p>
  </td></tr>
</table>
</td></tr>
</table>
</body>
</html>`;
}

export async function POST(request: NextRequest) {
  try {
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email required" }, { status: 400 });
    }

    if (!SENDGRID_API_KEY) {
      console.error("SENDGRID_API_KEY not configured");
      return NextResponse.json({ error: "Email service unavailable" }, { status: 500 });
    }

    const response = await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${SENDGRID_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: email.toLowerCase().trim() }] }],
        from: { email: FROM_EMAIL, name: FROM_NAME },
        subject: "Welcome to ReimbursementIQ — Your Reimbursement Intelligence Starts Now",
        content: [{ type: "text/html", value: buildWelcomeHtml(name) }],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("SendGrid welcome email error:", err);
      return NextResponse.json({ error: "Failed to send welcome email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Welcome email error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
