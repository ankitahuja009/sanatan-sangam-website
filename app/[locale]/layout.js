import '../globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WatiWidget from '../components/WatiWidget';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import { GoogleAnalytics } from '@next/third-parties/google';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const isHi = locale === 'hi';

  const title = {
    default: isHi 
      ? 'सनातन संगम — जहाँ सनातन आपसे मिलता है | लाइव दर्शन, आरती और भजन' 
      : 'Sanatan Sangam — Where Sanatan Meets You | Live Darshan, Aarti & Bhajans',
    template: '%s | Sanatan Sangam',
  };
  
  const description = isHi
    ? 'सनातन संगम लाया है दिव्य दर्शन, भक्ति संगीत, AI आध्यात्मिक कला, व्यक्तिगत आशीर्वाद, राशिफल, पंचांग और बहुत कुछ — 11 भारतीय भाषाओं में आपका संपूर्ण आध्यात्मिक साथी।'
    : 'Sanatan Sangam brings divine darshan, devotional music, AI spiritual art, personalized blessings, horoscope, Panchang, and more — your complete spiritual companion in 11 Indian languages.';

  const keywords = [
    'Sanatan Sangam', 'Sanatan Dharma app', 'devotional app India',
    'live darshan app', 'aarti app', 'chalisa app', 'mantra app',
    'bhajan app', 'horoscope app', 'panchang today', 'free kundli',
    'Hindu spirituality app', 'AI spiritual art', 'devotional music app',
    'temple darshan online', 'Hindu prayer app',
  ];
  if (isHi) {
    keywords.push('सनातन संगम', 'लाइव दर्शन', 'आरती', 'भजन', 'चालीसा', 'मंत्र', 'पंचांग', 'राशिफल');
  }

  return {
    metadataBase: new URL('https://www.sanatan-sangam.com'),
    title,
    description,
    keywords,
    openGraph: {
      title: title.default,
      description,
      url: isHi ? 'https://www.sanatan-sangam.com/hi' : 'https://www.sanatan-sangam.com',
      siteName: 'Sanatan Sangam',
      locale: isHi ? 'hi_IN' : 'en_IN',
      type: 'website',
      images: [{
        url: 'https://pub-a3540a1b218c43298ca3a816c685b5e7.r2.dev/app-pics/SS%20logo%20without%20text.png',
        width: 1200,
        height: 630,
        alt: 'Sanatan Sangam — Devotional App',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@sanatansangam',
      title: title.default,
      description,
      images: ['https://pub-a3540a1b218c43298ca3a816c685b5e7.r2.dev/app-pics/SS%20logo%20without%20text.png'],
    },
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

    verification: {
      google: 'zNyxuhsrHy87yfO6ChC3lurxHebghuTFNxLxHnLRZno',
    },
    other: {
      'theme-color': '#FF6B00',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'default',
      'apple-mobile-web-app-title': 'Sanatan Sangam',
    },
  };
}


export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'Sanatan Sangam',
        url: 'https://www.sanatan-sangam.com',
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
        url: 'https://www.sanatan-sangam.com',
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
