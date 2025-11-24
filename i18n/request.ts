import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;

    if (!locale || !['pt', 'en', 'fr', 'it', 'es', 'de'].includes(locale)) {
        locale = 'pt';
    }

    console.log('i18n/request.ts: Resolving locale:', { locale });

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});
