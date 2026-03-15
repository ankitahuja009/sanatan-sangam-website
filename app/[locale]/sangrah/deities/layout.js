export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isHi = locale === 'hi';

  const title = isHi 
    ? 'हिंदू देवी-देवता विश्वकोश — कहानियाँ, मंत्र और प्रतीक' 
    : 'Hindu Deities Encyclopedia — Stories, Mantras & Symbols';
  const description = isHi
    ? 'हिंदू देवी-देवताओं के बारे में विस्तृत जानकारी — उनके अवतार, मंत्र, प्रमुख मंदिर और प्रतीकात्मक अर्थ। शिव, कृष्ण, दुर्गा, गणेश और अन्य देवताओं का अन्वेषण करें।'
    : 'Detailed information about Hindu Gods and Goddesses — their avatars, mantras, major temples, and symbolic meanings. Explore Shiva, Krishna, Durga, Ganesha, and more.';

  return {
    title,
    description,
    keywords: ['Hindu deities', 'Hindu Gods', 'Goddesses', 'Shiva', 'Krishna', 'Durga', 'Ganesha', 'Hanuman', 'deity encyclopedia', 'Hindu mythology'],
    alternates: {
      canonical: isHi ? 'https://sanatan-sangam.com/hi/sangrah/deities' : 'https://sanatan-sangam.com/sangrah/deities',
      languages: {
        'en': 'https://sanatan-sangam.com/sangrah/deities',
        'hi': 'https://sanatan-sangam.com/hi/sangrah/deities',
        'x-default': 'https://sanatan-sangam.com/sangrah/deities',
      },
    },
    openGraph: {
      title,
      description,
      url: isHi ? 'https://sanatan-sangam.com/hi/sangrah/deities' : 'https://sanatan-sangam.com/sangrah/deities',
      images: [{ url: 'https://pub-a3540a1b218c43298ca3a816c685b5e7.r2.dev/app-pics/SS%20logo%20without%20text.png' }],
    },
  };
}

export default async function DeitiesLayout({ children, params }) {
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
        'name': isHi ? 'देवी-देवता' : 'Deities',
        'item': isHi ? 'https://sanatan-sangam.com/hi/sangrah/deities' : 'https://sanatan-sangam.com/sangrah/deities',
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
