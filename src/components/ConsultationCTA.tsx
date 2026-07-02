'use client';

import { type FormEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const COMM_METHODS = ['Virtual meeting', 'Face-to-face meeting', 'Telephonic conversation'];

const SUBJECTS = [
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

/**
 * Section CTA for the Services crimson box only: a single centered teal
 * "Book your free consultation" button. Clicking it opens a popup with the
 * consultation request form; on submit the panel turns teal and shows the
 * confirmation message plus the reference number.
 */
export default function ConsultationCTA() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [commMethods, setCommMethods] = useState<string[]>([]);
  const [subjects, setSubjects] = useState<string[]>([]);
  const [subjectsOpen, setSubjectsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const [reference, setReference] = useState('');

  const busy = status === 'submitting';
  const done = status === 'success';

  // Close on Escape and lock background scroll while the popup is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  function toggle(list: string[], setList: (v: string[]) => void, value: string) {
    setList(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !consent) {
      setErrorMsg('Please add your name, email, and accept the consent checkbox.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          phone,
          commMethod: commMethods.join(', '),
          need: subjects.join(', '),
          message,
          consent,
          formType: 'consultation',
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? 'Something went wrong.');
      if (json.reference) setReference(json.reference);
      setStatus('success');
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      setStatus('error');
    }
  }

  return (
    <div className="consult-cta reveal">
      <button type="button" className="btn btn--teal" onClick={() => setOpen(true)}>
        Book your free consultation
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && mounted &&
        createPortal(
        <div
          className="consult-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Book your free consultation"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="consult-modal">
            <button
              type="button"
              className="consult-modal__close"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>

            {done ? (
              <div className="consult-success">
                <h3>Your request has been submitted successfully, and we will be in touch with you within 2 business working days.</h3>
                {reference && (
                  <p className="consult-success__ref">
                    Your reference number: <strong>{reference}</strong>
                  </p>
                )}
                <button type="button" className="btn btn--light" onClick={() => setOpen(false)}>
                  Close
                </button>
              </div>
            ) : (
              <form className="consult-form" onSubmit={handleSubmit} noValidate>
                <div className="consult-grid">
                  <div className="consult-field">
                    <label htmlFor="cc-name">Name</label>
                    <input
                      id="cc-name"
                      type="text"
                      autoComplete="name"
                      placeholder="First and Last Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={busy}
                      required
                    />
                  </div>

                  <div className="consult-field">
                    <label htmlFor="cc-email">Email</label>
                    <input
                      id="cc-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={busy}
                      required
                    />
                  </div>

                  <div className="consult-field">
                    <label htmlFor="cc-company">Company</label>
                    <input
                      id="cc-company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Name of your company"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      disabled={busy}
                    />
                  </div>

                  <div className="consult-field">
                    <label htmlFor="cc-phone">Contact number (optional)</label>
                    <input
                      id="cc-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+971"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      disabled={busy}
                    />
                  </div>

                  <div className="consult-field consult-field--full">
                    <span className="consult-label">Preferred communication method</span>
                    <div className="consult-checks">
                      {COMM_METHODS.map((m) => (
                        <label key={m} className="consult-check">
                          <input
                            type="checkbox"
                            checked={commMethods.includes(m)}
                            onChange={() => toggle(commMethods, setCommMethods, m)}
                            disabled={busy}
                          />
                          {m}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="consult-field consult-field--full">
                    <span className="consult-label">Subject of interest</span>
                    <div className="consult-multiselect">
                      <button
                        type="button"
                        className="consult-multiselect__toggle"
                        aria-expanded={subjectsOpen}
                        onClick={() => setSubjectsOpen((v) => !v)}
                        disabled={busy}
                      >
                        {subjects.length ? `${subjects.length} selected` : 'Select one or more…'}
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                          <path d="M3.5 5.5 7 9l3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                      {subjectsOpen && (
                        <div className="consult-multiselect__panel">
                          {SUBJECTS.map((s) => (
                            <label key={s} className="consult-check">
                              <input
                                type="checkbox"
                                checked={subjects.includes(s)}
                                onChange={() => toggle(subjects, setSubjects, s)}
                              />
                              {s}
                            </label>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="consult-field consult-field--full">
                    <label htmlFor="cc-msg">Brief context (optional)</label>
                    <textarea
                      id="cc-msg"
                      rows={3}
                      placeholder="what outcome are you looking for?"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      disabled={busy}
                    />
                  </div>

                  <div className="consult-field consult-field--full consult-field--check">
                    <input
                      id="cc-consent"
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      disabled={busy}
                      required
                    />
                    <label htmlFor="cc-consent">
                      I consent to be contacted by Cardilett regarding this enquiry.
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn--primary consult-submit" disabled={busy}>
                  {busy ? 'Sending…' : 'Submit my request'}
                </button>

                {status === 'error' && errorMsg && <p className="consult-error">{errorMsg}</p>}

                <p className="consult-declaration">
                  <strong>Declarations:</strong> We at Cardilett handle your data confidentially, we
                  do not share your data with any other party, nor do we use it in any other way
                  beside the purpose provided above.
                </p>
              </form>
            )}
          </div>
        </div>,
          document.body,
        )}
    </div>
  );
}
