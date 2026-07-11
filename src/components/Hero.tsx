import Link from 'next/link';

// Labels carry an explicit line break so every box reads as a tidy two
// lines (CSS white-space: pre-line honours the \n).
const TRUST = [
  { num: '100', suffix: '%', label: 'Emirati-owned &\nled company' },
  { num: '20', suffix: '+', label: 'Years of\nexperience' },
  { num: '10', suffix: '+', label: 'Industries served\nacross the globe' },
  { num: '15', suffix: '+', label: 'Countries labour\nlaw expertise' },
  { num: '100 to 20k', suffix: '+', label: 'Workforce-size\nmanagement' },
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
          <span className="reveal">Shaping Better Organizations,</span>
          <span className="reveal"><em>Begins Here.</em></span>
        </h1>

        <p className="hero__lede reveal">
          Partnering with government entities, organizations and employees towards overall
          enhancement, progression and prosperity in alignment with the UAE’s vision.
        </p>

        <div className="hero__actions reveal">
          <Link href="/contact" className="btn btn--primary">
            Contact us
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
