// "We the UAE 2031" pillars shown as pills under the About copy.
const VISION_PILLARS = [
  'Economic Diversification',
  'Innovation & Technology',
  'Human Capital',
  'Sustainability & Climate',
  'Global Competitiveness',
  'Knowledge Economy',
];

export default function About() {
  return (
    <section className="about" data-theme="sand" id="about">
      <div className="section__head section__head--centered">
        <span className="eyebrow reveal">About Cardilett</span>
        <h2 className="section__title reveal">
          Rooted in Emirati values.
          <br />
          <em>Making UAE the source of global HR standard</em>
        </h2>
      </div>

      <div className="about__grid">
        <div className="about__left">
          <figure className="about__figure reveal" aria-hidden="true">
            <img src="/img/cardilett-about.jpeg" alt="" />
          </figure>
        </div>

        <div className="about__right">
          <p className="about__para reveal">
            <b>Cardilett</b> is an Abu Dhabi-based HR Advisory and Consultancy Company dedicated
            to delivering high-impact HR transformations with rigorous quality, regional agility,
            and the accelerated execution endorsed by the Abu Dhabi Government.
          </p>
          <p className="about__para reveal">
            In a market filled with HR consulting firms, <b>Cardilett</b> distinguishes itself as
            the only <strong>fully Emirati-owned Company</strong>, pioneering top-level
            sophisticated, forward-thinking and innovative services that are truly incomparable.
            While we are a young firm, we have ambitious plans, targeting significant and timely
            contributions towards &ldquo;We the UAE 2031&rdquo; &mdash; all through evidence-based
            strategies and sovereign design.
          </p>

          <div className="about__vision reveal">
            <span className="about__vision-label">Aligned with We the UAE 2031 vision</span>
            <ul className="about__vision-pills">
              {VISION_PILLARS.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
