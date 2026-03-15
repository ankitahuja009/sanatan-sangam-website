export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isHi = locale === 'hi';

  return {
    title: isHi ? 'लाइव दर्शन — 50+ पवित्र मंदिर लाइव स्ट्रीम' : 'Live Darshan — 50+ Sacred Temple Streams',
    description: isHi
      ? 'भारत के 50+ पवित्र मंदिरों से लाइव दर्शन देखें — सभी 12 ज्योतिर्लिंग, चार धाम, वैष्णो देवी, राम मंदिर अयोध्या, तिरुपति बालाजी और बहुत कुछ। सनातन संगम के माध्यम से कभी भी, कहीं भी स्ट्रीम करें।'
      : 'Watch live darshan from 50+ sacred temples across India — all 12 Jyotirlingas, Char Dham, Vaishno Devi, Ram Mandir Ayodhya, Tirupati Balaji & more. Stream anytime, anywhere via Sanatan Sangam.',
    keywords: [
      'live darshan', 'temple live stream', 'Jyotirlinga darshan', 'Kashi Vishwanath live',
      'Tirupati Balaji darshan', 'Ram Mandir Ayodhya', 'Char Dham darshan', 'online temple darshan',
      'Vaishno Devi live', 'Somnath temple live', 'Sanatan Sangam darshan',
    ],
    openGraph: {
      title: isHi ? '50+ पवित्र मंदिरों से लाइव दर्शन | सनातन संगम' : 'Live Darshan from 50+ Sacred Temples | Sanatan Sangam',
      description: isHi
        ? 'सभी 12 ज्योतिर्लिंग, चार धाम, राम मंदिर अयोध्या, वैष्णो देवी, तिरुपति बालाजी और अन्य मंदिरों से लाइव दर्शन देखें — सनातन संगम पर 24x7 स्ट्रीमिंग।'
        : 'Watch live darshan from all 12 Jyotirlingas, Char Dham, Ram Mandir Ayodhya, Vaishno Devi, Tirupati Balaji & more — 24x7 streaming on Sanatan Sangam.',
      url: isHi ? 'https://sanatan-sangam.com/hi/darshan' : 'https://sanatan-sangam.com/darshan',
      images: [{ url: 'https://pub-a3540a1b218c43298ca3a816c685b5e7.r2.dev/app-pics/SS%20logo%20without%20text.png' }],
    },
    alternates: {
      canonical: isHi ? 'https://sanatan-sangam.com/hi/darshan' : 'https://sanatan-sangam.com/darshan',
      languages: {
        'en': 'https://sanatan-sangam.com/darshan',
        'hi': 'https://sanatan-sangam.com/hi/darshan',
        'x-default': 'https://sanatan-sangam.com/darshan',
      },
    },
  };
}

export default async function DarshanLayout({ children, params }) {
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
        'name': isHi ? 'लाइव दर्शन' : 'Live Darshan',
        'item': isHi ? 'https://sanatan-sangam.com/hi/darshan' : 'https://sanatan-sangam.com/darshan',
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
