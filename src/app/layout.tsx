import type { Metadata, Viewport } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import Script from 'next/script';
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['300', '400', '500'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#FBEDDD',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: 'Cardilett Shaping Better Organization. Begins Here.',
    template: '%s Cardilett',
  },
  description:
    'Cardilett is a UAE-based, Emirati-led HR consultancy delivering Big 4 rigor with regional agility. Redefining HR through Innovation, Integration, and Impact.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <GoogleTagManager gtmId="GTM-WB8Z5WH6" />
      <GoogleAnalytics gaId="G-B134EYVR2K" />
      <body suppressHydrationWarning>
        {/* Google Consent Mode v2 default a plain inline script (not
            next/script) so React 19 renders it in place and the browser runs it
            during HTML parse, before GTM loads. Tags start denied and wait for
            the CookieScript banner's consent update. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                analytics_storage: 'denied',
                functionality_storage: 'denied',
                personalization_storage: 'denied',
                security_storage: 'granted',
                wait_for_update: 500
              });
              gtag('set', 'ads_data_redaction', true);
              gtag('set', 'url_passthrough', true);
            `,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WB8Z5WH6"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Script
          id="cookie-script"
          src="https://cdn.cookie-script.com/s/f1321dd832fdfbcc1cd53c338b3caf90.js"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
