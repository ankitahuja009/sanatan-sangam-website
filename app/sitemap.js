import { aartis } from './[locale]/sangrah/aarti/data';
import { chalisas } from './[locale]/sangrah/chalisa/data';
import { mantras } from './[locale]/sangrah/mantra/data';
import { CITIES } from '@/lib/celestial';

export default function sitemap() {
    const baseUrl = 'https://sanatan-sangam.com';
    const now = new Date().toISOString();

    const staticRoutes = [
        { url: '', priority: 1.0, changeFrequency: 'daily' },
        { url: '/about', priority: 0.7, changeFrequency: 'monthly' },
        { url: '/darshan', priority: 0.9, changeFrequency: 'daily' },
        { url: '/art', priority: 0.8, changeFrequency: 'weekly' },
        { url: '/wish', priority: 0.8, changeFrequency: 'weekly' },
        { url: '/music', priority: 0.8, changeFrequency: 'weekly' },
        { url: '/uphar', priority: 0.7, changeFrequency: 'weekly' },
        { url: '/astro', priority: 0.9, changeFrequency: 'daily' },
        { url: '/sangrah', priority: 0.9, changeFrequency: 'weekly' },
        { url: '/sangrah/aarti', priority: 0.85, changeFrequency: 'monthly' },
        { url: '/sangrah/chalisa', priority: 0.85, changeFrequency: 'monthly' },
        { url: '/sangrah/mantra', priority: 0.85, changeFrequency: 'monthly' },
        { url: '/sangrah/ayurveda', priority: 0.8, changeFrequency: 'monthly' },
        { url: '/sangrah/festivals', priority: 0.85, changeFrequency: 'monthly' },
        { url: '/sangrah/deities', priority: 0.85, changeFrequency: 'monthly' },
        { url: '/blog', priority: 0.8, changeFrequency: 'weekly' },
        { url: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
        { url: '/terms-of-use', priority: 0.3, changeFrequency: 'yearly' },
        { url: '/disclaimer', priority: 0.3, changeFrequency: 'yearly' },
    ];

    const generateAlternates = (path) => ({
        en: `${baseUrl}${path}`,
        hi: `${baseUrl}/hi${path}`
    });

    const routes = staticRoutes.map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
            languages: generateAlternates(route.url)
        }
    }));

    const aartiRoutes = aartis.map((a) => ({
        url: `${baseUrl}/sangrah/aarti/${a.slug}`,
        lastModified: new Date(a.updatedAt || now).toISOString(),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
            languages: generateAlternates(`/sangrah/aarti/${a.slug}`)
        }
    }));

    const chalisaRoutes = chalisas.map((c) => ({
        url: `${baseUrl}/sangrah/chalisa/${c.slug}`,
        lastModified: new Date(c.updatedAt || now).toISOString(),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
            languages: generateAlternates(`/sangrah/chalisa/${c.slug}`)
        }
    }));

    const mantraRoutes = mantras.map((m) => ({
        url: `${baseUrl}/sangrah/mantra/${m.slug}`,
        lastModified: new Date(m.updatedAt || now).toISOString(),
        changeFrequency: 'monthly',
        priority: 0.8,
        alternates: {
            languages: generateAlternates(`/sangrah/mantra/${m.slug}`)
        }
    }));

    const panchangSunRoutes = CITIES.map((c) => ({
        url: `${baseUrl}/panchang/sunrise-sunset/${c.name.toLowerCase()}`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 0.9,
        alternates: {
            languages: generateAlternates(`/panchang/sunrise-sunset/${c.name.toLowerCase()}`)
        }
    }));
    const panchangMoonRoutes = CITIES.map((c) => ({
        url: `${baseUrl}/panchang/moonrise-moonset/${c.name.toLowerCase()}`,
        lastModified: now,
        changeFrequency: 'daily',
        priority: 0.9,
        alternates: {
            languages: generateAlternates(`/panchang/moonrise-moonset/${c.name.toLowerCase()}`)
        }
    }));

    return [...routes, ...aartiRoutes, ...chalisaRoutes, ...mantraRoutes, ...panchangSunRoutes, ...panchangMoonRoutes];
}
