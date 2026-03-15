export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isHi = locale === 'hi';

  return {
    title: isHi ? 'विशमेट — अपने प्रियजनों को व्यक्तिगत दिव्य आशीर्वाद भेजें' : 'Wishmate — Send Personalized Divine Blessings to Your Loved Ones',
    description: isHi
      ? 'जन्मदिन, दिवाली, होली, नवरात्रि, वर्षगांठ और हर अवसर के लिए सुंदर, व्यक्तिगत दिव्य आशीर्वाद कार्ड बनाएं। अपना देवता चुनें, एक व्यक्तिगत स्पर्श जोड़ें, और व्हाट्सएप और इंस्टाग्राम पर तुरंत साझा करें।'
      : 'Create beautiful, personalized divine blessing cards for birthdays, Diwali, Holi, Navratri, anniversaries & every occasion. Choose your deity, add a personal touch, and share instantly on WhatsApp & Instagram.',
    keywords: [
      'divine blessing card', 'Hindu greeting card', 'Diwali wishes', 'birthday blessings',
      'spiritual wishes', 'Wishmate', 'personalized blessings', 'festival wishes app',
      'Sanatan Sangam wish', 'devotional greeting', 'WhatsApp blessings',
    ],
    openGraph: {
      title: isHi ? 'विशमेट — व्यक्तिगत दिव्य आशीर्वाद | सनातन संगम' : 'Wishmate — Personalized Divine Blessings | Sanatan Sangam',
      description: isHi
        ? 'जन्मदिन, दिवाली, होली, नवरात्रि और हर विशेष अवसर के लिए दिव्य आशीर्वाद भेजें। अपने चुने हुए देवता के साथ व्यक्तिगत आशीर्वाद कार्ड बनाएं और तुरंत साझा करें।'
        : 'Send divine blessings for birthdays, Diwali, Holi, Navratri & every special occasion. Create personalized blessing cards with your chosen deity and share instantly.',
      url: isHi ? 'https://sanatan-sangam.com/hi/wish' : 'https://sanatan-sangam.com/wish',
      images: [{ url: 'https://pub-a3540a1b218c43298ca3a816c685b5e7.r2.dev/app-pics/SS%20logo%20without%20text.png' }],
    },
    alternates: {
      canonical: isHi ? 'https://sanatan-sangam.com/hi/wish' : 'https://sanatan-sangam.com/wish',
      languages: {
        'en': 'https://sanatan-sangam.com/wish',
        'hi': 'https://sanatan-sangam.com/hi/wish',
        'x-default': 'https://sanatan-sangam.com/wish',
      },
    },
  };
}

export default async function WishLayout({ children, params }) {
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
        'name': isHi ? 'शुभकामनाएं' : 'Wish',
        'item': isHi ? 'https://sanatan-sangam.com/hi/wish' : 'https://sanatan-sangam.com/wish',
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
