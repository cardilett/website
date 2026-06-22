import type { Metadata, Viewport } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';
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
    default: 'Cardilett — Essential HR. Decisive Impact.',
    template: '%s — Cardilett',
  },
  description:
    'Cardilett is a UAE-based, Emirati-led HR consultancy delivering Big 4 rigor with regional agility. Redefining HR through Innovation, Integration, and Impact.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <GoogleTagManager gtmId="GTM-M7RNN9GQ" />
      <body suppressHydrationWarning>
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
