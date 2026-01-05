'use client';

import { useTranslations } from 'next-intl';
import FadeIn from '../animations/FadeIn';
import { Quote } from 'lucide-react';

export default function Testimonials() {
    const t = useTranslations('Testimonials');

    return (
        <section id="testimonials" className="py-24 bg-primary-pink/10">
            <div className="container-custom">
                <FadeIn className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-white">
                        {t('title')}
                    </h2>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[0, 1].map((i) => (
                        <FadeIn key={i} delay={i * 0.2} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                            <Quote className="w-10 h-10 text-gold/20 absolute top-6 left-6" />
                            <div className="relative z-10 pt-8">
                                <p className="text-dark-gray/80 text-lg italic mb-6 leading-relaxed">
                                    &ldquo;{t(`items.${i}.text`)}&rdquo;
                                </p>
                                <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-serif font-bold text-xl">
                                        {t(`items.${i}.name`).charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-bold text-dark-gray">
                                            {t(`items.${i}.name`)}
                                        </div>
                                        <div className="text-xs text-gold uppercase tracking-wider">
                                            {t(`items.${i}.role`)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
