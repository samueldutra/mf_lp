import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Dancing_Script } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    variable: "--font-cormorant",
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

const dancing = Dancing_Script({
    subsets: ["latin"],
    variable: "--font-dancing",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Márcia Freitas Master | Extensão de Cílios & Micropigmentação",
    description: "Profissional internacional em extensão de cílios, micropigmentação e mentoria.",
};

import WhatsAppButton from '@/components/ui/WhatsAppButton';

export default async function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}>) {
    const { locale } = await params;
    const messages = await getMessages();

    return (
        <html lang={locale} className={`${cormorant.variable} ${montserrat.variable} ${dancing.variable}`}>
            <body className={montserrat.className} suppressHydrationWarning={true}>
                <NextIntlClientProvider messages={messages}>
                    {children}
                    <WhatsAppButton />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
