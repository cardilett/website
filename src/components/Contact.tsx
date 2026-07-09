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
  phone: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 3.5h10a1.5 1.5 0 0 1 1.5 1.5v14a1.5 1.5 0 0 1-1.5 1.5H7a1.5 1.5 0 0 1-1.5-1.5V5A1.5 1.5 0 0 1 7 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M10.5 17.5h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  ),
  whatsapp: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.5a8.5 8.5 0 0 0-7.3 12.8L3.5 20.5l4.4-1.1A8.5 8.5 0 1 0 12 3.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9 8.6c.2-.5.4-.5.7-.5h.5c.2 0 .4 0 .6.5l.7 1.6c.1.2 0 .4-.1.5l-.5.6c-.1.1-.2.3 0 .6.3.5.8 1.1 1.4 1.5.5.4.9.5 1.1.6.2 0 .4 0 .5-.1l.6-.7c.2-.2.4-.1.6 0l1.5.8c.3.1.4.3.4.4 0 .6-.5 1.4-.9 1.6-.4.2-1 .4-2.6-.2-2-.8-3.4-2.7-3.9-3.4-.5-.7-1-1.6-1-2.5 0-.9.5-1.4.7-1.6Z"
        fill="currentColor"
      />
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
  {
    label: 'Phone',
    value: '+971 50 765 7311',
    href: 'tel:+971507657311',
    icon: ICONS.phone,
  },
  {
    label: 'WhatsApp',
    value: 'Cardilett WhatsApp',
    href: 'https://wa.me/971507657311',
    ariaLabel: 'Message Cardilett on WhatsApp',
    icon: ICONS.whatsapp,
  },
  {
    label: 'LinkedIn',
    value: 'Cardilett LinkedIn',
    href: 'https://www.linkedin.com/company/cardilett/',
    ariaLabel: 'Cardilett on LinkedIn',
    icon: ICONS.linkedin,
  },
  { label: 'Office', value: 'Office 12-49, Mohamed Bin Zayed City, Onwani: 20602, Abu Dhabi – UAE', icon: ICONS.office },
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
          <br />
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
