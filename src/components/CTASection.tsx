import Link from 'next/link';
import { type ReactNode } from 'react';

interface Props {
  eyebrow?: string;
  title?: ReactNode;
  sub?: string;
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function CTASection({
  eyebrow = "Let's talk",
  title = (
    <>
      Ready to make HR your <em>advantage?</em>
    </>
  ),
  sub = 'Book a consultation and a senior member of our team will come back within one business day — confidentiality assumed, always.',
}: Props) {
  return (
    <section className="cta" data-theme="crimson">
      <div className="cta__inner">
        <span className="eyebrow reveal">{eyebrow}</span>
        <h2 className="cta__title reveal">{title}</h2>
        <p className="cta__sub reveal">{sub}</p>
        <div className="cta__actions reveal">
          <Link href="/contact" className="btn btn--light">
            Contact Us
            <Arrow />
          </Link>
          <Link href="/services" className="btn btn--gold">
            Explore our services
          </Link>
        </div>
      </div>
    </section>
  );
}
