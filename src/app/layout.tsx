import type { Metadata, Viewport } from 'next';
import { Inter, Newsreader } from 'next/font/google';
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
    'Cardilett is a UAE-based, Emirati-led HR consultancy delivering with regional agility. Redefining HR through Innovation, Integration, and Impact.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
