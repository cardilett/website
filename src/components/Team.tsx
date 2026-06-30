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
          Senior-led. <em>Locally rooted.</em>
        </h2>
      </div>

      {/* Founder feature card */}
      <article className="founder reveal">
        <div className="founder__copy">
          <span className="founder__tag">Founder &amp; CEO</span>
          <h3>Hayat Ali Al Hosani</h3>
          <p>
            Emirati founder with board-level governance experience across UAE government,
            semi-government, and multinational groups. Builder of the Cardilett practice and
            custodian of its standards.
          </p>
          <p>
            With deep expertise in HR strategy, organisational design, and total rewards Hayat
            brings the rigour of a Big&nbsp;4 partner and the agility of a regional leader to every
            engagement.
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
