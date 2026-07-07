import Image from 'next/image';
import SectionCTA from '@/components/SectionCTA';

interface Step {
  num: string;
  title: string;
  items: string[];
  icon: string;
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
    icon: '/img/methodology/diagnose.png',
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
    icon: '/img/methodology/design.png',
  },
  {
    num: '03',
    title: 'Discuss',
    items: ['Present findings', 'Define scope & deliverables', 'Value-based pricing'],
    icon: '/img/methodology/discuss.png',
  },
  {
    num: '04',
    title: 'Implement',
    items: ['Action planning', 'Change management strategy', 'System integration'],
    icon: '/img/methodology/implement.png',
  },
  {
    num: '05',
    title: 'Measure',
    items: ['Monitor KPIs', 'Feedback loops', 'Continuous improvement'],
    icon: '/img/methodology/measure.png',
  },
  {
    num: '06',
    title: 'Enable',
    items: ['Provide clear client guidelines', 'Run training sessions', 'Handover & sustain'],
    icon: '/img/methodology/enable.png',
  },
];

export default function Methodology() {
  return (
    <section className="method" id="methodology">
      <div className="method__bg" aria-hidden="true">
        <Image
          src="/img/methodology/dock-bg.png"
          alt=""
          width={612}
          height={479}
          sizes="100vw"
        />
      </div>

      <div className="section__head section__head--centered">
        <span className="eyebrow reveal">How We Work</span>
        <h2 className="section__title reveal">
          A disciplined path from <em>diagnosis to enablement.</em>
        </h2>
      </div>

      <div className="method__flow">
        {/* Stepped dashed connector. x-coords proportional across 6 equal columns; y in px matches step offsets. */}
        <svg
          className="method__wave"
          viewBox="0 0 1000 420"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M -27,390 V 300 H 113 V 252 H 280 V 204 H 446 V 156 H 613 V 108 H 780 V 60 H 863 H 1000"
            stroke="#4C9C9A"
            strokeOpacity="0.95"
            strokeWidth="5"
            strokeDasharray="5 11"
            fill="none"
          />
        </svg>

        <div className="method__start" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none">
            <path
              d="M12 19V5M12 5l-5 5M12 5l5 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {STEPS.map((step) => (
          <article key={step.num} className="step reveal">
            <span className="step__num">{step.num}</span>
            <div className="step__icon">
              <Image src={step.icon} alt="" fill />
            </div>
            <div className="step__body">
              <h3>{step.title}</h3>
              <ul>
                {step.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      <p className="method__note reveal">
        This flow reflects our project-based engagement. Advisory and retainer models are tailored
        to match the cadence of your organization.
      </p>

      <SectionCTA />
    </section>
  );
}
