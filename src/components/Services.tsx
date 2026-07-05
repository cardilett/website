import Link from 'next/link';
import ConsultationCTA from '@/components/ConsultationCTA';

interface Service {
  num: string;
  title: string;
  body: string;
  featured?: boolean;
}

const SERVICES: Service[] = [
  {
    num: '01',
    title: 'Tech Enablement & ROI',
    body: 'Maximize the value of your HR systems by gaining better visibility into your systems’ performance, insights, measurable ROI, and a clear action plan.',
  },
  {
    num: '02',
    title: 'HR Transformation, Strategy & Operating Model',
    body: 'Strategy redesigned, customized in line with the company’s Balanced Scorecard, efficient operating model that complements the overall business goals.',
  },
  {
    num: '03',
    title: 'Organization Design & Workforce Planning',
    body: 'Building organizations that are based on skills, capabilities, and future workforce needs, including succession planning, upskilling, retention, and talent mobility.',
  },
  {
    num: '04',
    title: 'Talent Management & Career Development',
    body: 'Clear paths of growth for both organizations and employees, covering the employee progression lifecycle starting from pre-onboarding, leadership ladder, and retention program.',
  },
  {
    num: '05',
    title: 'Employer & Employee Value Proposition',
    body: 'A holistic redesign of where the organization places itself in the market from a brand value perspective, and the full stack of what employees bring to the organization.',
  },
  {
    num: '06',
    title: 'Performance Management, People Engagement & Analytics',
    body: 'Performance and engagement records of at least 3 years, tracked and analyzed to turn data into an effective, actionable plan, accountabilities, and measurable outcomes.',
  },
  {
    num: '07',
    title: 'Cultural Transformation & DEI Integrity Scheme',
    body: 'Collaborate with organizations to achieve their desired culture by applying customized alterations aligned with long-term goals, with a skill-based, fair opportunity scheme for all.',
  },
  {
    num: '08',
    title: 'Total Rewards & Job Architecture Design',
    body: 'Revamping your total rewards program that includes compensation, benefits, and recognition schemes. Architecting job frameworks that organize all jobs into a consistent structure.',
  },
  {
    num: '09',
    title: 'HR Governance & Compliance',
    body: 'Governing the HR framework of policies, right decisions, oversight, and control, all while ensuring HR compliance is aligned with and complies with employment legislation and regulatory obligations in the UAE.',
  },
  // {
  //   num: '10',
  //   title: 'Culture & Wellbeing Transformation',
  //   body: 'Intentional cultural design: a workplace that performs and a workforce that wants to stay.',
  // },
  // {
  //   num: '11',
  //   title: 'Job Architecture Redesign',
  //   body: 'Grading, job families, and role clarity for fair pay and growth.',
  // },
  // {
  //   num: '12',
  //   title: 'HR Policies, Employee Relations & Compliance',
  //   body: 'Frameworks aligned to UAE Labour Law and MoHRE: clear, defensible.',
  // },
];

interface ServicesProps {
  /** Home-page teaser: show the first six areas plus a link to the full page. */
  preview?: boolean;
}

export default function Services({ preview = false }: ServicesProps) {
  return (
    <section
      className={`services${preview ? '' : ' services--full'}`}
      data-theme="sand"
      id="services"
    >
      {!preview && (
        <div className="section__bg-img" aria-hidden="true">
          <img src="/img/services-bg.png" alt="" className="parallax-img" loading="lazy" decoding="async" />
        </div>
      )}

      <div className="section__head section__head--centered">
        <span className="eyebrow reveal">What We Do</span>
        <h2 className="section__title reveal">
          A Human Resources advisory and consultancy <em>bank of solutions</em>
        </h2>
        <p className="section__sub reveal">
          Nine practice areas, delivered with the rigor of global best practice and the nuance of a
          regional partner who knows the ground.
        </p>
      </div>

      {preview ? (
        <Link href="/services" className="services__gateway reveal">
          <div className="services__gateway-text">
            <span className="services__gateway-num">9 practice areas</span>
            <h3>Explore our complete HR advisory and consultancy stack</h3>
            <p>
              Cardilett provides integrated advisory solutions, from specialized consulting
              engagements to large-scale transformation programs which enable you to realize
              strategic objectives and maintain competitive advantage. We serve as your dedicated
              strategic partner throughout your organizational growth journey.
            </p>
          </div>
          <span className="services__gateway-cta">
            Explore how we can help you
            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path
                d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Link>
      ) : (
        <>
          <div className="services__intro reveal">
            <span className="services__gateway-num">9 practice areas</span>
            <h3>Explore our complete HR advisory and consultancy stack</h3>
            <p>
              Cardilett provides integrated advisory solutions, from specialized consulting
              engagements to large-scale transformation programs which enable you to realize
              strategic objectives and maintain competitive advantage. We serve as your dedicated
              strategic partner throughout your organizational growth journey.
            </p>
          </div>

          <div className="services__grid">
            {SERVICES.map((s) => (
              <article key={s.num} className="service reveal">
                <div className="service__num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </>
      )}

      {/* Under the crimson box (this section only): a single centered teal CTA
          that opens the consultation request popup. */}
      <ConsultationCTA />
    </section>
  );
}
