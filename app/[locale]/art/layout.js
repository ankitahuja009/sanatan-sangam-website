export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isHi = locale === 'hi';

  return {
    title: isHi ? 'आर्टमेट — एआई आध्यात्मिक चित्र और वर्चुअल मंदिर तीर्थयात्रा' : 'Artmate — AI Spiritual Portraits & Virtual Temple Pilgrimages',
    description: isHi
      ? '30+ देवताओं और गुरुओं (दिव्य छवि) के साथ शानदार एआई-संचालित दिव्य चित्र बनाएं या घर से वस्तुतः पवित्र मंदिरों (तीर्थ यात्रा) की यात्रा करें। एचडी, 2K, या 4K में ऑर्डर करें। विशेष रूप से सनातन संगम पर।'
      : 'Create stunning AI-powered divine portraits with 30+ deities & gurus (Divya Chhavi) or visit sacred temples virtually from home (Teerth Yatra). Order in HD, 2K, or 4K. Exclusive to Sanatan Sangam.',
    keywords: [
      'AI spiritual art', 'divine portrait', 'Divya Chhavi', 'Teerth Yatra virtual',
      'Hindu deity portrait', 'AI portrait app', 'spiritual AI', 'temple virtual visit',
      'Sanatan Sangam art', 'AI god image', 'divine image generator',
    ],
    openGraph: {
      title: isHi ? 'आर्टमेट — अपने पसंदीदा देवताओं के साथ एआई आध्यात्मिक चित्र | सनातन संगम' : 'Artmate — AI Spiritual Portraits with Your Favorite Deities | Sanatan Sangam',
      description: isHi
        ? 'अपने आप को दिव्य प्रकाश में देखें। 30+ देवताओं और गुरुओं के साथ सुंदर एआई चित्र बनाएं, या भारत के सबसे पवित्र मंदिरों की वस्तुतः यात्रा करें।'
        : 'See yourself in the divine light. Create beautiful AI portraits with 30+ deities & gurus, or visit India\'s holiest temples virtually. Offering Divya Chhavi & Teerth Yatra experiences.',
      url: isHi ? 'https://www.sanatan-sangam.com/hi/art' : 'https://www.sanatan-sangam.com/art',
      images: [{ url: 'https://pub-a3540a1b218c43298ca3a816c685b5e7.r2.dev/app-pics/SS%20logo%20without%20text.png' }],
    },
    alternates: {
      canonical: isHi ? 'https://www.sanatan-sangam.com/hi/art' : 'https://www.sanatan-sangam.com/art',
      languages: {
        'en': 'https://www.sanatan-sangam.com/art',
        'hi': 'https://www.sanatan-sangam.com/hi/art',
        'x-default': 'https://www.sanatan-sangam.com/art',
      },
    },
  };
}

export default async function ArtLayout({ children, params }) {
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
        'name': isHi ? 'कला' : 'Art',
        'item': isHi ? 'https://www.sanatan-sangam.com/hi/art' : 'https://www.sanatan-sangam.com/art',
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
