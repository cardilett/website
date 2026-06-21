// ---------------------------------------------------------------------------
// Icon paths keyed by industry slug. All icons share the same viewBox (40×40)
// and stroke attributes, so IndustryIcon handles those once.
// ---------------------------------------------------------------------------

type IconKey =
  | 'government'
  | 'federal'
  | 'banking'
  | 'insurance'
  | 'realestate'
  | 'industrials'
  | 'retail'
  | 'telecom'
  | 'healthcare'
  | 'hospitality'
  | 'education'
  | 'arts';

const ICON_PATHS: Record<IconKey, string> = {
  government:
    'M6 34h28M10 34V18m6 16V18m8 16V18m6 16V18M6 18l14-10 14 10',
  federal:
    'M8 34h24M12 34V14l8-6 8 6v20M16 22h8M16 28h8',
  banking:
    'M6 30h28M8 30V14h24v16M14 14V8h12v6M6 34h28',
  insurance:
    'M20 34S8 26 8 16a8 8 0 0 1 12-7 8 8 0 0 1 12 7c0 10-12 18-12 18Z',
  realestate:
    'M6 34h28M8 34V14l12-8 12 8v20M14 34V22h12v12',
  industrials:
    'M6 28h28M10 28V14h20v14M14 14V8h12v6M6 34h28',
  retail:
    'M8 14h24l-2 18H10L8 14Zm4 0V10a8 8 0 0 1 16 0v4',
  telecom:
    'M8 20a12 12 0 0 1 24 0M12 24a8 8 0 0 1 16 0M16 28a4 4 0 0 1 8 0M20 32v.01',
  healthcare:
    'M20 34S8 26 8 16a8 8 0 0 1 12-7 8 8 0 0 1 12 7c0 10-12 18-12 18ZM20 14v10M15 19h10',
  hospitality:
    'M6 34h28M10 34V18h20v16M14 18V10l6-4 6 4v8M18 26h4',
  education:
    'M6 14l14-6 14 6-14 6L6 14Zm4 2v8c0 3 6 6 10 6s10-3 10-6v-8',
  arts:
    'M8 32L32 8M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM28 32a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z',
};

function IndustryIcon({ name }: { name: IconKey }) {
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

// ---------------------------------------------------------------------------

const INDUSTRIES: Array<{ icon: IconKey; label: string }> = [
  { icon: 'government', label: 'Government & Semi-Government' },
  { icon: 'federal', label: 'Federal Entities' },
  { icon: 'banking', label: 'Banking & Finance' },
  { icon: 'insurance', label: 'Insurance Services' },
  { icon: 'realestate', label: 'Real Estate & Construction' },
  { icon: 'industrials', label: 'Industrials' },
  { icon: 'retail', label: 'Retail & Holdings' },
  { icon: 'telecom', label: 'Telecom & Technology' },
  { icon: 'healthcare', label: 'Healthcare' },
  { icon: 'hospitality', label: 'Hospitality & Tourism' },
  { icon: 'education', label: 'Education & Training' },
  { icon: 'arts', label: 'Arts & Entertainment' },
];

export default function Industries() {
  return (
    <section className="industries" data-theme="sand" id="industries">
      <div className="section__head">
        <span className="eyebrow reveal">Who We Serve</span>
        <h2 className="section__title reveal">
          SMEs, enterprises, and family businesses — across every sector that matters.
        </h2>
      </div>

      <div className="industries__grid">
        {INDUSTRIES.map(({ icon, label }) => (
          <div key={icon} className="ind reveal">
            <div className="ind__icon" aria-hidden="true">
              <IndustryIcon name={icon} />
            </div>
            <h4>{label}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
