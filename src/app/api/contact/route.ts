import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { getDbPool } from '@/lib/db';

interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  need?: string;
  message?: string;
  consent: boolean;
  /** Optional fields from the consultation popup. */
  phone?: string;
  commMethod?: string;
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const {
    name,
    email,
    company = '',
    need = '',
    message = '',
    consent,
    phone = '',
    commMethod = '',
  } = body;

  // Server-side validation mirrors the client checks
  if (!name?.trim() || !email?.trim()) {
    return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
  }

  if (!consent) {
    return NextResponse.json({ error: 'Consent is required.' }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  // Reference number returned to the requester and echoed in both emails.
  const reference = generateReference();

  try {
    const pool = getDbPool();
    await pool.execute(
      'INSERT INTO contact_submissions (name, email, company, need, message, consent) VALUES (?, ?, ?, ?, ?, ?)',
      [name, email, company, need, message, consent ? 1 : 0]
    );
  } catch (err) {
    console.error('[contact] Database insert failed:', err);
    return NextResponse.json(
      { error: 'Failed to save your message. Please try again.' },
      { status: 500 }
    );
  }

  // The submission is safely stored a failure here shouldn't fail the request.
  try {
    await sendNotificationEmail({ name, email, company, need, message, reference, phone, commMethod });
  } catch (err) {
    console.error('[contact] Notification email failed:', err);
  }

  // Auto-reply to the requester with their reference number. Best-effort.
  try {
    await sendConfirmationEmail({ name, email, need, message, reference, commMethod });
  } catch (err) {
    console.error('[contact] Confirmation email failed:', err);
  }

  return NextResponse.json({ success: true, reference });
}

// Short, human-readable reference, e.g. "CARD-LQ3F8K-7421".
function generateReference(): string {
  const stamp = Date.now().toString(36).toUpperCase().slice(-6);
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `CARD-${stamp}-${rand}`;
}

// ---------------------------------------------------------------------------
// Notification email (Hostinger SMTP)
// ---------------------------------------------------------------------------

function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? 'smtp.hostinger.com',
    port: process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465,
    secure: process.env.SMTP_SECURE !== 'false',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

async function sendNotificationEmail(fields: {
  name: string;
  email: string;
  company: string;
  need: string;
  message: string;
  reference: string;
  phone?: string;
  commMethod?: string;
}) {
  const { name, email, company, need, message, reference, phone = '', commMethod = '' } = fields;

  await createTransporter().sendMail({
    from: process.env.SMTP_FROM ?? 'Cardilett <contact@cardilett.com>',
    to: process.env.CONTACT_TO ?? 'connect@cardilett.ae',
    replyTo: email,
    subject: `New enquiry ${reference} ${name}${company ? ` · ${company}` : ''}`,
    html: buildEmailHtml({ name, email, company, need, message, reference, phone, commMethod }),
  });
}

// Auto-reply to the requester. Per spec it carries only their name, the subject
// of interest, their brief context (if provided) and the reference number
// nothing else (no mobile number, no company name).
async function sendConfirmationEmail(fields: {
  name: string;
  email: string;
  need: string;
  message: string;
  reference: string;
  commMethod?: string;
}) {
  const { name, email, need, message, reference, commMethod = '' } = fields;

  await createTransporter().sendMail({
    from: process.env.SMTP_FROM ?? 'Cardilett <contact@cardilett.com>',
    to: email,
    subject: `We have received your request ${reference}`,
    html: buildConfirmationHtml({ name, need, message, reference, commMethod }),
  });
}

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
  reference: string;
  phone?: string;
  commMethod?: string;
}) {
  const { name, email, company, need, message, reference, phone = '', commMethod = '' } = fields;

  const rows: [string, string][] = [
    ['Reference', esc(reference)],
    ['Name', esc(name)],
    ['Email', `<a href="mailto:${esc(email)}" style="color:#6F0707;text-decoration:none;">${esc(email)}</a>`],
    ...(company ? [['Company', esc(company)] as [string, string]] : []),
    ...(phone ? [['Contact number', esc(phone)] as [string, string]] : []),
    ...(commMethod ? [['Preferred contact', esc(commMethod)] as [string, string]] : []),
    ...(need ? [['Subject of interest', esc(need)] as [string, string]] : []),
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
        Sent from cardilett.ae reply directly to respond to ${esc(name)}.
      </p>
    </div>
  </div>
</body>
</html>`;
}

// Requester-facing auto-reply. Teal brand band, reference number, and only the
// fields the spec allows: name, subject of interest, and brief context.
function buildConfirmationHtml(fields: {
  name: string;
  need: string;
  message: string;
  reference: string;
  commMethod?: string;
}) {
  const { name, need, message, reference, commMethod = '' } = fields;

  const rows: [string, string][] = [
    ['Reference number', esc(reference)],
    ...(need ? [['Subject of interest', esc(need)] as [string, string]] : []),
    ...(commMethod ? [['Preferred communication method', esc(commMethod)] as [string, string]] : []),
  ];

  const tableRows = rows
    .map(
      ([label, value]) => `
      <tr>
        <td style="padding:12px 0;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:rgba(43,43,61,0.5);width:160px;vertical-align:top;border-bottom:1px solid rgba(43,43,61,0.08);">${label}</td>
        <td style="padding:12px 0;font-size:15px;color:#2B2B3D;border-bottom:1px solid rgba(43,43,61,0.08);">${value}</td>
      </tr>`
    )
    .join('');

  const contextBlock = message
    ? `<div style="margin-top:24px;padding:20px;background:rgba(43,43,61,0.04);border-radius:8px;border-left:3px solid #3A807F;">
        <p style="margin:0 0 8px;font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:rgba(43,43,61,0.5);">Your brief context</p>
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
    <div style="background:linear-gradient(135deg,#4C9C9A 0%,#3A807F 100%);padding:28px 32px;">
      <p style="margin:0;color:#FFFFFF;font-size:22px;font-weight:800;letter-spacing:-0.04em;">Cardilett</p>
      <p style="margin:6px 0 0;color:rgba(255,255,255,0.82);font-size:13px;">Your request has been received</p>
    </div>
    <div style="padding:32px;">
      <p style="margin:0 0 20px;font-size:15px;color:#2B2B3D;line-height:1.6;">
        Dear ${esc(name)}, thank you for reaching out. Your request has been submitted
        successfully, and we will be in touch with you within 2 business working days.
      </p>
      <table style="width:100%;border-collapse:collapse;">${tableRows}</table>
      ${contextBlock}
    </div>
    <div style="padding:16px 32px;background:rgba(43,43,61,0.04);border-top:1px solid rgba(43,43,61,0.08);">
      <p style="margin:0;font-size:12px;color:rgba(43,43,61,0.5);">
        Please quote your reference number in any follow-up. Cardilett HR Advisory and Consultancy.
      </p>
    </div>
  </div>
</body>
</html>`;
}
