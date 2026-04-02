import { CITIES } from '@/lib/celestial';

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const { type, city: cityParam, locale } = resolvedParams;
    const isHi = locale === 'hi';

    const city = CITIES.find(c => c.name.toLowerCase() === cityParam.toLowerCase());

    if (!city) {
        return {
            title: isHi ? 'शहर नहीं मिला' : 'City Not Found',
        };
    }

    const isSunPage = type === 'sunrise-sunset';
    const cityName = isHi ? (city.nameHi || city.name) : city.name;
    
    const title = isSunPage
        ? isHi ? `${cityName} में आज सूर्योदय और सूर्यास्त का समय` : `Sunrise & Sunset Timings in ${city.name} Today`
        : isHi ? `${cityName} में आज चंद्रोदय और चंद्रास्त का समय` : `Moonrise & Moonset Timings in ${city.name} Today`;

    const description = isSunPage
        ? isHi 
            ? `${cityName} में आज के सूर्योदय, सूर्यास्त, अभिजीत मुहूर्त, राहु काल और अन्य शुभ समय की सटीक जानकारी प्राप्त करें। दैनिक पूजा और ज्योतिष के लिए उपयोगी।`
            : `Check accurate daily sunrise, sunset, Abhijeet Muhurta, Rahu Kaal, and other auspicious timings in ${city.name}. Perfect for your daily spiritual rituals, pooja, and astrology.`
        : isHi
            ? `${cityName} में आज के चंद्रोदय, चंद्रास्त और शुभ समय की सटीक जानकारी प्राप्त करें। दैनिक आध्यात्मिक अनुष्ठानों, पूजा और ज्योतिष के लिए सही।`
            : `Check accurate daily moonrise, moonset, and auspicious timings in ${city.name}. Perfect for your daily spiritual rituals, pooja, and astrology.`;

    const absoluteUrl = `https://www.sanatan-sangam.com${isHi ? '/hi' : ''}/panchang/${type}/${cityParam.toLowerCase()}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            siteName: 'Sanatan Sangam',
            url: absoluteUrl,
        },
        alternates: {
            canonical: absoluteUrl,
            languages: {
                'en': `https://www.sanatan-sangam.com/panchang/${type}/${cityParam.toLowerCase()}`,
                'hi': `https://www.sanatan-sangam.com/hi/panchang/${type}/${cityParam.toLowerCase()}`,
                'x-default': `https://www.sanatan-sangam.com/panchang/${type}/${cityParam.toLowerCase()}`,
            },
        },
    };
}

export default async function Layout({ children, params }) {
    const { type, city: cityParam, locale } = await params;
    const isHi = locale === 'hi';
    const city = CITIES.find(c => c.name.toLowerCase() === cityParam.toLowerCase());
    const cityName = city ? (isHi ? (city.nameHi || city.name) : city.name) : cityParam;
    const typeName = type === 'sunrise-sunset' 
        ? (isHi ? 'सूर्योदय-सूर्यास्त' : 'Sunrise & Sunset')
        : (isHi ? 'चंद्रोदय-चंद्रास्त' : 'Moonrise & Moonset');

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
                'name': isHi ? 'पंचांग' : 'Panchang',
                'item': isHi ? `https://www.sanatan-sangam.com/hi/panchang/${type}/${cityParam.toLowerCase()}` : `https://www.sanatan-sangam.com/panchang/${type}/${cityParam.toLowerCase()}`,
            },
            {
                '@type': 'ListItem',
                'position': 3,
                'name': typeName,
                'item': isHi ? `https://www.sanatan-sangam.com/hi/panchang/${type}/${cityParam.toLowerCase()}` : `https://www.sanatan-sangam.com/panchang/${type}/${cityParam.toLowerCase()}`,
            },
            {
                '@type': 'ListItem',
                'position': 4,
                'name': cityName,
                'item': isHi ? `https://www.sanatan-sangam.com/hi/panchang/${type}/${cityParam.toLowerCase()}` : `https://www.sanatan-sangam.com/panchang/${type}/${cityParam.toLowerCase()}`,
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
