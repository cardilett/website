import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Cardilett collects, uses, and protects personal data in line with UAE Federal Decree-Law No. 45 of 2021 on the Protection of Personal Data.',
};

const UPDATED = 'June 26, 2026';

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
          <p>
            Cardilett HR Advisory and Consultancy (&ldquo;Cardilett&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;) is committed to protecting the privacy of
            visitors to cardilett.ae (the &ldquo;Site&rdquo;) and the clients and contacts we
            work with. This Privacy Policy explains what personal data we collect, why we
            collect it, how we use and protect it, and the rights available to you.
          </p>
          <p>
            We process personal data in accordance with the United Arab Emirates&apos; Federal
            Decree-Law No. 45 of 2021 on the Protection of Personal Data (the &ldquo;PDPL&rdquo;)
            and its implementing regulations, as well as any applicable free-zone data
            protection law where relevant. By using the Site, you acknowledge the practices
            described in this Policy.
          </p>

          <h2>1. Who We Are</h2>
          <p>
            Cardilett is a HR advisory and consultancy based in Abu Dhabi, United Arab
            Emirates. For the purposes of the PDPL, Cardilett acts as the data controller for
            personal data collected through the Site. You can reach us using the details in
            Section&nbsp;12 (Contact us) below.
          </p>

          <h2>2. Personal Data We Collect</h2>
          <p>We collect the following categories of personal data:</p>
          <ul>
            <li>
              <strong>Contact form submissions.</strong> When you submit our contact form, we
              collect your name, email address, company name, the type of service you are
              enquiring about, any message you provide, and your consent to be contacted.
            </li>
            <li>
              <strong>Usage and analytics data.</strong> We use Google Analytics 4 and
              Microsoft Clarity to collect information about how visitors interact with the
              Site, including pages viewed, time on site, approximate location (derived from IP
              address), device and browser type, referral source, and on-page behaviour such as
              clicks, scrolling, and mouse movement (via session recordings and heatmaps). This
              data is collected in aggregated or pseudonymised form and is not used to directly
              identify you.
            </li>
            <li>
              <strong>Cookie and consent data.</strong> We use CookieScript to manage cookie
              consent and to record your cookie preferences. See Section&nbsp;4 (Cookies) below.
            </li>
            <li>
              <strong>Correspondence.</strong> If you contact us directly by email or
              telephone, we retain that correspondence and any personal data it contains.
            </li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We use the personal data described above to:</p>
          <ul>
            <li>Respond to enquiries submitted through the contact form;</li>
            <li>Provide, discuss, and follow up on our HR advisory services;</li>
            <li>Understand and improve how visitors use the Site;</li>
            <li>Maintain the security and proper functioning of the Site; and</li>
            <li>Comply with our legal and regulatory obligations under UAE law.</li>
          </ul>
          <p>
            Our legal bases for processing include your consent (for example, the consent
            checkbox on our contact form and your cookie preferences), our legitimate interest
            in operating and improving the Site and responding to business enquiries, and
            compliance with applicable legal obligations.
          </p>

          <h2>4. Cookies and Similar Technologies</h2>
          <p>
            The Site uses cookies and similar technologies operated through CookieScript, our
            consent management platform, which allows you to accept, reject, or customise
            cookie categories before any non-essential cookie is set.
          </p>
          <ul>
            <li>
              <strong>Strictly necessary cookies</strong> are required for the Site to function
              and cannot be disabled.
            </li>
            <li>
              <strong>Analytics cookies</strong> (Google Analytics 4, via Google Tag Manager,
              and Microsoft Clarity) are only set once you provide consent, and help us
              understand Site usage in aggregate, including through session recordings and
              heatmaps.
            </li>
          </ul>
          <p>
            We apply Google&apos;s Consent Mode, meaning analytics and advertising signals
            default to &ldquo;denied&rdquo; until you actively grant consent through the
            CookieScript banner. You may change or withdraw your cookie preferences at any time
            using the cookie settings link available on the Site, or by adjusting your browser
            settings.
          </p>

          <h2>5. Data Sharing and Disclosure</h2>
          <p>
            We do not sell personal data. We may share personal data with:
          </p>
          <ul>
            <li>
              Service providers who process data on our behalf, such as our email delivery
              provider, hosting and database providers, and Google and Microsoft (for
              analytics, tag management, and session-recording tools), each acting under
              contractual obligations to protect your data;
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
            Some of our service providers, including Google and Microsoft, may process data on
            servers located outside the UAE. Where personal data is transferred outside the UAE, we
            take reasonable steps to ensure such transfers are subject to appropriate
            safeguards consistent with the PDPL, including reliance on providers that maintain
            recognised international data protection standards.
          </p>

          <h2>7. Data Retention</h2>
          <p>
            We retain contact form submissions and related correspondence for as long as
            necessary to respond to your enquiry, maintain our client relationship, and meet
            our legal, accounting, or reporting obligations, after which it is securely deleted
            or anonymised. Analytics data is retained in accordance with Google Analytics&apos;
            and Microsoft Clarity&apos;s standard retention settings.
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
            personal data against unauthorised access, loss, misuse, or alteration. While we
            take reasonable steps to safeguard your data, no method of transmission or storage
            is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2>10. Children&apos;s Privacy</h2>
          <p>
            The Site is intended for business audiences and is not directed at children. We do
            not knowingly collect personal data from individuals under the age of 18.
          </p>

          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our
            practices or applicable law. The &ldquo;Last updated&rdquo; date at the top of this
            page indicates when this Policy was last revised. We encourage you to review this
            page periodically.
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
            <a href="mailto:connect@cardilett.ae">connect@cardilett.ae</a>
          </p>
        </div>
      </section>
    </main>
  );
}
