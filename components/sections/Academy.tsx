'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '../ui/Button';
import FadeIn from '../animations/FadeIn';
import ScaleIn from '../animations/ScaleIn';
import Reveal from '../animations/Reveal';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Academy() {
    const t = useTranslations('Academy');

    return (
        <section id="academy" className="py-24 bg-dark-gray text-white overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image Side */}
                    <FadeIn direction="right" className="relative order-2 lg:order-1">
                        <div className="relative aspect-[2/3] rounded-2xl overflow-hidden bg-[#FDF8F6]">
                            <Image
                                src="/images/marcia-academy.jpg"
                                alt="Márcia Freitas Academy"
                                fill
                                className="object-contain"
                            />
                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>

                        {/* Floating Badge */}
                        <ScaleIn delay={0.5} className="absolute -bottom-8 -right-8 hidden md:block">
                            <div className="bg-gold text-white p-8 rounded-full flex flex-col items-center justify-center w-40 h-40 shadow-xl animate-spin-slow">
                                <span className="font-serif text-3xl font-bold">15+</span>
                                <span className="text-xs uppercase tracking-widest text-center">Países</span>
                            </div>
                        </ScaleIn>
                    </FadeIn>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <FadeIn>
                            <Reveal width="100%">
                                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
                                    {t('title')}
                                </h2>
                            </Reveal>
                            <p className="text-gold text-xl font-medium mb-6">
                                {t('subtitle')}
                            </p>
                            <p className="text-white/80 text-lg leading-relaxed mb-8">
                                {t('description')}
                            </p>
                        </FadeIn>

                        {/* Stats Grid */}
                        <FadeIn delay={0.2}>
                            <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8 mb-8">
                                {[0, 1, 2].map((i) => (
                                    <div key={i} className="text-center lg:text-left">
                                        <div className="font-serif text-3xl md:text-4xl font-bold text-white mb-1">
                                            {t(`stats.${i}.value`)}
                                        </div>
                                        <div className="text-xs uppercase tracking-wider text-white/60">
                                            {t(`stats.${i}.label`)}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.4}>
                            <Button
                                size="lg"
                                className="bg-white text-dark-gray hover:bg-gold hover:text-white border-none"
                                icon={<ArrowRight className="w-5 h-5" />}
                            >
                                {t('cta')}
                            </Button>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
