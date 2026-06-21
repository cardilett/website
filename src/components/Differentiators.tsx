import { type ReactNode } from 'react';

interface Diff {
  title: string;
  body: string;
  icon: ReactNode;
}

const DIFFS: Diff[] = [
  {
    title: 'ROI & Measurable Outcomes',
    body: 'Every engagement ties to a number the business recognises — cost saved, time reclaimed, risk averted.',
    icon: (
      <path
        d="M3 20h18M5 20V11l7-6 7 6v9M9 20v-6h6v6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Benchmark-Driven Recommendations',
    body: 'Decisions grounded in regional and global benchmarks — never generic, never guessed.',
    icon: (
      <path
        d="M4 20V6m0 14h16M8 20V10m4 10V7m4 13v-9m4 9v-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Confidential, Compliant, Locally Informed',
    body: 'Aligned with UAE Labour Law, MoHRE directions, and the discretion our clients require.',
    icon: (
      <path
        d="M12 3l8 4v5c0 5-4 8-8 9-4-1-8-4-8-9V7l8-4Zm-3 9l2 2 4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: 'Senior-Led Delivery',
    body: 'Partner-level presence, not junior-heavy benches. The people you meet are the people who deliver.',
    icon: (
      <>
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </>
    ),
  },
  {
    title: 'Fast Turnaround, High Governance',
    body: 'The speed of a boutique with the governance of a Big 4 — no compromise on either side.',
    icon: (
      <path
        d="M12 2v4m0 12v4M2 12h4m12 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8M5.6 18.4l2.8-2.8m7.2-7.2 2.8-2.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    ),
  },
  {
    title: 'Emirati Leadership, Global Standards',
    body: 'Local context where it counts, international standards where they matter — both, always.',
    icon: (
      <path
        d="M12 3l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.8 6.1 21l1.2-6.5L2.5 9.9l6.6-.9L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Differentiators() {
  return (
    <section className="diff" data-theme="cream" id="differentiators">
      <div className="section__bg-img" aria-hidden="true">
        <img src="/img/uae-burj-al-arab.jpg" alt="" className="parallax-img" />
      </div>

      <div className="section__head">
        <span className="eyebrow reveal">Why Cardilett</span>
        <h2 className="section__title reveal">
          Authority and agility — <em>held in equal measure.</em>
        </h2>
        <p className="section__sub reveal">
          The reasons clients bring us in — and the reasons they keep us close.
        </p>
      </div>

      <div className="diff__grid">
        {DIFFS.map((d) => (
          <article key={d.title} className="diff__card reveal">
            <div className="diff__ico" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                {d.icon}
              </svg>
            </div>
            <h3>{d.title}</h3>
            <p>{d.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
