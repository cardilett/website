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

const ICONS = {
  email: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 6.5h18v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M3.5 7 12 13l8.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  office: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-6.2 7-12a7 7 0 1 0-14 0c0 5.8 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ),
  linkedin: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.5 10v6.5M7.5 7.5v.01M12 16.5V12.8c0-1.3.9-2.3 2.1-2.3 1.2 0 1.9.9 1.9 2.3v3.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  hours: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const CONTACT_ROWS = [
  {
    label: 'Email',
    value: 'connect@cardilett.ae',
    href: 'mailto:connect@cardilett.ae',
    icon: ICONS.email,
  },
  { label: 'Office', value: 'Abu Dhabi, United Arab Emirates', icon: ICONS.office },
  {
    label: 'LinkedIn',
    value: 'Cardilett HR Advisory and Consultancy',
    href: 'https://www.linkedin.com/company/cardilett/',
    ariaLabel: 'Cardilett on LinkedIn',
    icon: ICONS.linkedin,
  },
  { label: 'Hours', value: 'Mon–Fri · 08:00–16:00 UAE time', icon: ICONS.hours },
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
  const [reference, setReference] = useState('');

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

      if (json.reference) setReference(json.reference);
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
        {/* ---- Left column static info ---- */}
        <div className="contact__left">
          <span className="eyebrow reveal">Let&apos;s talk</span>
          <h2 className="section__title reveal">
            Start with a conversation. <em>Leave with a plan.</em>
          </h2>
          <p className="contact__lede reveal">
            Tell us what you&apos;re solving for. A senior member of our team will come back
            within one business day confidentiality assumed, always.
          </p>

          <div className="contact__meta reveal">
            {CONTACT_ROWS.map(({ label, value, href, ariaLabel, icon }) => (
              <div key={label} className="contact__row">
                <span className="contact__label" aria-label={label} title={label}>
                  <span className="contact__label-icon">{icon}</span>
                </span>
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

        {/* ---- Right column form ---- */}
        {/* On success the whole panel turns teal to confirm the request landed. */}
        <form
          className={`contact__form reveal${done ? ' contact__form--teal' : ''}`}
          onSubmit={handleSubmit}
          noValidate
        >
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
            <p className="contact__success contact__success--teal">
              Your request has been submitted successfully, and we will be in touch with you
              within 2 business working days.
              {reference && (
                <span className="contact__success-ref">
                  Your reference number: <strong>{reference}</strong>
                </span>
              )}
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
