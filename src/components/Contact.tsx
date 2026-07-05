import ConsultationForm from '@/components/ConsultationForm';

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
            Book a consultation and a senior member of our team will come back within one business day. <br></br> Confidentiality assured, always.
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

        {/* ---- Right column: same form & design as "Book your free consultation" ---- */}
        <div className="contact__form reveal">
          <ConsultationForm idPrefix="c" />
        </div>
      </div>
    </section>
  );
}
