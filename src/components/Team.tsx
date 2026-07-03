import CeoConnect from '@/components/CeoConnect';

interface Member {
  name: string;
  role: string;
  photo: string;
  bio: string;
}

// Team member data removed only the founder is shown for now.
// Structure preserved: add entries here to re-populate the team grid.
const MEMBERS: Member[] = [];

export default function Team() {
  return (
    <section className="team" data-theme="apricot" id="team">
      <div className="section__head section__head--centered">
        <h2 className="section__title reveal">
          UAE Leadership for <em>Global HR Excellence</em>
        </h2>
      </div>

      {/* Founder feature card */}
      <article className="founder reveal">
        <div className="founder__copy">
          <span className="eyebrow">Founder &amp; CEO</span>
          <h3>Hayat Ali Al Hosani</h3>
          <p>
            With over two decades of leadership across the UAE&apos;s public and private sectors,
            Hayat Al Hosani has advised boards, CEOs, and executive teams on building resilient,
            high-performing organizations. From labour law compliance and Emiratisation to
            large-scale workforce transformation and leadership strategy, she brings a rare
            combination of governance expertise, commercial understanding, and practical HR
            leadership.
          </p>
          <p>
            Today, through Cardilett, she partners with organizations to solve complex
            people-agenda challenges and build workplaces positioned for sustainable growth.
          </p>
        </div>
        <div className="founder__photo" aria-hidden="true">
          <img src="/img/hayat-founder.jpg" alt="Hayat Ali Al Hosani" loading="lazy" decoding="async" />
        </div>
      </article>

      {/* Team grid */}
      <div className="team__grid">
        {MEMBERS.map((m) => (
          <article key={m.name} className="member reveal">
            <div className="member__photo" aria-hidden="true">
              <img src={m.photo} alt={m.name} />
            </div>
            <div className="member__copy">
              <h3>{m.name}</h3>
              <span className="member__role">{m.role}</span>
              <p>{m.bio}</p>
            </div>
          </article>
        ))}
      </div>

      {/* CEO-section CTA only: centered, reveals contact details on click. */}
      <CeoConnect />
    </section>
  );
}
