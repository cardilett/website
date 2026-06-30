import Link from 'next/link';

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

/**
 * Site-wide action pair: crimson "Contact us" (CTA) + gold "Explore our services".
 *
 * Dropped at the end of each major section so placement can be curated later
 * to remove it from a section, delete that section's single <SectionCTA /> line.
 */
export default function SectionCTA() {
  return (
    <div className="section-cta reveal">
      <Link href="/contact" className="btn btn--primary">
        Contact us
        <Arrow />
      </Link>
      <Link href="/services" className="btn btn--gold">
        Explore our services
      </Link>
    </div>
  );
}
