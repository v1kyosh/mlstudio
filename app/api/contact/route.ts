import { NextResponse } from "next/server";
import { Resend } from "resend";
import { PROFILE } from "@/lib/resume-data";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_NAME_LEN = 200;
const MAX_MESSAGE_LEN = 5000;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildEmailHtml({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  return `<!doctype html>
<html>
  <body style="margin:0;padding:0;background:#0a0a0a;">
    <div style="background:#0a0a0a;padding:32px 16px;font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;margin:0 auto;border-collapse:collapse;border:1px solid #262626;border-radius:12px;overflow:hidden;">
        <tr>
          <td style="padding:22px 28px;background:#111111;border-bottom:1px solid #262626;">
            <span style="font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#4ade80;font-weight:600;">Marcos Leite</span>
            <div style="font-size:12px;color:#8a8a8a;margin-top:2px;">Portfolio contact form</div>
          </td>
        </tr>
        <tr>
          <td style="padding:28px;background:#0f0f0f;">
            <div style="font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:#8a8a8a;margin-bottom:4px;">From</div>
            <div style="font-size:15px;color:#ffffff;margin-bottom:22px;">${safeName} &lt;${safeEmail}&gt;</div>
            <div style="font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:#8a8a8a;margin-bottom:8px;">Message</div>
            <div style="font-size:14px;line-height:1.6;color:#e5e5e5;">${safeMessage}</div>
          </td>
        </tr>
        <tr>
          <td style="padding:16px 28px;background:#111111;border-top:1px solid #262626;">
            <div style="font-size:11px;line-height:1.5;color:#6a6a6a;">Sent from the contact form on your portfolio site. Reply directly to this email to respond to ${safeName}.</div>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>`;
}

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (hits.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  if (timestamps.length >= RATE_LIMIT_MAX) {
    hits.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  hits.set(ip, timestamps);
  return false;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 },
    );
  }

  const { name, email, message } = await request.json();

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !email.trim() ||
    !message.trim()
  ) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (name.length > MAX_NAME_LEN || message.length > MAX_MESSAGE_LEN) {
    return NextResponse.json(
      { error: "Name or message is too long." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "Please provide a valid email address." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Contact form is not configured." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: PROFILE.email,
    replyTo: email,
    subject: `Portfolio inquiry from ${name}`,
    text: `${message}\n\n- ${name} (${email})`,
    html: buildEmailHtml({ name, email, message }),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send message." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
