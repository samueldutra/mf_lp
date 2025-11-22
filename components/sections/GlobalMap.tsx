'use client';

import { useTranslations } from 'next-intl';
import FadeIn from '../animations/FadeIn';
import ScaleIn from '../animations/ScaleIn';
import Reveal from '../animations/Reveal';
import Image from 'next/image';

export default function GlobalMap() {
    const t = useTranslations('Map');

    const locations = [
        { top: '60%', left: '32%', label: 'Brasil' }, // Brazil
        { top: '28%', left: '49%', label: 'Suíça' }, // Switzerland
        { top: '30%', left: '51%', label: 'Itália' }, // Italy
        { top: '29%', left: '53%', label: 'Sérvia' }, // Serbia (Belgrade)
        { top: '40%', left: '62%', label: 'Dubai' }, // Dubai
        { top: '35%', left: '20%', label: 'EUA' }, // USA
        { top: '25%', left: '47%', label: 'França' }, // France
    ];

    return (
        <section id="map" className="py-24 bg-dark-gray text-white relative overflow-hidden">
            {/* Background Map Image */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <Image
                    src="/images/world-map.png" // Placeholder for a world map silhouette
                    alt="World Map"
                    fill
                    className="object-contain object-center"
                />
            </div>

            <div className="container-custom relative z-10">
                <FadeIn className="text-center mb-16">
                    <div className="flex justify-center">
                        <Reveal color="#D4AF37">
                            <h2 className="font-serif text-4xl md:text-5xl mb-4">
                                {t('title')}
                            </h2>
                        </Reveal>
                    </div>
                    <p className="text-gold text-xl">
                        {t('subtitle')}
                    </p>
                </FadeIn>

                {/* Map Container (Visual representation) */}
                <div className="relative w-full aspect-[16/9] max-w-5xl mx-auto mb-16 hidden md:block">
                    {locations.map((loc, index) => (
                        <ScaleIn
                            key={index}
                            delay={index * 0.1}
                            className="absolute w-4 h-4"
                            style={{ top: loc.top, left: loc.left } as any}
                        >
                            <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-75" />
                            <span className="absolute inset-0 rounded-full bg-gold" />
                            <span className="absolute top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-white/80 whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-300">
                                {loc.label}
                            </span>
                        </ScaleIn>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    {[0, 1, 2].map((i) => (
                        <ScaleIn key={i} delay={0.2 + (i * 0.1)} className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <div className="font-serif text-4xl md:text-5xl font-bold text-gold mb-2">
                                {t(`stats.${i}.value`)}
                            </div>
                            <div className="text-sm uppercase tracking-widest text-white/80">
                                {t(`stats.${i}.label`)}
                            </div>
                        </ScaleIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
