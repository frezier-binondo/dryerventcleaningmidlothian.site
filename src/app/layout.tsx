import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SITE_INFO } from '@/data/siteData';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_INFO.domain),
  title: {
    default: 'Dryer Vent Cleaning Midlothian TX',
    template: '%s',
  },
  description:
    'Professional dryer vent cleaning in Midlothian, TX and Ellis County. Prevent dryer fires, eliminate heavy lint clogs, and cut drying times. Free same-day quotes: (469) 336-3767.',
  keywords: [
    'dryer vent cleaning Midlothian TX',
    'dryer vent cleaning Midlothian',
    'dryer vent cleaning near me',
    'lint removal Midlothian',
    'dryer vent repair Midlothian TX',
    'dryer vent installation Midlothian',
    'dryer vent inspection Midlothian',
    'dryer vent cleaning Waxahachie TX',
    'dryer vent cleaning Red Oak TX',
    'dryer vent cleaning Ovilla TX',
    'dryer vent cleaning Cedar Hill TX',
    'commercial dryer vent cleaning Ellis County',
  ],
  authors: [{ name: SITE_INFO.name }],
  creator: SITE_INFO.name,
  publisher: SITE_INFO.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_INFO.domain,
    siteName: SITE_INFO.name,
    title: 'Dryer Vent Cleaning Midlothian TX',
    description:
      'Keep your home safe from dryer fires and restore fast drying cycles with certified dryer vent cleaning in Midlothian, TX. Fast scheduling, rotary brush cleaning & airflow testing.',
    images: [
      {
        url: SITE_INFO.heroImage,
        width: 1200,
        height: 630,
        alt: 'Professional Dryer Vent Cleaning in Midlothian TX',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dryer Vent Cleaning Midlothian TX',
    description:
      'Restore airflow and protect your Midlothian home from dryer fire risks. Call (469) 336-3767 for free estimate.',
    images: [SITE_INFO.heroImage],
  },
  alternates: {
    canonical: SITE_INFO.domain,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: SITE_INFO.name,
    image: SITE_INFO.heroImage,
    telephone: SITE_INFO.phone,
    email: SITE_INFO.email,
    url: SITE_INFO.domain,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_INFO.address.street,
      addressLocality: SITE_INFO.address.city,
      addressRegion: SITE_INFO.address.state,
      postalCode: SITE_INFO.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.488242,
      longitude: -96.993377,
    },
    hasMap: SITE_INFO.mapUrl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '07:00',
        closes: '19:00',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Midlothian' },
      { '@type': 'City', name: 'Waxahachie' },
      { '@type': 'City', name: 'Red Oak' },
      { '@type': 'City', name: 'Ovilla' },
      { '@type': 'City', name: 'Cedar Hill' },
      { '@type': 'City', name: 'Mansfield' },
      { '@type': 'City', name: 'Venus' },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased selection:bg-amber-500 selection:text-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
