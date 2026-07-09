import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Cardilett collects, uses, and protects personal data in line with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data.',
};

const UPDATED = 'July 9, 2026';

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className={styles.legal} data-theme="indigo-deep">
        <div className={styles.legal__head}>
          <span className="eyebrow">Legal</span>
          <br />
          <h1 className={styles.legal__title}>Privacy Policy</h1>
          <p className={styles.legal__updated}>Last updated: {UPDATED}</p>
        </div>
      </section>

      <section className={styles.legal__body}>
        <div className={styles.legal__prose}>
          <div className={styles.legal__disclaimer}>
            <h2>Disclaimer</h2>
            <p>
              Cardilett HR Advisory &amp; Consultancy will never ask for your personal details,
              contact information, bank or financial information, passwords, OTPs, or
              verification codes, whether by phone, email, SMS, WhatsApp, or any social media
              platform, for the purpose of promotions, prizes, lottery winnings, job offers, or
              any unsolicited offer.
            </p>
            <p>
              We do not sell, rent, or share your information with any other parties for
              marketing purposes. The only personal data we obtain is what you voluntarily
              submit through our website&apos;s contact/inquiry form, and this data is used
              solely to respond to your inquiry and nothing more whatsoever.
            </p>
          </div>

          <h2>1. Who We Are</h2>
          <p>
            Cardilett HR Advisory and Consultancy (&ldquo;Cardilett&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is an Abu Dhabi based L.L.C &ndash; S.P.C
            company in the United Arab Emirates, that is committed to protecting the data and
            privacy of cardilett.ae (the &ldquo;Site&rdquo;, &ldquo;Website&rdquo;) visitors and
            the clients&apos; data. This Privacy Policy is in accordance with the United Arab
            Emirates&apos; Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data
            (the &ldquo;PDPL&rdquo;) and its implementing regulations, as well as any applicable
            free-zone data protection law (where relevant). By using the Site, you acknowledge
            the practices described in this Policy.
          </p>

          <h2>2. Personal Data We Collect</h2>
          <p>
            We collect the following categories of personal data &ndash; (information you
            willingly submitted only):
          </p>
          <ul>
            <li>
              <strong>Contact form submissions.</strong> When you submit our contact form, we
              collect your name, email address, company name, the type of service you are
              enquiring about, any message you provide, and your consent to be contacted.
            </li>
            <li>
              <strong>Usage and analytics data.</strong> We use Microsoft Clarity, which operates
              without cookies, to collect anonymised and aggregated information about how
              visitors interact with the Site, such as pages viewed and general on-page
              behaviour (via heatmaps and session recordings). No cookies are used, and no
              personal data is collected or stored through this process.
            </li>
            <li>
              <strong>Correspondence.</strong> If you contact us directly by email or telephone,
              we retain that correspondence data for the sole purpose of contacting you as per
              your enquiry/request and nothing more whatsoever.
            </li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We use the personal data described above to:</p>
          <ul>
            <li>Respond to enquiries submitted through the contact form;</li>
            <li>Provide, discuss, and follow up on Cardilett provided services;</li>
            <li>Understand and improve how visitors use the Site;</li>
            <li>Maintain the security and proper functioning of the Site; and</li>
            <li>Comply with our legal and regulatory obligations under UAE law.</li>
          </ul>
          <p>
            Our legal bases for processing include your consent (for example, the consent
            checkbox on our contact form), our legitimate interest in operating and improving
            the Site and responding to business enquiries, and compliance with applicable legal
            obligations.
          </p>

          <h2>4. No Use of Cookies</h2>
          <p>
            The Site does not use cookies or any similar tracking technologies. We use Microsoft
            Clarity, which operates in a cookie-less mode, solely to understand aggregate Site
            usage such as pages viewed and general on-page behaviour (including via heatmaps and
            session recordings). This tool does not set cookies, does not track visitors
            individually, and no personal data is collected or stored as a result.
          </p>

          <h2>5. Data Sharing and Disclosure</h2>
          <p>We do not sell personal data whatsoever. We may only share personal data with:</p>
          <ul>
            <li>
              Service providers who process data on our behalf, such as our email delivery
              provider, hosting and database providers, and Microsoft (for the Clarity analytics
              tool), each acting under contractual obligations to protect your data;
            </li>
            <li>
              Professional advisors, regulators, or authorities where required by UAE law or to
              establish, exercise, or defend legal claims; and
            </li>
            <li>
              A successor entity in the event of a merger, acquisition, or restructuring of
              Cardilett&apos;s business, subject to equivalent privacy protections.
            </li>
          </ul>

          <h2>6. International Transfers</h2>
          <p>
            Some of our service providers, including Microsoft, may process data on servers
            located outside the UAE. Where personal data is transferred outside the UAE, we take
            reasonable steps to ensure such transfers are subject to appropriate safeguards
            consistent with the PDPL, including reliance on providers that maintain recognised
            international data protection standards.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain contact form submissions and related correspondence for as long as
            necessary to respond to your enquiry, maintain our client relationship, and meet our
            legal, accounting, or reporting obligations, after which it is securely deleted or
            anonymised.
          </p>

          <h2>8. Your Rights</h2>
          <p>Subject to the conditions set out in the PDPL, you have the right to:</p>
          <ul>
            <li>Request access to the personal data we hold about you;</li>
            <li>Request correction of inaccurate or incomplete personal data;</li>
            <li>Request deletion of your personal data, where applicable;</li>
            <li>Object to or restrict certain processing of your personal data;</li>
            <li>Withdraw consent at any time, without affecting prior lawful processing; and</li>
            <li>Lodge a complaint with the UAE Data Office if you believe your rights have been infringed.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us using the details in
            Section&nbsp;12 below. We will respond within a reasonable timeframe and in
            accordance with applicable law.
          </p>

          <h2>9. Data Security</h2>
          <p>
            We implement appropriate technical and organisational measures designed to protect
            personal data against unauthorised access, loss, misuse, or alteration. While we take
            reasonable steps to safeguard your data, no method of transmission or storage is
            completely secure, and we cannot guarantee absolute security. Therefore, and to be
            completely and always transparent, Cardilett will never approach or contact you
            through any communication channel other than the one you used when you submitted
            your enquiry. We encourage you to be cautious, to disregard anything you may receive
            in the name of Cardilett that falls outside this Privacy Policy, and to contact us if
            you feel that any approach was inconsistent with this Policy &ndash; this allows us
            to take immediate corrective action aimed at protecting your safety and data
            confidentiality.
          </p>

          <h2>10. Children&apos;s Privacy</h2>
          <p>
            The Site is intended for employees and business audiences in the UAE and is not
            directed at children whatsoever. We do not knowingly communicate or engage with any
            individual under the age of 18 and, should we become aware of a user&apos;s age at
            any point, we shall stop the communication or engagement immediately.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our
            practices or applicable law. The &ldquo;Last updated&rdquo; date at the top of this
            page indicates when this Policy was last revised. We encourage you to review this
            page periodically and to exercise your rights accordingly.
          </p>

          <h2>12. Contact us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise your data
            protection rights, please contact us at:
          </p>
          <p>
            Cardilett HR Advisory and Consultancy
            <br />
            Abu Dhabi, United Arab Emirates
            <br />
            Email:{' '}
            <a href="mailto:assist@cardilett.ae">assist@cardilett.ae</a>
          </p>
        </div>
      </section>
    </main>
  );
}
