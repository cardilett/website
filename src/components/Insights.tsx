import Link from 'next/link';
import SectionCTA from '@/components/SectionCTA';

interface Insight {
  title: string;
  meta: string;
}

const INSIGHTS: Insight[] = [
  {
    title: 'From audit to advantage turning findings into function design.',
    meta: 'Essay · 6 min read',
  },
  {
    title: 'Total rewards in a post-oil budget: modeling what you can actually defend.',
    meta: 'Article · 8 min read',
  },
  {
    title: 'Emiratisation as strategy, not a quota a framework for leaders.',
    meta: 'Point of view · 5 min read',
  },
  {
    title: 'Job architecture: the invisible layer that fixes nine other problems.',
    meta: 'Deep dive · 10 min read',
  },
];

export default function Insights() {
  return (
    <section className="insights" data-theme="sand" id="insights">
      <div className="section__head section__head--centered">
        <span className="eyebrow reveal">Insights</span>
        <br />
        <h2 className="section__title reveal">
          Timely thinking on <em>HR in the UAE.</em>
        </h2>
        <p className="section__sub reveal">
          A steady stream of LinkedIn essays, articles, and short videos syndicated here as we
          publish.
        </p>
      </div>

      <div className="insights__grid">
        {INSIGHTS.map((ins) => (
          <article key={ins.title} className="insight insight--coming reveal">
            <span className="insight__tag">Coming soon</span>
            <h3>{ins.title}</h3>
            <span className="insight__meta">{ins.meta}</span>
          </article>
        ))}
      </div>

      <Link href="/contact" className="insights__link arrow-link reveal">
        Subscribe for early access
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      <SectionCTA />
    </section>
  );
}
