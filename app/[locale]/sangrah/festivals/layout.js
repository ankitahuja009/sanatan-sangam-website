export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isHi = locale === 'hi';

  const title = isHi 
    ? 'हिंदू त्यौहार कैलेंडर 2026 — तिथियां, अनुष्ठान और महत्व' 
    : 'Hindu Festival Calendar 2026 — Dates, Rituals & Significance';
  const description = isHi
    ? '2026 के लिए विस्तृत हिंदू त्यौहार पंचांग — होली, दिवाली, नवरात्रि, शिवरात्रि और अधिक। प्रत्येक त्यौहार के लिए सटीक तिथियां, पूजा विधि और मंत्र प्राप्त करें।'
    : 'Detailed Hindu festival calendar for 2026 — Holi, Diwali, Navratri, Shivratri & more. Get exact dates, puja vidhi, and mantras for every festival.';

  return {
    title,
    description,
    keywords: ['festival calendar 2026', 'hindu festivals', 'holi 2026', 'diwali 2026', 'navratri 2026', 'indian festivals', 'panchang 2026'],
    alternates: {
      canonical: isHi ? 'https://sanatan-sangam.com/hi/sangrah/festivals' : 'https://sanatan-sangam.com/sangrah/festivals',
      languages: {
        'en': 'https://sanatan-sangam.com/sangrah/festivals',
        'hi': 'https://sanatan-sangam.com/hi/sangrah/festivals',
        'x-default': 'https://sanatan-sangam.com/sangrah/festivals',
      },
    },
    openGraph: {
      title,
      description,
      url: isHi ? 'https://sanatan-sangam.com/hi/sangrah/festivals' : 'https://sanatan-sangam.com/sangrah/festivals',
      images: [{ url: 'https://pub-a3540a1b218c43298ca3a816c685b5e7.r2.dev/app-pics/SS%20logo%20without%20text.png' }],
    },
  };
}

export default async function FestivalsLayout({ children, params }) {
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
        'name': isHi ? 'संग्रह' : 'Sangrah',
        'item': isHi ? 'https://sanatan-sangam.com/hi/sangrah' : 'https://sanatan-sangam.com/sangrah',
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': isHi ? 'त्यौहार' : 'Festivals',
        'item': isHi ? 'https://sanatan-sangam.com/hi/sangrah/festivals' : 'https://sanatan-sangam.com/sangrah/festivals',
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
