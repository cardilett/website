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
    title: 'HR Transformation & Tech Enablement',
    body: 'HRIS to digital workflows, modernising with technology that lands.',
  },
  {
    num: '02',
    title: 'HR Strategy & Operating Model',
    body: 'The blueprint aligning HR to business ambition and governance.',
  },
  {
    num: '03',
    title: 'Organization Design & Workforce Planning',
    body: 'Right-structure, right-size, right-skill for how value is created.',
  },
  {
    num: '04',
    title: 'Talent Management & Career Development',
    body: 'Succession, mobility, and growth that keep your best people invested.',
  },
  {
    num: '05',
    title: 'Employer & Employee Value Proposition',
    body: 'A value proposition people can feel, externally magnetic, internally proven.',
  },
  {
    num: '06',
    title: 'Performance Management & Analytics',
    body: 'Measurement that drives accountability and real outcomes.',
  },
  {
    num: '07',
    title: 'Retention & People Engagement',
    body: 'Evidence-led diagnostics and feedback that move the numbers.',
  },
  {
    num: '08',
    title: 'Total Rewards, ROI & Budget Modeling',
    body: 'Pay, benefits, and recognition as one benchmarked system.',
  },
  {
    num: '09',
    title: 'DEI Integrity Scheme',
    body: 'Measurable inclusion honoring Emiratisation and best practice.',
  },
  {
    num: '10',
    title: 'Culture & Wellbeing Transformation',
    body: 'Intentional cultural design: a workplace that performs and a workforce that wants to stay.',
  },
  {
    num: '11',
    title: 'Job Architecture Redesign',
    body: 'Grading, job families, and role clarity for fair pay and growth.',
  },
  {
    num: '12',
    title: 'HR Policies, Employee Relations & Compliance',
    body: 'Frameworks aligned to UAE Labour Law and MoHRE: clear, defensible.',
  },
];

interface ServicesProps {
  /** Home-page teaser: show the first six areas plus a link to the full page. */
  preview?: boolean;
}

export default function Services({ preview = false }: ServicesProps) {
  return (
    <section className="services" data-theme="sand" id="services">
      <div className="section__bg-img" aria-hidden="true">
        <img src="/img/services-bg.png" alt="" className="parallax-img" loading="lazy" decoding="async" />
      </div>

      <div className="section__head section__head--centered">
        <span className="eyebrow reveal">What We Do</span>
        <h2 className="section__title reveal">
          A Human Resources advisory and consultancy <em>bank of solutions</em>
        </h2>
        <p className="section__sub reveal">
          Twelve practice areas, delivered with the rigor of global best-practice and the nuance of a
          regional partner who knows the ground.
        </p>
      </div>

      {preview ? (
        <Link href="/services" className="services__gateway reveal">
          <div className="services__gateway-text">
            <span className="services__gateway-num">12 practice areas</span>
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
            <span className="services__gateway-num">12 practice areas</span>
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
