export async function generateMetadata({ params }) {
  const { locale } = await params;
  const isHi = locale === 'hi';

  return {
    title: isHi ? 'उपहार स्टोर — प्रीमियम दिव्य फोटो फ्रेम्स ऑर्डर करें' : 'Uphar Store — Order Premium Divine Photo Frames',
    description: isHi
      ? 'अपने आर्टमेट एआई आध्यात्मिक चित्रों को शानदार वॉल आर्ट में बदलें। क्लासिक ब्लैक या वॉलनट ब्राउन में प्रीमियम फोटो फ्रेम ऑर्डर करें, जो पूरे भारत में आपके घर तक पहुँचाए जाएंगे। विशेष रूप से सनातन संगम पर।'
      : 'Turn your Artmate AI spiritual portraits into stunning wall art. Order premium photo frames in Classic Black or Walnut Brown, delivered to your doorstep across India. Exclusive to Sanatan Sangam.',
    keywords: [
      'divine photo frame', 'spiritual wall art', 'Hindu deity frame', 'god photo frame',
      'Uphar store', 'spiritual home decor', 'deity portrait frame', 'temple art frame',
      'Sanatan Sangam gift', 'spiritual gift', 'religious home decor India',
    ],
    openGraph: {
      title: isHi ? 'उपहार स्टोर — प्रीमियम दिव्य फोटो फ्रेम्स | सनातन संगम' : 'Uphar Store — Premium Divine Photo Frames | Sanatan Sangam',
      description: isHi
        ? 'अपने एआई-जेनरेटेड आध्यात्मिक चित्रों के लिए प्रीमियम वॉल आर्ट फ्रेम ऑर्डर करें। क्लासिक ब्लैक या वॉलनट ब्राउन — पूरे भारत में वितरित। एकदम सही आध्यात्मिक उपहार।'
        : 'Order premium wall art frames for your AI-generated spiritual portraits. Classic Black or Walnut Brown — delivered across India. The perfect spiritual gift.',
      url: isHi ? 'https://sanatan-sangam.com/hi/uphar' : 'https://sanatan-sangam.com/uphar',
      images: [{ url: 'https://pub-a3540a1b218c43298ca3a816c685b5e7.r2.dev/app-pics/SS%20logo%20without%20text.png' }],
    },
    alternates: {
      canonical: isHi ? 'https://sanatan-sangam.com/hi/uphar' : 'https://sanatan-sangam.com/uphar',
      languages: {
        'en': 'https://sanatan-sangam.com/uphar',
        'hi': 'https://sanatan-sangam.com/hi/uphar',
        'x-default': 'https://sanatan-sangam.com/uphar',
      },
    },
  };
}

export default async function UpharLayout({ children, params }) {
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
        'name': isHi ? 'उपहार' : 'Uphar',
        'item': isHi ? 'https://sanatan-sangam.com/hi/uphar' : 'https://sanatan-sangam.com/uphar',
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
