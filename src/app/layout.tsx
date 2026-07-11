import type { Metadata, Viewport } from 'next';
import { Inter, Newsreader } from 'next/font/google';
import Script from 'next/script';
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
  metadataBase: new URL('https://cardilett.ae'),
  title: {
    default: 'Cardilett - Shaping Better Organization, Begins Here.',
    template: '%s Cardilett',
  },
  description:
    'Cardilett is a UAE-based, Emirati-led HR consultancy delivering with regional agility. Redefining HR through Innovation, Integration, and Impact.',
  openGraph: {
    title: 'Cardilett - Shaping Better Organization, Begins Here.',
    description:
      'Cardilett is a UAE-based, Emirati-led HR consultancy delivering with regional agility. Redefining HR through Innovation, Integration, and Impact.',
    url: 'https://cardilett.ae',
    siteName: 'Cardilett',
    images: [
      {
        url: 'https://cardilett.ae/img/cardilett-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cardilett - Shaping Better Organization, Begins Here.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cardilett - Shaping Better Organization, Begins Here.',
    description:
      'Cardilett is a UAE-based, Emirati-led HR consultancy delivering with regional agility. Redefining HR through Innovation, Integration, and Impact.',
    images: ['https://cardilett.ae/img/cardilett-og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
      <head>
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "xd082tvdxf");`}
        </Script>
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
