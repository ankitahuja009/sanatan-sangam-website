import '../globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WatiWidget from '../components/WatiWidget';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata = {
  metadataBase: new URL('https://sanatan-sangam.com'),
  title: {
    default: 'Sanatan Sangam — Where Sanatan Meets You | Devotional App',
    template: '%s | Sanatan Sangam',
  },
  description:
    'Sanatan Sangam brings divine darshan, devotional music, AI spiritual art, personalized blessings, horoscope, Panchang, and more — your complete spiritual companion in 11 Indian languages.',
  keywords: [
    'Sanatan Dharma',
    'devotional app',
    'live darshan',
    'aarti',
    'chalisa',
    'mantra',
    'bhajan',
    'horoscope',
    'panchang',
    'kundli',
    'Hindu spirituality',
    'ai spiritual art',
    'devotional music',
  ],
  openGraph: {
    title: 'Sanatan Sangam — Where Sanatan Meets You',
    description:
      'Experience divine darshan, devotional music, AI art, blessings & more. Your complete spiritual companion.',
    url: 'https://sanatan-sangam.com',
    siteName: 'Sanatan Sangam',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: 'https://pub-a3540a1b218c43298ca3a816c685b5e7.r2.dev/app-pics/SS%20logo%20without%20text.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanatan Sangam — Where Sanatan Meets You',
    description:
      'Live temple darshan, 200+ bhajans, AI spiritual art, horoscope & more in 11 languages.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({ children, params }) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  console.log('DEBUG: Loaded messages for locale:', locale, Object.keys(messages));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Sanatan Sangam',
        url: 'https://sanatan-sangam.com',
        logo: 'https://pub-a3540a1b218c43298ca3a816c685b5e7.r2.dev/app-pics/SS%20logo%20without%20text.png',
        sameAs: [
          'https://www.instagram.com/sanatansangam.official',
          'https://www.facebook.com/people/Sanatan-Sangam/61586013304596/',
          'https://www.youtube.com/@SanatanSangamMusic',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'hi@askyourguide.ai',
          contactType: 'customer support',
        },
      },
      {
        '@type': 'MobileApplication',
        name: 'Sanatan Sangam',
        operatingSystem: 'Android, iOS',
        applicationCategory: 'LifestyleApplication',
        description:
          'Your complete spiritual companion — live darshan, devotional music, AI sacred art, personalized blessings, horoscope, Panchang, Kundli & more in 11 Indian languages.',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
        inLanguage: ['en', 'hi', 'ta', 'te', 'kn', 'bn', 'ml', 'mr', 'or', 'pa', 'gu'],
      },
      {
        '@type': 'WebSite',
        name: 'Sanatan Sangam',
        url: 'https://sanatan-sangam.com',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://sanatan-sangam.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      },
    ],
  };

  return (
    <html lang={locale}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Header />
          <main style={{ paddingTop: 'var(--header-height)' }}>{children}</main>
          <Footer />
          <WatiWidget />
        </NextIntlClientProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
