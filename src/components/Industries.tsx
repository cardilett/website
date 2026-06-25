import SectionCTA from '@/components/SectionCTA';

// ---------------------------------------------------------------------------
// "Who We Serve" — the twelve sectors clustered into five compact groups.
// Kept deliberately short: plain text under a small icon, no heavy boxes,
// since these are descriptive (not links).
// ---------------------------------------------------------------------------

type IconKey = 'government' | 'banking' | 'realestate' | 'telecom' | 'education';

const ICON_PATHS: Record<IconKey, string> = {
  government: 'M6 34h28M10 34V18m6 16V18m8 16V18m6 16V18M6 18l14-10 14 10',
  banking: 'M6 30h28M8 30V14h24v16M14 14V8h12v6M6 34h28',
  realestate: 'M6 34h28M8 34V14l12-8 12 8v20M14 34V22h12v12',
  telecom: 'M8 20a12 12 0 0 1 24 0M12 24a8 8 0 0 1 16 0M16 28a4 4 0 0 1 8 0M20 32v.01',
  education: 'M6 14l14-6 14 6-14 6L6 14Zm4 2v8c0 3 6 6 10 6s10-3 10-6v-8',
};

function ClusterIcon({ name }: { name: IconKey }) {
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

const CLUSTERS: Array<{ icon: IconKey; title: string; sectors: string[] }> = [
  {
    icon: 'government',
    title: 'Government & Public Sector',
    sectors: ['Government & Semi-Government', 'Federal Entities'],
  },
  {
    icon: 'banking',
    title: 'Banking & Financial Services',
    sectors: ['Banking & Finance', 'Insurance Services'],
  },
  {
    icon: 'realestate',
    title: 'Real Estate, Industry & Retail',
    sectors: ['Real Estate & Construction', 'Industrials', 'Retail & Holdings'],
  },
  {
    icon: 'telecom',
    title: 'Technology, Telecom & Healthcare',
    sectors: ['Telecom & Technology', 'Healthcare'],
  },
  {
    icon: 'education',
    title: 'Education, Hospitality & Culture',
    sectors: ['Education & Training', 'Hospitality & Tourism', 'Arts & Entertainment'],
  },
];

export default function Industries() {
  return (
    <section className="serve" data-theme="sand" id="industries">
      <div className="section__head section__head--centered">
        <span className="eyebrow reveal">Who We Serve</span>
        <h2 className="section__title reveal">Trusted across every sector that shapes the UAE.</h2>
        <p className="section__sub reveal">
          SMEs, enterprises, family businesses, and government entities — grouped by the markets we
          know best.
        </p>
      </div>

      <div className="serve__clusters">
        {CLUSTERS.map((c) => (
          <div key={c.title} className="serve__cluster reveal">
            <span className="serve__icon" aria-hidden="true">
              <ClusterIcon name={c.icon} />
            </span>
            <h4>{c.title}</h4>
            <p>{c.sectors.join(' · ')}</p>
          </div>
        ))}
      </div>

      <SectionCTA />
    </section>
  );
}
