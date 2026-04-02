export default function robots() {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/'],
            },
            {
                userAgent: ['OAI-SearchBot', 'ChatGPT-User', 'GoogleExtended', 'anthropic-ai', 'ClaudeBot', 'PerplexityBot'],
                allow: '/',
                disallow: ['/api/'],
            }
        ],
        sitemap: 'https://www.sanatan-sangam.com/sitemap.xml',
    };
}
