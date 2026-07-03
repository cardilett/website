import { type ReactNode } from 'react';
import SectionCTA from '@/components/SectionCTA';

interface Diff {
  title: string;
  body: string;
  icon: ReactNode;
}

const DIFFS: Diff[] = [
  {
    title: 'ROI & Measurable Outcomes',
    body: 'Every engagement ties to a number the business recognises cost saved, time reclaimed, risk averted.',
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
    body: 'Decisions grounded in regional and global benchmarks never generic, never guessed.',
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
    body: 'The speed of a boutique with the governance of a Big 4 no compromise on either side.',
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
    body: 'Local context where it counts, international standards where they matter both, always.',
    icon: (
      <>
        {/* Flagpole */}
        <rect x="2" y="1.5" width="1.5" height="21" rx="0.75" fill="rgba(255,255,255,0.65)" />
        {/* Green top stripe */}
        <path d="M3.5,3.5 C9,1.5 15,5.5 22,3.5 L22,10 C15,12 9,8 3.5,10Z" fill="#009A44" />
        {/* White middle stripe */}
        <path d="M3.5,10 C9,8 15,12 22,10 L22,16.5 C15,18.5 9,14.5 3.5,16.5Z" fill="#fff" />
        {/* Black bottom stripe */}
        <path d="M3.5,16.5 C9,14.5 15,18.5 22,16.5 L22,21.5 C15,23.5 9,19.5 3.5,21.5Z" fill="#111" />
        {/* Red hoist band */}
        <path d="M3.5,3.5 C5,3 6.5,4 8,3.5 L8,21.5 C6.5,22 5,21 3.5,21.5Z" fill="#EF3340" />
      </>
    ),
  },
];

export default function Differentiators() {
  return (
    <section className="diff" data-theme="cream" id="differentiators">
      <div className="section__bg-img" aria-hidden="true">
        <img src="/img/uae-burj-al-arab.jpg" alt="" className="parallax-img" loading="lazy" decoding="async" />
      </div>

      <div className="section__head section__head--centered">
        <span className="eyebrow reveal">Why Cardilett</span>
        <h2 className="section__title reveal">
          Authority and agility <em>held in equal measure.</em>
        </h2>
        <p className="section__sub reveal">
          The reasons clients bring us in and the reasons they keep us close.
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

      <SectionCTA />
    </section>
  );
}
