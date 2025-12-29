'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSelector() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    console.log('LanguageSelector Render:', { locale, pathname });

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        console.log('LanguageSelector Change:', { current: locale, next: nextLocale, pathname });

        startTransition(() => {
            // Replace the locale in the pathname
            // Assuming pathname starts with /[locale]/...
            const segments = pathname.split('/');
            segments[1] = nextLocale;
            const newPath = segments.join('/');
            console.log('LanguageSelector Navigating to:', newPath);

            router.replace(newPath);
        });
    };

    return (
        <div className="relative flex items-center">
            <Globe className="w-4 h-4 mr-2 text-dark-gray" />
            <select
                value={locale}
                onChange={onSelectChange}
                disabled={isPending}
                className="bg-transparent text-sm font-medium text-dark-gray focus:outline-none cursor-pointer appearance-none pr-4"
            >
                <option value="pt">PT</option>
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="it">IT</option>
                <option value="es">ES</option>
                <option value="de">DE</option>
            </select>
        </div>
    );
}
