export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isHi = locale === 'hi';

  return {
    title: isHi ? 'भक्ति संगीत — 200+ विज्ञापन-मुक्त भजन, आरती और मंत्र' : 'Devotional Music — 200+ Ad-Free Bhajans, Aarti & Mantras',
    description: isHi
      ? '9 क्षेत्रीय भारतीय भाषाओं में 200+ विज्ञापन-मुक्त भक्ति भजन, आरती, मंत्र, चालीसा और कीर्तन स्ट्रीम करें। सनातन संगम पर ट्यूनमेट के साथ अपना व्यक्तिगत भजन बनाएं।'
      : 'Stream 200+ ad-free devotional bhajans, aarti, mantras, chalisas & kirtan in 9 regional Indian languages. Create your own personalized bhajan with Tunemate on Sanatan Sangam.',
    keywords: [
      'devotional music', 'bhajan app', 'aarti songs', 'mantra music', 'chalisa songs',
      'Hanuman Chalisa', 'bhakti music', 'Hindi bhajans', 'ad-free spiritual music',
      'Sanatan Sangam music', 'tunemate', 'online bhajan',
    ],
    openGraph: {
      title: isHi ? 'भक्ति संगीत — 200+ विज्ञापन-मुक्त भजन और मंत्र | सनातन संगम' : 'Devotional Music — 200+ Ad-Free Bhajans & Mantras | Sanatan Sangam',
      description: isHi
        ? 'हर मूड के लिए 200+ विज्ञापन-मुक्त भजन, आरती, मंत्र और चालीसा। 9 क्षेत्रीय भाषाओं में स्ट्रीम करें या ट्यूनमेट के साथ अपना स्वयं का व्यक्तिगत भजन लिखें।'
        : '200+ ad-free bhajans, aarti, mantras & chalisas for every mood. Stream in 9 regional languages or compose your own personalized bhajan with Tunemate.',
      url: isHi ? 'https://www.sanatan-sangam.com/hi/music' : 'https://www.sanatan-sangam.com/music',
      images: [{ url: 'https://pub-a3540a1b218c43298ca3a816c685b5e7.r2.dev/app-pics/SS%20logo%20without%20text.png' }],
    },
    alternates: {
      canonical: isHi ? 'https://www.sanatan-sangam.com/hi/music' : 'https://www.sanatan-sangam.com/music',
      languages: {
        'en': 'https://www.sanatan-sangam.com/music',
        'hi': 'https://www.sanatan-sangam.com/hi/music',
        'x-default': 'https://www.sanatan-sangam.com/music',
      },
    },
  };
}

export default async function MusicLayout({ children, params }) {
  const { locale } = await params;
  const isHi = locale === 'hi';

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': isHi ? 'होम' : 'Home',
        'item': isHi ? 'https://www.sanatan-sangam.com/hi' : 'https://www.sanatan-sangam.com',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': isHi ? 'संगीत' : 'Music',
        'item': isHi ? 'https://www.sanatan-sangam.com/hi/music' : 'https://www.sanatan-sangam.com/music',
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      {children}
    </>
  );
}
