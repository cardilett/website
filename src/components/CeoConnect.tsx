'use client';

import { useState } from 'react';

/**
 * CEO-section CTA (Team section only). A single centered "Connect with our CEO"
 * button; clicking it reveals the CEO's direct contact methods: email, mobile,
 * WhatsApp and personal LinkedIn. Replaces the default
 * SectionCTA for this section only every other section keeps its usual pair.
 */
export default function CeoConnect() {
  const [open, setOpen] = useState(false);

  return (
    <div className="ceo-connect reveal">
      <button
        type="button"
        className="btn btn--primary"
        aria-expanded={open}
        aria-controls="ceo-connect-details"
        onClick={() => setOpen((v) => !v)}
      >
        Connect with our CEO
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          aria-hidden="true"
          style={{ transform: open ? 'rotate(90deg)' : 'none', transition: 'transform .25s ease' }}
        >
          <path
            d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {open && (
        <div className="ceo-connect__details" id="ceo-connect-details">
          <a className="ceo-connect__link ceo-connect__link--email" href="mailto:hayat@cardilett.ae">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M3 6.5h18v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M3.5 7 12 13l8.5-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <u>hayat@cardilett.ae</u>
          </a>

          <a className="ceo-connect__link ceo-connect__link--phone" href="tel:+971547472849" aria-label="Call our CEO">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 3.5h10a1.5 1.5 0 0 1 1.5 1.5v14a1.5 1.5 0 0 1-1.5 1.5H7a1.5 1.5 0 0 1-1.5-1.5V5A1.5 1.5 0 0 1 7 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M10.5 17.5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            +971 54 747 2849
          </a>

          <a
            className="ceo-connect__link ceo-connect__link--whatsapp"
            href="https://wa.me/971547472849"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Message our CEO on WhatsApp"
            title="WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.4-1.1A8.5 8.5 0 1 0 12 3.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              <path d="M9 8.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.7 1.6c.1.2 0 .4-.1.5l-.5.6c-.1.1-.2.3 0 .6.3.5.8 1.1 1.4 1.5.5.4.9.5 1.1.6.2 0 .4 0 .5-.1l.6-.7c.2-.2.4-.1.6 0l1.5.8c.3.1.4.3.4.4 0 .6-.5 1.4-.9 1.6-.4.2-1 .4-2.6-.2-2-.8-3.4-2.7-3.9-3.4-.5-.7-1-1.6-1-2.5 0-.9.5-1.4.7-1.6Z" fill="currentColor" />
            </svg>
            WhatsApp
          </a>

          <a
            className="ceo-connect__link ceo-connect__link--linkedin"
            href="https://www.linkedin.com/in/hayat-al-hosani-021b9329/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Our CEO on LinkedIn"
            title="LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
              <path d="M7.5 10v6.5M7.5 7.5v.01M12 16.5V12.8c0-1.3.9-2.3 2.1-2.3 1.2 0 1.9.9 1.9 2.3v3.7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            LinkedIn
          </a>
        </div>
      )}
    </div>
  );
}
