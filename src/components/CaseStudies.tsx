type Trend = 'up' | 'down' | 'flat';

type Case = {
  tag: string;
  metricValue: string;
  metricSuffix: string;
  trend?: Trend;
  metricLabel?: string;
  title: string;
  challenge: string;
  solution: string;
};

const cases: Case[] = [
  {
    tag: 'Emiratisation',
    metricValue: '12',
    metricSuffix: '+',
    metricLabel: 'Companies',
    title: 'Workforce & Emiratisation',
    challenge: 'Meeting Emiratisation targeted quotas as per the law and regulations.',
    solution:
      'Implemented a data-driven workforce strategy that integrated Emiratisation objectives as required by law, focused on fair opportunities and skill-based hiring while maintaining operational excellence and an effective yearly budgeting plan.',
  },
  {
    tag: 'Compliance',
    metricValue: '98',
    metricSuffix: '%',
    trend: 'down',
    metricLabel: 'Dysfunctional Processes',
    title: 'HR Audit Findings',
    challenge: 'Reducing HR audit findings that were accumulated over a period of 5 years.',
    solution:
      'Developing a 3-months plan while liaising with Internal Audit and the State Audit in order to reduce the HR audit findings by ensuring Employee Information Inventory is aligned with the law, consolidated with the policies and procedures as well as the automated processes.',
  },
  {
    tag: 'Digital Transformation',
    metricValue: '76',
    metricSuffix: '%',
    trend: 'up',
    metricLabel: 'Features Utilized',
    title: 'Tech-Utilization and ROI',
    challenge:
      'Using multiple HR systems over the years with inconsistent adoption, unmeasurable data, and a lack of visibility on ROI.',
    solution:
      'Analyzed tech stack, defined the efficiency of the system utilization, ensuring the system was built on accurate data. Implemented a measurable and actionable diagnostic tool with clear milestones tied to business outcomes. Trained respective in-charge employees to maximize the utilization of their system, which led to a real ROI on AI/system data and decision-making outcomes.',
  },
  {
    tag: 'Talent Shortage',
    metricValue: '40',
    metricSuffix: '%',
    trend: 'up',
    title: 'ATS Optimization & Talent Attraction',
    metricLabel: 'Recruitment Health Score',
    challenge:
      "Applicant Tracking System (ATS) was misconfigured and poorly utilized, causing highly suitable candidates to be automatically filtered out before ever reaching the recruiter. This meant no relevant talent pool could be built, fresh graduates weren't being identified or invested in, and experienced talent wasn't being effectively attracted or retained in the pipeline.",
    solution:
      'Ensured appropriate ATS configuration, utilization, filtering, and correction of the logic search parameters. Restructuring the sourcing method to create an efficient and relevant talent pool of experienced and fresh graduate candidates by liaising with the relevant institutions and government entities in the UAE in order to build an efficient candidate pipeline while ensuring closing both ends of the talent gap at once.',
  },
];

function TrendIcon({ trend }: { trend: Trend }) {
  if (trend === 'flat') {
    return (
      <svg className="case__trend case__trend--dots" width="52" height="14" viewBox="0 0 52 14" fill="none" aria-hidden="true">
        <circle cx="7" cy="7" r="6" fill="currentColor" />
        <circle cx="26" cy="7" r="6" fill="currentColor" />
        <circle cx="45" cy="7" r="6" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg
      className="case__trend case__trend--arrow"
      width="40" height="58" viewBox="0 0 40 58" fill="none" aria-hidden="true"
      style={{ transform: trend === 'up' ? 'scaleY(-1)' : undefined }}
    >
      <path
        d="M20 5V53M20 53L6 39M20 53L34 39"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Break a multi-word label onto two lines (first word, then the rest) so the
// label box hugs its text and the arrow always sits right next to it.
function renderLabel(label: string) {
  const words = label.trim().split(/\s+/);
  if (words.length < 2) return label;
  return (
    <>
      {words[0]}
      <br />
      {words.slice(1).join(' ')}
    </>
  );
}

export default function CaseStudies() {
  return (
    <section className="cases" data-theme="sand" id="cases">
      <div className="section__head section__head--centered">
        <span className="eyebrow reveal">Case Studies</span>
        <br />
        <h2 className="section__title reveal">
          Solutions for complex cases, <em>impactful outcomes.</em>
        </h2>
        <p className="section__sub reveal">
          Snapshots from our practice. Client names withheld for confidentiality every figure is
          real.
        </p>
      </div>

      <div className="cases__grid">
        {cases.map((item) => (
          <article className="case reveal" key={item.title}>
            <span className="case__tag">{item.tag}</span>

            <div className="case__metric-row">
              <div className="case__metric">
                {item.metricValue}
                <span className={item.metricSuffix === '+' ? 'case__metric-suffix--plus' : undefined}>
                  {item.metricSuffix}
                </span>
              </div>
              {(item.trend || item.metricLabel) && (
                <div className="case__metric-aside">
                  {item.trend && <TrendIcon trend={item.trend} />}
                  {item.metricLabel && (
                    <span className="case__metric-label">{renderLabel(item.metricLabel)}</span>
                  )}
                </div>
              )}
            </div>

            <h3>{item.title}</h3>

            <div className="case__section">
              <span className="case__label case__label--challenge">Challenge:</span>
              <p>{item.challenge}</p>
            </div>

            <div className="case__section">
              <span className="case__label case__label--solution">Solution:</span>
              <p>{item.solution}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
