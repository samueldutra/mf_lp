'use client';

import { useTranslations } from 'next-intl';
import FadeIn from '../animations/FadeIn';
import Image from 'next/image';

export default function Philosophy() {
    const t = useTranslations('Philosophy');

    return (
        <section id="philosophy" className="py-32 bg-dark-gray relative overflow-hidden flex items-center justify-center min-h-[60vh]">
            {/* Background Image with Parallax-like feel (fixed) */}
            <div className="absolute inset-0 opacity-30">
                <Image
                    src="/images/philosophy-bg.jpg" // Placeholder
                    alt="Background"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
                <FadeIn>
                    <div className="w-24 h-1 bg-gold mx-auto mb-12" />
                    <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-12 italic">
                        &ldquo;{t('quote')}&rdquo;
                    </h2>
                    <div className="flex flex-col items-center gap-4">
                        <span className="font-sans text-gold tracking-[0.2em] uppercase text-sm font-bold">
                            {t('title')}
                        </span>
                        <span className="font-serif text-2xl text-white">
                            {t('author')}
                        </span>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
