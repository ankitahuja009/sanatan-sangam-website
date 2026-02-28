import { CITIES } from '@/lib/celestial';

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const { type, city: cityParam } = resolvedParams;

    const city = CITIES.find(c => c.name.toLowerCase() === cityParam.toLowerCase());

    if (!city) {
        return {
            title: 'City Not Found',
        };
    }

    const isSunPage = type === 'sunrise-sunset';
    const title = isSunPage
        ? `Sunrise & Sunset Timings in ${city.name} Today`
        : `Moonrise & Moonset Timings in ${city.name} Today`;

    const description = isSunPage
        ? `Check accurate daily sunrise, sunset, Abhijeet Muhurta, Rahu Kaal, and other auspicious timings in ${city.name}. Perfect for your daily spiritual rituals, pooja, and astrology.`
        : `Check accurate daily moonrise, moonset, and auspicious timings in ${city.name}. Perfect for your daily spiritual rituals, pooja, and astrology.`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            siteName: 'Sanatan Sangam'
        },
        twitter: {
            card: 'summary',
            title,
            description,
        },
        alternates: {
            canonical: `/panchang/${type}/${cityParam.toLowerCase()}`
        }
    };
}

export default function Layout({ children }) {
    return children;
}
