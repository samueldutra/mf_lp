'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Button } from '../ui/Button';
import FadeIn from '../animations/FadeIn';
import Reveal from '../animations/Reveal';
import { ArrowRight } from 'lucide-react';

export default function Academy() {
    const t = useTranslations('Academy');
    const whatsappMessage = encodeURIComponent(t('whatsappOnline'));
    const whatsappLink = `https://api.whatsapp.com/send/?phone=41766711162&text=${whatsappMessage}&type=phone_number&app_absent=0`;

    return (
        <section id="academy" className="py-24 bg-dark-gray text-white overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
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

                        <FadeIn delay={0.25} className="mt-8">
                            <div className="space-y-4">
                                <p className="text-white/80 text-sm uppercase tracking-widest">
                                    {t('enrollPrompt')}
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <Button
                                        size="lg"
                                        className="bg-white text-dark-gray hover:bg-gold hover:text-white border-none"
                                        icon={<ArrowRight className="w-5 h-5" />}
                                        href="https://lp.marciafreitasbeautyacademy.com/"
                                    >
                                        {t('ctaPresential')}
                                    </Button>
                                    <Button
                                        size="lg"
                                        variant="outline"
                                        className="border-white/40 text-white hover:border-gold hover:text-gold"
                                        icon={<ArrowRight className="w-5 h-5" />}
                                        href={whatsappLink}
                                    >
                                        {t('ctaOnline')}
                                    </Button>
                                </div>
                            </div>
                        </FadeIn>
                    </FadeIn>

                    {/* Content Side */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <FadeIn>
                            <div className="space-y-4 mb-6">
                                <Reveal width="100%">
                                    <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
                                        {t('title')}
                                    </h2>
                                </Reveal>
                                <p className="text-gold text-xl font-medium">
                                    {t('subtitle')}
                                </p>
                            </div>
                            <p className="text-white/85 text-lg leading-relaxed">
                                {t('intro')}
                            </p>
                            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
                                <div className="text-xs uppercase tracking-widest text-white/60 mb-3">
                                    {t('format.heading')}
                                </div>
                                <p className="text-white text-lg font-medium">
                                    {t('format.summary')}
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.15}>
                            <div className="grid gap-4">
                                {[0, 1].map((i) => (
                                    <div
                                        key={i}
                                        className="rounded-2xl border border-white/10 bg-white/5 p-5"
                                    >
                                        <div className="text-gold text-sm uppercase tracking-widest mb-2">
                                            {t(`days.${i}.title`)}
                                        </div>
                                        <p className="text-white/85 leading-relaxed">
                                            {t(`days.${i}.description`)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.25}>
                            <div className="rounded-2xl border border-gold/30 bg-gradient-to-br from-gold/10 to-transparent p-6">
                                <div className="text-gold text-sm uppercase tracking-widest mb-2">
                                    {t('after.heading')}
                                </div>
                                <p className="text-white/90 leading-relaxed">
                                    {t('after.description')}
                                </p>
                                <p className="text-white/70 text-sm mt-4">
                                    {t('closing')}
                                </p>
                            </div>
                        </FadeIn>

                    </div>
                </div>
            </div>
        </section>
    );
}
