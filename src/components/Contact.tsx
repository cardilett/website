'use client';

import { type FormEvent, useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const NEEDS = [
  'HR Strategy & Operating Model',
  'Organisation Design & Workforce Planning',
  'Talent & Career Development',
  'Performance Management & Analytics',
  'Total Rewards & Budget Modeling',
  'DEI Integrity Scheme',
  'Culture & Wellbeing',
  'Job Architecture',
  'Policies, Relations & Compliance',
  'Learning & Leadership',
  'HR Transformation & Tech',
  'Other / Not sure yet',
];

const CONTACT_ROWS = [
  { label: 'Email', value: 'connect@cardilett.ae', href: 'mailto:connect@cardilett.ae' },
  { label: 'Office', value: 'Abu Dhabi, United Arab Emirates' },
  {
    label: 'LinkedIn',
    value: 'Cardilett HR Advisory and Consultancy',
    href: 'https://www.linkedin.com/company/cardilett/',
    ariaLabel: 'Cardilett on LinkedIn',
  },
  { label: 'Hours', value: 'Mon–Fri · 08:00–16:00 UAE time' },
];

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [need, setNeed] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const busy = status === 'submitting';
  const done = status === 'success';

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Client-side guard before hitting the network
    if (!name.trim() || !email.trim() || !consent) {
      setErrorMsg('Please fill in your name, email, and accept the consent checkbox.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, need, message, consent }),
      });

      const json = await res.json();

      if (!res.ok) throw new Error(json.error ?? 'Something went wrong.');

      setStatus('success');
    } catch (err) {
      setErrorMsg(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      );
      setStatus('error');
    }
  }

  return (
    <section className="contact" data-theme="crimson" id="contact">
      <div className="contact__bg" aria-hidden="true">
        <img src="/img/uae-burj-khalifa.jpg" alt="" />
      </div>

      <div className="contact__grid">
        {/* ---- Left column — static info ---- */}
        <div className="contact__left">
          <span className="eyebrow reveal">Let&apos;s talk</span>
          <h2 className="section__title reveal">
            Start with a conversation. <em>Leave with a plan.</em>
          </h2>
          <p className="contact__lede reveal">
            Tell us what you&apos;re solving for. A senior member of our team will come back
            within one business day — confidentiality assumed, always.
          </p>

          <div className="contact__meta reveal">
            {CONTACT_ROWS.map(({ label, value, href, ariaLabel }) => (
              <div key={label} className="contact__row">
                <span className="contact__label">{label}</span>
                {href ? (
                  <a
                    href={href}
                    {...(href.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    {...(ariaLabel ? { 'aria-label': ariaLabel } : {})}
                  >
                    {value}
                  </a>
                ) : (
                  <span>{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ---- Right column — form ---- */}
        <form className="contact__form reveal" onSubmit={handleSubmit} noValidate>
          <div className="field">
            <label htmlFor="c-name">Name</label>
            <input
              id="c-name"
              name="name"
              type="text"
              required
              autoComplete="name"
              placeholder="Full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={busy || done}
            />
          </div>

          <div className="field">
            <label htmlFor="c-email">Email</label>
            <input
              id="c-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={busy || done}
            />
          </div>

          <div className="field">
            <label htmlFor="c-company">Company</label>
            <input
              id="c-company"
              name="company"
              type="text"
              autoComplete="organization"
              placeholder="Organisation"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              disabled={busy || done}
            />
          </div>

          <div className="field">
            <label htmlFor="c-need">What do you need?</label>
            <select
              id="c-need"
              name="need"
              value={need}
              onChange={(e) => setNeed(e.target.value)}
              disabled={busy || done}
            >
              <option value="">Select an area…</option>
              {NEEDS.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          <div className="field field--full">
            <label htmlFor="c-msg">Brief context (optional)</label>
            <textarea
              id="c-msg"
              name="message"
              rows={4}
              placeholder="What outcome are you after?"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={busy || done}
            />
          </div>

          <div className="field field--full field--check">
            <input
              id="c-consent"
              name="consent"
              type="checkbox"
              required
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              disabled={busy || done}
            />
            <label htmlFor="c-consent">
              I consent to Cardilett contacting me regarding this enquiry. We handle data
              confidentially.
            </label>
          </div>

          <button
            type="submit"
            className="btn btn--primary btn--block"
            disabled={busy || done}
          >
            {busy ? 'Sending…' : done ? 'Sent' : 'Request a Proposal'}
            {!busy && !done && (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path
                  d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>

          {done && (
            <p className="contact__success">
              Thank you. Your message is with our team — we&apos;ll respond within one business
              day.
            </p>
          )}

          {status === 'error' && errorMsg && (
            <p className="contact__error">{errorMsg}</p>
          )}
        </form>
      </div>
    </section>
  );
}
