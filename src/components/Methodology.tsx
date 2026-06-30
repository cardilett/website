import Image from 'next/image';
import SectionCTA from '@/components/SectionCTA';

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
    <section className="method" id="methodology">
      <div className="section__head section__head--centered">
        <span className="eyebrow reveal">How We Work</span>
        <h2 className="section__title reveal">
          A disciplined path from <em>diagnosis</em> to <em>enablement</em>.
        </h2>
        <p className="section__sub reveal">
          Our project engagement methodology a six-step rhythm we tailor to advisory and retainer
          work.
        </p>
      </div>

      <div className="method__flow">
        {/* Wave connector x-coords are proportional (6 equal columns), y-coords in px matching step offsets */}
        <svg
          className="method__wave"
          viewBox="0 0 1000 290"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M 83,212 C 140,212 193,174 250,174 C 307,174 360,140 417,140 C 474,140 526,114 583,114 C 640,114 693,88 750,88 C 807,88 860,66 917,66"
            stroke="rgba(100,150,200,0.22)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {STEPS.map((step, i) => (
          <article key={step.num} className="step reveal">
            <span className="step__num">{step.num}</span>
            <div className="step__icon">
              <Image
                src={`/img/services/Mask group-${i + 1}.png`}
                alt={step.title}
                width={72}
                height={72}
                style={{ width: '100%', height: 'auto' }}
              />
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
        to match the cadence of your organisation.
      </p>

      <SectionCTA />
    </section>
  );
}
