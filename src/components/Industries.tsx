// ---------------------------------------------------------------------------
// "Who We Serve" eight sectors as simple icon + label cards.
// ---------------------------------------------------------------------------

type IconKey =
  | 'government'
  | 'banking'
  | 'realestate'
  | 'telecom'
  | 'family'
  | 'accounting'
  | 'advisory'
  | 'legal';

const ICON_PATHS: Record<IconKey, string> = {
  government: 'M6 34h28M10 34V18m6 16V18m8 16V18m6 16V18M6 18l14-10 14 10',
  banking: 'M8 18h24v14H8V18Z M16 18v-3a4 4 0 0 1 4-4 4 4 0 0 1 4 4v3 M8 24h24',
  realestate: 'M6 34h28M8 34V14l12-8 12 8v20M14 34V22h12v12',
  telecom: 'M8 20a12 12 0 0 1 24 0M12 24a8 8 0 0 1 16 0M16 28a4 4 0 0 1 8 0M20 32v.01',
  family:
    'M17 13a3 3 0 1 1 -6 0 3 3 0 0 1 6 0 M6 34v-3a8 8 0 0 1 16 0v3 M29.6 15a2.6 2.6 0 1 1 -5.2 0 2.6 2.6 0 0 1 5.2 0 M20 34v-2.5a7 7 0 0 1 14 0v2.5',
  accounting:
    'M10 6h20v28H10V6Z M13 9h14v6H13V9Z M15 20h.01M20 20h.01M25 20h.01M15 25h.01M20 25h.01M25 25h.01M15 30h.01M20 30h.01M25 30h.01',
  advisory: 'M34 20a14 14 0 1 1 -28 0 14 14 0 0 1 28 0 M20 9l4 11-4 11-4-11 4-11Z',
  legal:
    'M20 8v24 M14 34h12 M10 12h20 M12 12v4 M8 16a4 4 0 0 0 8 0 M28 12v4 M24 16a4 4 0 0 0 8 0 M20 7h.01',
};

function SectorIcon({ name }: { name: IconKey }) {
  return (
    <svg viewBox="0 0 40 40" fill="none">
      <path
        d={ICON_PATHS[name]}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SECTORS: Array<{ icon: IconKey; title: string }> = [
  { icon: 'government', title: 'Government Entities, Investment and Development Funds' },
  { icon: 'banking', title: 'Banking, Insurance & Financial Services' },
  { icon: 'realestate', title: 'Real Estate, Construction & Retail' },
  { icon: 'telecom', title: 'Technology and Telecom' },
  { icon: 'family', title: 'Family-Owned Enterprises' },
  { icon: 'accounting', title: 'Accounting, Auditing, Tax & VAT' },
  { icon: 'advisory', title: 'Professional Advisory' },
  { icon: 'legal', title: 'Law and Legal Services' },
];

export default function Industries() {
  return (
    <section className="serve" data-theme="sand" id="industries">
      <div className="section__head section__head--centered">
        <span className="eyebrow reveal">Who We Serve</span>
        <br />
        <h2 className="section__title reveal">
          Trusted across every sector that <em>shapes the UAE.</em>
        </h2>
      </div>

      <div className="serve__grid">
        {SECTORS.map((s) => (
          <div key={s.title} className="serve__card reveal">
            <span className="serve__icon" aria-hidden="true">
              <SectorIcon name={s.icon} />
            </span>
            <span className="serve__dash" aria-hidden="true" />
            <h4>{s.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
