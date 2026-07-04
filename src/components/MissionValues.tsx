interface Value {
  title: string;
  /** Brand tile colour (maps to a modifier class below). */
  tone: 'gold' | 'crimson' | 'skylight' | 'teal' | 'periwinkle';
  /** Supplied circular badge icon (glyph + ring baked in). */
  img: string;
}

// Five values from the executive profile, mirroring the Differentiators
// icon-card pattern: a coloured tile topped with a circular badge icon.
const VALUES: Value[] = [
  {
    title: 'Cultural Appreciation',
    tone: 'gold',
    img: '/img/values/cultural-appreciation.png',
  },
  {
    title: 'Credibility',
    tone: 'crimson',
    img: '/img/values/credibility.png',
  },
  {
    title: 'Integrity',
    tone: 'skylight',
    img: '/img/values/integrity.png',
  },
  {
    title: 'Forward Thinking',
    tone: 'periwinkle',
    img: '/img/values/forward-thinking.png',
  },
  {
    title: 'Elevated Standards',
    tone: 'teal',
    img: '/img/values/elevated-standards.png',
  },
];

export default function MissionValues() {
  return (
    <section className="mission" data-theme="paper" id="mission">
      <div className="section__head section__head--centered">
        <span className="eyebrow reveal">What We Stand For</span>
        <h2 className="section__title reveal">
          Mission <em>&amp; Values</em>
        </h2>
      </div>

      <div className="mission__statements">
        <div className="mission__block reveal">
          <span className="mission__label">Our Mission</span>
          <p className="mission__para">
            To empower organizations through strategic HR advisory and consultancy services that
            align people, processes, and performance with long-term business objectives. We partner
            with government, private, and semi-government entities to design future-ready operating
            models, workforce strategies, governance frameworks, and end-to-end HR systems. By
            combining global best practices with deep regional expertise, we deliver tailored
            solutions in organizational design, HR policy, rewards, capability development, people
            analytics, and technology integration&mdash;driving measurable outcomes, operational
            excellence, transparency, and sustainable capability transfer.
          </p>
        </div>

        <div className="mission__block reveal">
          <span className="mission__label">Our Vision</span>
          <p className="mission__para">
            Cardilett purposely aims to be at the forefront of the UAE HR consultancy market,
            established as the go-to Partner for impactful HR transformations by both government and
            industry stakeholders.
          </p>
        </div>
      </div>

      <div className="values">
        <span className="values__eyebrow reveal">Our Values</span>
        <div className="values__grid">
          {VALUES.map((v) => (
            <article key={v.title} className={`value value--${v.tone} reveal`}>
              <div className="value__ico" aria-hidden="true">
                <img src={v.img} alt="" className="value__ico-img" />
              </div>
              <h3 className="value__title">{v.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
