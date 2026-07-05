import SectionCTA from '@/components/SectionCTA';

export default function CaseStudies() {
  return (
    <section className="cases" data-theme="sand" id="cases">
      <div className="section__head section__head--centered">
        <span className="eyebrow reveal">Case Studies</span>
        <h2 className="section__title reveal">
          Solutions for complex cases, <em>impactful outcomes.</em>
        </h2>
        <p className="section__sub reveal">
          Snapshots from our practice. Client names withheld for confidentiality every figure is
          real.
        </p>
      </div>

      <div className="cases__grid">
        <article className="case reveal">
          <div className="case__metric">
            98<span>%</span>
          </div>
          <h3>HR Audit findings closed</h3>
          <p>
            End-to-end remediation program for a semi-government entity audit observations cleared
            within one cycle.
          </p>
          <span className="case__tag">Governance &amp; Compliance</span>
        </article>

        <article className="case reveal">
          <div className="case__metric">
            300<span>+</span>
          </div>
          <h3>Roles re-graded</h3>
          <p>
            Built a transparent, market-benchmarked pay structure for a multi-entity group with
            full board alignment.
          </p>
          <span className="case__tag">Total Rewards</span>
        </article>

        <article className="case reveal">
          <div className="case__metric">
            2.4<span>×</span>
          </div>
          <h3>Engagement uplift</h3>
          <p>
            Redesigned the employee engagement program at a financial services firm response rates
            and scores more than doubled.
          </p>
          <span className="case__tag">People &amp; Culture</span>
        </article>

        <article className="case reveal">
          <div className="case__metric">
            40<span>%</span>
          </div>
          <h3>Time-to-decision reduced</h3>
          <p>
            Redrew decision rights and delegation of authority for a government-linked group
            cutting approval cycles without loosening governance.
          </p>
          <span className="case__tag">Org Design &amp; Governance</span>
        </article>
      </div>

      <div className="cases__note reveal">
        <span className="dot dot--gold" />
        <p>
          More case studies will be added as our anonymisation reviews complete. Contact us for a
          confidential walkthrough.
        </p>
      </div>

      <SectionCTA />
    </section>
  );
}
