'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import ConsultationForm from '@/components/ConsultationForm';

/**
 * Section CTA for the Services crimson box only: a single centered teal
 * "Book your free consultation" button. Clicking it opens a popup with the
 * consultation request form (shared with the contact page via ConsultationForm).
 */
export default function ConsultationCTA() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

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

            <ConsultationForm idPrefix="cc" onDone={() => setOpen(false)} />
          </div>
        </div>,
          document.body,
        )}
    </div>
  );
}
