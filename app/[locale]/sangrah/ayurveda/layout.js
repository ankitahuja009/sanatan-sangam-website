export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isHi = locale === 'hi';

  const title = isHi 
    ? 'आयुर्वेदिक उपचार और घरेलू नुस्खे — प्राकृतिक स्वास्थ्य समाधान' 
    : 'Ayurvedic Remedies & Home Remedies — Natural Health Solutions';
  const description = isHi
    ? 'सामान्य बीमारियों के लिए प्राचीन आयुर्वेदिक उपचार और प्रभावी घरेलू नुस्खे खोजें। इम्युनिटी, पाचन, त्वचा और बालों की देखभाल के लिए प्रकृति की औषधियां।'
    : 'Discover ancient Ayurvedic remedies and effective home remedies for common ailments. Nature\'s medicine for immunity, digestion, skin, and hair care.';

  return {
    title,
    description,
    keywords: ['ayurvedic remedies', 'home remedies', 'natural healing', 'gharelu nuskhe', 'ayurveda tips', 'herbal medicine', 'immunity boosters'],
    alternates: {
      canonical: isHi ? 'https://sanatan-sangam.com/hi/sangrah/ayurveda' : 'https://sanatan-sangam.com/sangrah/ayurveda',
      languages: {
        'en': 'https://sanatan-sangam.com/sangrah/ayurveda',
        'hi': 'https://sanatan-sangam.com/hi/sangrah/ayurveda',
        'x-default': 'https://sanatan-sangam.com/sangrah/ayurveda',
      },
    },
    openGraph: {
      title,
      description,
      url: isHi ? 'https://sanatan-sangam.com/hi/sangrah/ayurveda' : 'https://sanatan-sangam.com/sangrah/ayurveda',
      images: [{ url: 'https://pub-a3540a1b218c43298ca3a816c685b5e7.r2.dev/app-pics/SS%20logo%20without%20text.png' }],
    },
  };
}

export default async function AyurvedaLayout({ children, params }) {
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
        'name': isHi ? 'आयुर्वेद' : 'Ayurveda',
        'item': isHi ? 'https://sanatan-sangam.com/hi/sangrah/ayurveda' : 'https://sanatan-sangam.com/sangrah/ayurveda',
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
