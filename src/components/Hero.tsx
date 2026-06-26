import Link from 'next/link';

const TRUST = [
  { num: '100', suffix: '%', label: 'Emirati-owned & led' },
  { num: '13', suffix: '', label: 'Core HR service areas' },
  { num: '12', suffix: '+', label: 'Sectors served across the UAE' },
  { num: '98', suffix: '%', label: 'HR Audit findings closed' },
  { num: '300', suffix: '+', label: 'Roles re-graded' },
  { num: '2.4', suffix: '×', label: 'Engagement uplift' },
  { num: '40', suffix: '%', label: 'Time-to-decision reduced' },
];

export default function Hero() {
  return (
    <section className="hero" data-theme="hero">
      <div className="hero__bg" aria-hidden="true">
        <picture>
          <source media="(max-width: 600px)" srcSet="/img/mobile-header-bg.jpg" />
          <img
            src="/img/header-bg-web.png"
            alt=""
            fetchPriority="high"
            decoding="async"
            width={1600}
            height={900}
          />
        </picture>
      </div>

      <div className="hero__inner">
        <h1 className="hero__title">
          <span className="reveal">Shaping Better Organization</span>
          <span className="reveal">Begins Here.</span>
        </h1>

        <p className="hero__lede reveal">
          Partnering with employers, employees, and government entities to build better
          organizations — and a stronger UAE.
        </p>

        <div className="hero__actions reveal">
          <Link href="/contact" className="btn btn--primary">
            Contact Us
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link href="/services" className="btn btn--gold">
            Explore our services
          </Link>
        </div>

        <div className="hero__trust reveal" aria-hidden="false">
          {TRUST.map((t) => (
            <div key={t.label} className="hero__trust-item">
              <div className="hero__trust-num">
                {t.num}
                <span>{t.suffix}</span>
              </div>
              <div className="hero__trust-label">{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
