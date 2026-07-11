import Link from 'next/link';

const EXPLORE = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'Who We Are' },
  { href: '/services', label: 'What We Do' },
  { href: '/work', label: 'How We Did' },
  { href: '/contact', label: 'Contact' },
];

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="foot" data-theme="indigo-deep">
      <div className="foot__top">
        <div className="foot__brand">
          <Link href="/" className="foot__mark" aria-label="Cardilett home">
            <img src="/img/logo-combined.png" alt="Cardilett" className="foot__logo" />
          </Link>
          <p>Shaping Better Organization, Begins Here.</p>
          <br></br>
          <p className="foot__fine">
            A government-enabled, Emirati-led HR consultancy with global expertise in a regional context.
          </p>
        </div>

        <div className="foot__cols">
          <div className="foot__col">
            <h5>Explore</h5>
            <ul>
              {EXPLORE.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="foot__col">
            <h5>Connect</h5>
            <ul>
              <li>
                <a href="mailto:connect@cardilett.ae">connect@cardilett.ae</a>
              </li>
              <li>
                <a href="tel:+971507657311">+971 50 765 7311</a>
              </li>
              <li>
                <a
                  href="https://wa.me/971507657311"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Message Cardilett on WhatsApp"
                >
                  Cardilett WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/cardilett/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Cardilett on LinkedIn"
                >
                  Cardilett LinkedIn
                </a>
              </li>
              <li>Office 12-49, Mohamed Bin Zayed City, Onwani: 20602, Abu Dhabi – UAE</li>
              <li>Mon-Fri · 08:00–16:00 UAE time</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="foot__bottom">
        <span>© {YEAR} Cardilett HR Advisory and Consultancy. All rights reserved.</span>
        <Link href="/privacy-policy">Privacy Policy</Link>
        <span>100% Emirati-Owned & Led Company  · Abu Dhabi, UAE</span>
      </div>
    </footer>
  );
}
