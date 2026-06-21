import Link from 'next/link';

interface Service {
  num: string;
  title: string;
  body: string;
  featured?: boolean;
  badge?: string;
}

const SERVICES: Service[] = [
  {
    num: '01',
    title: 'HR Transformation & Tech Enablement',
    body: 'From HRIS selection to digital workflows — modernising the function with technology that actually lands.',
    featured: true,
    badge: 'Premium',
  },
  {
    num: '02',
    title: 'HR Strategy & Operating Model',
    body: 'Architect the blueprint — aligning your HR function to business ambition, governance, and market realities.',
  },
  {
    num: '03',
    title: 'Organization Design & Workforce Planning',
    body: 'Right-structure, right-size, right-skill — built for how your organisation actually creates value today and tomorrow.',
  },
  {
    num: '04',
    title: 'Talent Management & Career Development',
    body: 'End-to-end talent architecture: succession, mobility, and growth pathways that keep your best people invested.',
  },
  {
    num: '05',
    title: 'Employer & Employee Value Proposition',
    body: 'A value proposition people can feel — from first contact to lasting tenure, externally magnetic, internally proven.',
  },
  {
    num: '06',
    title: 'Performance Management & Analytics',
    body: 'Measurement systems that drive accountability, objectivity, and outcomes — not just annual conversations.',
  },
  {
    num: '07',
    title: 'Retention & People Engagement',
    body: 'Engagement programs rooted in evidence — diagnostics, interventions, and feedback loops that move the numbers.',
  },
  {
    num: '08',
    title: 'Total Rewards, ROI & Budget Modeling',
    body: 'Pay, benefits, recognition — designed as a coherent system, benchmarked locally, justified to the board.',
  },
  {
    num: '09',
    title: 'DEI Integrity Scheme',
    body: 'Diversity, Equity & Inclusion with measurable outcomes — honoring Emiratisation priorities and global best practice.',
  },
  {
    num: '10',
    title: 'Culture & Wellbeing Transformation',
    body: 'Intentional cultural design — a workplace that performs and a workforce that wants to stay.',
  },
  {
    num: '11',
    title: 'Job Architecture Redesign',
    body: 'Grading, job families, and role clarity — the structural bones that make pay, growth, and equity work.',
  },
  {
    num: '12',
    title: 'HR Policies, Employee Relations & Compliance',
    body: 'Policy frameworks aligned to UAE Labour Law and MoHRE guidance — clear, defensible, and operationally sound.',
  },
  {
    num: '13',
    title: 'Learning & Leadership Development',
    body: "Capability programs that build depth — designed to close today's gaps and prepare for tomorrow's mandates.",
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
        <img src="/img/team-laptops.jpg" alt="" className="parallax-img" />
      </div>

      <div className="section__head section__head--centered">
        <span className="eyebrow reveal">What We Do</span>
        <h2 className="section__title reveal">
          A complete HR advisory stack — <em>everything but recruitment.</em>
        </h2>
        <p className="section__sub reveal">
          Thirteen practice areas, delivered with the rigor of a global firm and the nuance of a
          regional partner who knows the ground.
        </p>
      </div>

      {preview ? (
        <Link href="/services" className="services__gateway reveal">
          <div className="services__gateway-text">
            <span className="services__gateway-num">13 practice areas</span>
            <h3>Explore our complete HR advisory stack</h3>
            <p>
              From HR transformation and strategy to total rewards and compliance — see every
              service we offer.
            </p>
          </div>
          <span className="services__gateway-cta">
            Explore our services
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
        <div className="services__grid">
          {SERVICES.map((s) => (
            <article
              key={s.num}
              className={`service reveal${s.featured ? ' service--featured' : ''}`}
            >
              <div className="service__num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              {s.badge && <span className="service__badge">{s.badge}</span>}
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
