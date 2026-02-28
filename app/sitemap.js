export default function sitemap() {
    const baseUrl = 'https://sanatan-sangam.com';
    const now = new Date().toISOString();

    const routes = [
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

    return routes.map((route) => ({
        url: `${baseUrl}${route.url}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
    }));
}
