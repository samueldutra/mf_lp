import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // A list of all locales that are supported
    locales: ['pt', 'en', 'fr', 'it', 'es', 'de'],

    // Used when no locale matches
    defaultLocale: 'pt'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(pt|en|fr|it|es|de)/:path*']
};
