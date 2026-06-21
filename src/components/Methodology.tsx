interface Step {
  num: string;
  title: string;
  items: string[];
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'Diagnose',
    items: [
      'Initial consultation & needs analysis',
      'HR audit',
      'Stakeholder interviews & surveys',
      'SWOT analysis',
    ],
  },
  {
    num: '02',
    title: 'Design',
    items: [
      'Align with business strategy',
      'Develop specific interventions',
      'Create actionable frameworks',
      'Piloting',
    ],
  },
  {
    num: '03',
    title: 'Discuss',
    items: ['Present findings', 'Define scope & deliverables', 'Value-based pricing'],
  },
  {
    num: '04',
    title: 'Implement',
    items: ['Action planning', 'Change management strategy', 'System integration'],
  },
  {
    num: '05',
    title: 'Measure',
    items: ['Monitor KPIs', 'Feedback loops', 'Continuous improvement'],
  },
  {
    num: '06',
    title: 'Enable',
    items: ['Provide clear client guidelines', 'Run training sessions', 'Handover & sustain'],
  },
];

export default function Methodology() {
  return (
    <section className="method" data-theme="skylight" id="methodology">
      <div className="section__head">
        <span className="eyebrow reveal">How We Work</span>
        <h2 className="section__title reveal">
          A disciplined path from <em>diagnosis</em> to <em>enablement</em>.
        </h2>
        <p className="section__sub reveal">
          Our project engagement methodology — a six-step rhythm we tailor to advisory and retainer
          work.
        </p>
      </div>

      <div className="method__flow">
        <div className="method__line" aria-hidden="true" />

        {STEPS.map((step) => (
          <article key={step.num} className="step reveal">
            <div className="step__head">
              <span className="step__num">{step.num}</span>
              <h3>{step.title}</h3>
            </div>
            <ul>
              {step.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <p className="method__note reveal">
        This flow reflects our project-based engagement. Advisory and retainer models are tailored
        to match the cadence of your organisation.
      </p>

      <div className="method__banner reveal" aria-hidden="true">
        <img src="/img/team-strategy.jpg" alt="" />
        <div className="method__banner-overlay">
          <span className="eyebrow">Evidence-led</span>
          <p>
            Every intervention begins with a diagnosis — every hand-off ends with capability your
            team owns.
          </p>
        </div>
      </div>
    </section>
  );
}
