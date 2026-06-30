import SectionCTA from '@/components/SectionCTA';

export default function About() {
  return (
    <section className="about" data-theme="sand" id="about">
      <div className="section__head section__head--centered">
        <span className="eyebrow reveal">About Cardilett</span>
        <h2 className="section__title reveal">
          Named for the cardinal{' '}
          <em>essential, confident, unmistakable.</em>
        </h2>
      </div>

      <div className="about__grid">
        <div className="about__left">
          {/*
            Brand-fit alternatives ready to swap in (just change the src):
              /img/AUH-skyline.jpg        Abu Dhabi skyline (current matches the caption)
              /img/uae-dubai-skyline.jpg  UAE reach (Dubai skyline at dusk)
              /img/team-office.jpg        Modern workplace interior
            NOTE: the original /img/AUH-landscape-*.jpg files have a stock
            "Your paragraph text" watermark baked in AUH-skyline.jpg is the
            cleaned (cropped) version, so prefer it over those.
          */}
          <figure className="about__figure reveal" aria-hidden="true">
            <img src="/img/AUH-skyline.jpg" alt="" />
            <figcaption>Rooted in Abu Dhabi. Reach across the UAE.</figcaption>
          </figure>
        </div>

        <div className="about__right">
          <p className="about__para reveal">
            The name <em>Cardilett</em> is drawn from <em>cardinal</em> Latin{' '}
            <em>cardo</em>, the hinge on which everything essential turns. Our namesake, the
            Northern Cardinal, is a creature of confidence, loyalty, resilience, and a distinctive
            voice. Crimson carries courage, authority, and prestige.
          </p>
          <p className="about__para reveal">
            Founded and led by <strong>Hayat Ali Al Hosani</strong>, Cardilett is a
            government-enabled Emirati consultancy built to compete with the Big&nbsp;4 on rigor
            and outpace them on agility. Our values{' '}
            <em>Authority, Innovation, Heritage, Integrity, Excellence</em> guide every
            engagement.
          </p>
        </div>
      </div>

      <SectionCTA />
    </section>
  );
}
