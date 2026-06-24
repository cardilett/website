import { type ReactNode } from 'react';
import SectionCTA from '@/components/SectionCTA';

interface Step {
  key: string;
  title: string;
  items: string[];
  /** Icon that visually echoes the step's title. */
  icon: ReactNode;
}

const STEPS: Step[] = [
  {
    key: 'diagnose',
    title: 'Diagnose',
    items: [
      'Initial consultation & needs analysis',
      'HR audit',
      'Stakeholder interviews & surveys',
      'SWOT analysis',
    ],
    icon: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M21 21l-5.3-5.3"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    key: 'design',
    title: 'Design',
    items: [
      'Align with business strategy',
      'Develop specific interventions',
      'Create actionable frameworks',
      'Piloting',
    ],
    icon: (
      <path
        d="M14.5 5.5l4 4M4.5 20l1-4L16 5.5a2.1 2.1 0 0 1 3 3L8.5 19l-4 1Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    key: 'discuss',
    title: 'Discuss',
    items: ['Present findings', 'Define scope & deliverables', 'Value-based pricing'],
    icon: (
      <>
        <path
          d="M20 11.4a7.4 7.4 0 0 1-10.8 6.6L4.5 19.4l1.3-4.1A7.4 7.4 0 1 1 20 11.4Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M9 10.4h6M9 13.4h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </>
    ),
  },
  {
    key: 'implement',
    title: 'Implement',
    items: ['Action planning', 'Change management strategy', 'System integration'],
    icon: (
      <>
        <circle cx="12" cy="12" r="3.1" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M19.4 13a1.7 1.7 0 0 0 .34 1.87l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.7 1.7 0 0 0-2.87 1.2V21a2 2 0 1 1-4 0v-.07a1.7 1.7 0 0 0-2.87-1.2l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.7 1.7 0 0 0 4.6 13H4a2 2 0 1 1 0-4h.07a1.7 1.7 0 0 0 1.2-2.87l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.7 1.7 0 0 0 11 4.6V4a2 2 0 1 1 4 0v.07a1.7 1.7 0 0 0 2.87 1.2l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.7 1.7 0 0 0 19.4 11H20a2 2 0 1 1 0 4h-.07Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  {
    key: 'measure',
    title: 'Measure',
    items: ['Monitor KPIs', 'Feedback loops', 'Continuous improvement'],
    icon: (
      <path
        d="M4 20h16M7.5 20v-5.5M12 20v-9.5M16.5 20v-4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    key: 'enable',
    title: 'Enable',
    items: ['Provide clear client guidelines', 'Run training sessions', 'Handover & sustain'],
    icon: (
      <>
        <path
          d="M12 4 2.8 9 12 14l9.2-5L12 4Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M6.4 11v4.2c0 1.6 2.5 2.8 5.6 2.8s5.6-1.2 5.6-2.8V11"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
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
          <article key={step.key} className="step reveal">
            <div className="step__head">
              <span className="step__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  {step.icon}
                </svg>
              </span>
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

      <SectionCTA />
    </section>
  );
}
