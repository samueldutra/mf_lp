'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '../ui/Button';
import FadeIn from '../animations/FadeIn';
import ScaleIn from '../animations/ScaleIn';
import Reveal from '../animations/Reveal';
import { Check, Star } from 'lucide-react';

export default function Mentorship() {
    const t = useTranslations('Mentorship');

    return (
        <section id="mentorship" className="py-24 bg-primary-pink/20 overflow-hidden">
            <div className="container-custom">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden">
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-pink/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

                    <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                        {/* Content */}
                        <div className="space-y-8">
                            <FadeIn>
                                <ScaleIn className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold/10 text-gold text-sm font-medium mb-4">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span>Exclusive Program</span>
                                </ScaleIn>
                                <Reveal width="100%">
                                    <h2 className="font-serif text-4xl md:text-5xl text-dark-gray mb-4">
                                        {t('title')}
                                    </h2>
                                </Reveal>
                                <p className="text-gold text-xl font-medium mb-4">
                                    {t('subtitle')}
                                </p>
                                <p className="text-dark-gray/70 text-lg leading-relaxed">
                                    {t('description')}
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <ul className="space-y-4">
                                    {[0, 1, 2, 3].map((i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-gold" />
                                            </div>
                                            <span className="text-dark-gray/80">
                                                {t(`features.${i}`)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </FadeIn>

                            <FadeIn delay={0.4}>
                                <Button size="lg" className="w-full md:w-auto">
                                    {t('cta')}
                                </Button>
                            </FadeIn>
                        </div>

                        {/* Image */}
                        <FadeIn direction="left" delay={0.2} className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
                            <Image
                                src="/images/marcia-mentorship.png"
                                alt="Mentoria Márcia Freitas"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
