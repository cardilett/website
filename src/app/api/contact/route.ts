import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  need?: string;
  message?: string;
  consent: boolean;
}

export async function POST(req: NextRequest) {
  if (!process.env.RESEND_API_KEY) {
    console.error('[contact] RESEND_API_KEY is not set');
    return NextResponse.json(
      { error: 'Email service is not configured.' },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, company = '', need = '', message = '', consent } = body;

  // Server-side validation — mirrors the client checks
  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }

  if (!consent) {
    return NextResponse.json({ error: 'Consent is required.' }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  const from = process.env.RESEND_FROM ?? 'Cardilett <onboarding@resend.dev>';
  const to = process.env.RESEND_TO ?? 'info@cardilett.ae';

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `New enquiry — ${name}${company ? ` · ${company}` : ''}`,
    html: buildEmailHtml({ name, email, company, need, message }),
  });

  if (error) {
    console.error('[contact] Resend error:', error);
    return NextResponse.json(
      { error: 'Failed to send your message. Please try again.' },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, id: data?.id });
}

// ---------------------------------------------------------------------------
// Email template
// ---------------------------------------------------------------------------

function esc(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function buildEmailHtml(fields: {
  name: string;
  email: string;
  company: string;
  need: string;
  message: string;
}) {
  const { name, email, company, need, message } = fields;

  const rows: [string, string][] = [
    ['Name', esc(name)],
    ['Email', `<a href="mailto:${esc(email)}" style="color:#6F0707;text-decoration:none;">${esc(email)}</a>`],
    ...(company ? [['Company', esc(company)] as [string, string]] : []),
    ...(need ? [['Area of need', esc(need)] as [string, string]] : []),
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:12px 0;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:rgba(43,43,61,0.5);width:130px;vertical-align:top;border-bottom:1px solid rgba(43,43,61,0.08);">${label}</td>
        <td style="padding:12px 0;font-size:15px;color:#2B2B3D;border-bottom:1px solid rgba(43,43,61,0.08);">${value}</td>
      </tr>`
    )
    .join('');

  const messageBlock = message
    ? `<div style="margin-top:24px;padding:20px;background:rgba(43,43,61,0.04);border-radius:8px;border-left:3px solid #6F0707;">
        <p style="margin:0 0 8px;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:rgba(43,43,61,0.5);">Context</p>
        <p style="margin:0;font-size:15px;color:#2B2B3D;line-height:1.6;">${esc(message).replace(/\n/g, '<br>')}</p>
      </div>`
    : '';

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body style="margin:0;padding:24px;background:#FBEDDD;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <div style="max-width:580px;margin:0 auto;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 32px rgba(28,28,42,0.12);">
    <div style="background:linear-gradient(135deg,#8B0A0A 0%,#6F0707 100%);padding:28px 32px;">
      <p style="margin:0;color:#FBEDDD;font-size:22px;font-weight:800;letter-spacing:-0.04em;">Cardilett</p>
      <p style="margin:6px 0 0;color:rgba(251,237,221,0.72);font-size:13px;">New enquiry from the website</p>
    </div>
    <div style="padding:32px;">
      <table style="width:100%;border-collapse:collapse;">${tableRows}</table>
      ${messageBlock}
    </div>
    <div style="padding:16px 32px;background:rgba(43,43,61,0.04);border-top:1px solid rgba(43,43,61,0.08);">
      <p style="margin:0;font-size:12px;color:rgba(43,43,61,0.5);">
        Sent from cardilett.ae — reply directly to respond to ${esc(name)}.
      </p>
    </div>
  </div>
</body>
</html>`;
}
