const PILLARS = [
  {
    num: '01',
    title: 'Strengthen your in-house capability.',
    body: 'We equip your team with the skills, tools, and practical know-how to execute with confidence and reduce dependency on external support.',
  },
  {
    num: '02',
    title: 'Target root causes, not symptoms.',
    body: 'We tighten governance, ensure regulatory compliance, optimize processes, and embed sustainable ways of working that protect long-term performance.',
  },
  {
    num: '03',
    title: 'Create lasting value beyond our work.',
    body: 'We support the growth of people, institutions, and the broader community in alignment with UAE national development priorities.',
  },
];

export default function Commitments() {
  return (
    <section className="commitments" data-theme="cream" id="commitments">
      <div className="section__bg-img" aria-hidden="true">
        <img src="/img/team-office.jpg" alt="" className="parallax-img" />
      </div>

      <div className="section__head section__head--centered">
        <span className="eyebrow reveal">Our Commitments</span>
        <br />
        <h2 className="section__title reveal">
          Three <em>promises</em> we make on every engagement.
        </h2>
      </div>

      <div className="pillars">
        {PILLARS.map((p) => (
          <article key={p.num} className="pillar reveal">
            <div className="pillar__num">{p.num}</div>
            <h3 className="pillar__title">{p.title}</h3>
            <p className="pillar__body">{p.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
