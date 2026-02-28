import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
    locales: ['en', 'hi', 'ta', 'te', 'kn', 'bn', 'ml', 'mr', 'or', 'pa', 'gu'],
    defaultLocale: 'en',
    localePrefix: 'as-needed',
});
