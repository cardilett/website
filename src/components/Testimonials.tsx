'use client';

import { useState } from 'react';
import SectionCTA from '@/components/SectionCTA';

interface Quote {
  /** Full recommendation text. */
  text: string;
  author: string;
  /** Role / title shown beneath the name. */
  role: string;
  /** Public LinkedIn profile URL. */
  linkedin: string;
  /**
   * Optional headshot. Drop a file into /public/img (e.g. '/img/james-babb.jpg')
   * and set it here to replace the initials avatar.
   */
  image?: string;
}

const QUOTES: Quote[] = [
  {
    text:
      'I had the privilege of working with Hayat Al Hosani during our time together at KPMG, and over the past eight years of knowing her three of which we worked closely side by side I have consistently been impressed by the caliber of leader she is in the HR space. Hayat embodies everything you would expect from a world-class HR leader in the UAE. She brings a rare combination of strategic vision and operational excellence, with a deep understanding of people, culture, and organizational dynamics. During our time at KPMG, where she served in a senior People & Culture leadership role, she played a pivotal role in shaping high-performing teams and driving impactful HR transformation initiatives. What sets Hayat apart is her ability to balance empathy with business acumen. She is deeply people-centric always taking the time to listen, coach, and uplift those around her while never losing sight of the broader organizational objectives. She is also an exceptional collaborator and trusted advisor to leadership, with a natural ability to influence stakeholders, navigate complexity, and bring clarity to challenging situations. I would wholeheartedly recommend Hayat to any organization seeking a transformative HR leader. She is, without doubt, one of the most impactful and inspiring professionals I’ve had the pleasure of working with.',
    author: 'James Babb',
    role: 'Ex-KPMG Partner · Head of Clients & Markets (Shadow CEO) · Executive Committee & Board Member',
    linkedin: 'https://www.linkedin.com/in/jamesbabb/',
    image: '/img/james-babb.jpeg',
  },
  {
    text:
      'I worked with Hayat on a year-long cultural transformation initiative. The initiative involved at least 6 major transformation projects that would have normally required dealing with big consulting names in the market, yet she managed to deliver the Board requirements for this large-scale initiative single-handedly. Regardless of any challenges she faced tight delivery schedules, budget restrictions, under-resourcing, extreme and changeable demands she constantly viewed these challenges as opportunities. Hayat demonstrated exceptional ability to align business strategy with authentic employee engagement, resulting in measurable improvements in engagement levels, retention, psychological safety, and cross-functional collaboration across the organization. I’d recommend her unreservedly for any organization serious about transformative HR leadership.',
    author: 'Ahmad Yousuf',
    role: 'Head of Treasury & Investment · Acting Head of Retail & SME, Al Masraf',
    linkedin: 'https://www.linkedin.com/in/ahmad-yousuf-2298a1151/',
    image: '/img/ahmad-yousuf.jpeg',
  },
  {
    text:
      'Hayat is excellent at driving HR projects, combining strong project management discipline with a push for innovative HR solutions. She is a great communicator who aligns stakeholders and turns ideas into actionable outcomes.',
    author: 'Iqbal Noor',
    role: 'Senior Executive Director · Group Head Learning & Development, Emirates NBD',
    linkedin: 'https://www.linkedin.com/in/iqbalnoor/',
    image: '/img/iqbal-noor.jpeg',
  },
  {
    text:
      'I had the opportunity to work closely with Hayat over a period of 15 months, and I can confidently attest to her professionalism, integrity, and strong business acumen. Throughout our engagement, Hayat demonstrated a deep understanding of HR processes and governance requirements, consistently ensuring alignment with organizational policies and regulatory expectations. What stood out most was her collaborative mindset and willingness to engage constructively on control enhancements she approached audit findings not as compliance obligations, but as opportunities to strengthen processes and improve operational efficiency. Hayat is a dependable and forward-thinking HR leader who brings both strategic perspective and operational discipline. I would highly recommend her for any role requiring strong HR governance, stakeholder management, and a commitment to excellence.',
    author: 'Tanu Goel',
    role: 'Chief Internal Auditor, Emirates Development Bank',
    linkedin: 'https://www.linkedin.com/in/tanu-goel-b7216b22/',
    image: '/img/tanu-goel.jpeg',
  },
];

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

function QuoteMark() {
  return (
    <svg className="quote__mark" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M10 10c-4 0-6 3-6 7v9h9V14H7c0-2 1-4 3-4v-4Zm16 0c-4 0-6 3-6 7v9h9V14h-6c0-2 1-4 3-4v-4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function QuoteCard({ q }: { q: Quote }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <figure className="quote" data-expanded={expanded}>
      <div className="quote__card reveal">
        <div className="quote__head">
          <a
            className="quote__avatar"
            href={q.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${q.author} on LinkedIn`}
          >
            {q.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={q.image} alt={q.author} />
            ) : (
              <span aria-hidden="true">{initials(q.author)}</span>
            )}
          </a>
          <figcaption className="quote__id">
            <strong>{q.author}</strong>
            <span>{q.role}</span>
            <a
              className="quote__linkedin"
              href={q.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              View profile
            </a>
          </figcaption>
        </div>

        <QuoteMark />
        <blockquote className="quote__text">{q.text}</blockquote>

        <button
          type="button"
          className="quote__toggle"
          aria-expanded={expanded}
          onClick={() => setExpanded((v) => !v)}
        >
          {expanded ? 'Read less' : 'Read more'}
        </button>
      </div>
    </figure>
  );
}

export default function Testimonials() {
  return (
    <section className="testimonials" data-theme="sand" id="testimonials">
      <div className="section__head section__head--centered">
        <span className="eyebrow reveal">In Their Words</span>
        <h2 className="section__title reveal">Voices from our network.</h2>
        <p className="section__sub reveal">
              Endorsements from senior leaders across top-tier global professional services firms and the UAE enterprise market.
        </p>
      </div>

      <div className="testimonials__grid">
        {[0, 1].map((col) => (
          <div className="testimonials__col" key={col}>
            {QUOTES.filter((_, i) => i % 2 === col).map((q) => (
              <QuoteCard key={q.author} q={q} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
