'use client';

import { type FormEvent, useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const COMM_METHODS = ['Virtual meeting', 'Face-to-face meeting', 'Telephonic conversation'];

const SUBJECTS = [
  'HR Strategy & Operating Model',
  'Organization Design & Workforce Planning',
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

interface ConsultationFormProps {
  /** Prefix for field ids so two instances can coexist on one page. */
  idPrefix?: string;
  /** Shown as a "Close" button under the success message (used by the modal). */
  onDone?: () => void;
}

/**
 * The "book your free consultation" form fields, state, and submit logic
 * shared between the popup (ConsultationCTA) and the contact page.
 */
export default function ConsultationForm({ idPrefix = 'cc', onDone }: ConsultationFormProps) {
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

  if (done) {
    return (
      <div className="consult-success">
        <h3>Your request has been submitted successfully, and we will be in touch with you within 2 business working days.</h3>
        {reference && (
          <p className="consult-success__ref">
            Your reference number: <strong>{reference}</strong>
          </p>
        )}
        {onDone && (
          <button type="button" className="btn btn--light" onClick={onDone}>
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form className="consult-form" onSubmit={handleSubmit} noValidate>
      <div className="consult-grid">
        <div className="consult-field">
          <label htmlFor={`${idPrefix}-name`}>Name</label>
          <input
            id={`${idPrefix}-name`}
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
          <label htmlFor={`${idPrefix}-email`}>Email</label>
          <input
            id={`${idPrefix}-email`}
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
          <label htmlFor={`${idPrefix}-company`}>Company</label>
          <input
            id={`${idPrefix}-company`}
            type="text"
            autoComplete="organization"
            placeholder="Name of your company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            disabled={busy}
          />
        </div>

        <div className="consult-field">
          <label htmlFor={`${idPrefix}-phone`}>Contact number (optional)</label>
          <input
            id={`${idPrefix}-phone`}
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
          <label htmlFor={`${idPrefix}-msg`}>Brief context (optional)</label>
          <textarea
            id={`${idPrefix}-msg`}
            rows={3}
            placeholder="What outcome are you looking for?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            disabled={busy}
          />
        </div>

        <div className="consult-field consult-field--full consult-field--check">
          <input
            id={`${idPrefix}-consent`}
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            disabled={busy}
            required
          />
          <label htmlFor={`${idPrefix}-consent`}>
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
  );
}
