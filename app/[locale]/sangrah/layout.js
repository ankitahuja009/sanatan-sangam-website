export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isHi = locale === 'hi';

  return {
    title: isHi ? 'संग्रह — आरती, चालीसा, मंत्र, त्यौहार और आयुर्वेद संग्रह' : 'Sangrah — Aarti, Chalisa, Mantra, Festivals & Ayurveda Collection',
    description: isHi
      ? 'हिंदू पवित्र ग्रंथों के संपूर्ण पुस्तकालय का अन्वेषण करें — आरती गीत, चालीसा, मंत्र, देवता विश्वकोश, त्यौहार गाइड और आयुर्वेदिक उपचार। सनातन संगम पर सब एक ही स्थान पर।'
      : 'Explore a complete library of Hindu sacred texts — Aarti lyrics, Chalisa, Mantras, Deity Encyclopedia, Festival Guide & Ayurvedic Remedies. All in one place on Sanatan Sangam.',
    keywords: [
      'aarti collection', 'chalisa collection', 'mantra collection', 'Hindu scripture',
      'om jai jagdish hare', 'Hanuman Chalisa', 'Gayatri Mantra', 'ayurvedic remedies',
      'festival guide Hindu', 'deity encyclopedia', 'Sanatan Sangam sangrah', 'Hindu texts',
    ],
    openGraph: {
      title: isHi ? 'संग्रह — पूर्ण हिंदू पवित्र ग्रंथ संग्रह | सनातन संगम' : 'Sangrah — Complete Hindu Sacred Texts Collection | Sanatan Sangam',
      description: isHi
        ? 'आरती गीत, चालीसा, मंत्र, देवता विश्वकोश, त्यौहार गाइड और आयुर्वेदिक उपचार — एक ही स्थान पर संपूर्ण सनातन पुस्तकालय।'
        : 'Aarti lyrics, Chalisa, Mantras, Deity Encyclopedia, Festival Guide & Ayurvedic Remedies — the complete Sanatan library in one place.',
      url: isHi ? 'https://sanatan-sangam.com/hi/sangrah' : 'https://sanatan-sangam.com/sangrah',
      images: [{ url: 'https://pub-a3540a1b218c43298ca3a816c685b5e7.r2.dev/app-pics/SS%20logo%20without%20text.png' }],
    },

  };
}

export default async function SangrahLayout({ children, params }) {
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
