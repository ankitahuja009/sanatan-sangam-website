export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isHi = locale === 'hi';

  return {
    title: isHi ? 'दैनिक राशिफल, पंचांग और मुफ्त कुंडली जन्म चार्ट' : 'Daily Horoscope, Panchang & Free Kundli Birth Chart',
    description: isHi
      ? 'सभी 12 राशियों के लिए व्यक्तिगत दैनिक राशिफल प्राप्त करें, आज का पंचांग तिथि, नक्षत्र, वार और योग के साथ, और मांगलिक दोष विश्लेषण के साथ अपनी पूर्ण कुंडली जन्म चार्ट तैयार करें — सनातन संगम पर निःशुल्क।'
      : 'Get personalized daily horoscope for all 12 zodiac signs, today\'s Panchang with Tithi, Nakshatra, Vaar & Yoga, and generate your complete Kundli birth chart with Manglik Dosh analysis — free on Sanatan Sangam.',
    keywords: [
      'daily horoscope', 'today panchang', 'free kundli', 'birth chart', 'Hindu astrology',
      'Tithi Nakshatra today', 'zodiac predictions', 'Manglik Dosh', 'kundli generator',
      'Sanatan Sangam astro', 'Vedic astrology app', 'sunrise sunset today',
    ],
    openGraph: {
      title: isHi ? 'दैनिक राशिफल, पंचांग और मुफ्त कुंडली चार्ट | सनातन संगम' : 'Daily Horoscope, Panchang & Free Kundli Chart | Sanatan Sangam',
      description: isHi
        ? 'अपना दैनिक राशिफल, आज का पंचांग (तिथि, नक्षत्र, वार, योग, सूर्योदय और सूर्यास्त) देखें और अपनी पूर्ण कुंडली जन्म चार्ट तैयार करें — सनातन संगम पर सब कुछ मुफ्त।'
        : 'Check your daily horoscope, today\'s Panchang (Tithi, Nakshatra, Vaar, Yoga, Sunrise & Sunset) and generate your complete Kundli birth chart — all free on Sanatan Sangam.',
      url: isHi ? 'https://sanatan-sangam.com/hi/astro' : 'https://sanatan-sangam.com/astro',
      images: [{ url: 'https://pub-a3540a1b218c43298ca3a816c685b5e7.r2.dev/app-pics/SS%20logo%20without%20text.png' }],
    },
    alternates: {
      canonical: isHi ? 'https://sanatan-sangam.com/hi/astro' : 'https://sanatan-sangam.com/astro',
      languages: {
        'en': 'https://sanatan-sangam.com/astro',
        'hi': 'https://sanatan-sangam.com/hi/astro',
        'x-default': 'https://sanatan-sangam.com/astro',
      },
    },
  };
}

export default async function AstroLayout({ children, params }) {
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
        'item': isHi ? 'https://sanatan-sangam.com/hi' : 'https://sanatan-sangam.com',
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': isHi ? 'ज्योतिष' : 'Astro',
        'item': isHi ? 'https://sanatan-sangam.com/hi/astro' : 'https://sanatan-sangam.com/astro',
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
