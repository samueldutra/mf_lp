'use client';

import { useTranslations } from 'next-intl';
import FadeIn from '../animations/FadeIn';
import ServiceCard from '../ui/ServiceCard';

export default function Expertise() {
    const t = useTranslations('Expertise');

    const items = [
        {
            id: 'micro',
            image: '/images/expertise-micro.jpg', // Placeholder
        },
        {
            id: 'lashes',
            image: '/images/expertise-lashes.jpg', // Placeholder
        },
        {
            id: 'brows',
            image: '/images/expertise-brows.jpg', // Placeholder
        },
        {
            id: 'led',
            image: '/images/expertise-led.jpg', // Placeholder
        },
    ];

    return (
        <section id="expertise" className="py-24 bg-gradient-to-b from-white to-primary-pink/10">
            <div className="container-custom">
                <FadeIn className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-dark-gray mb-4">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-8">
                    {items.map((item, index) => (
                        <FadeIn
                            key={item.id}
                            delay={index * 0.1}
                            className="h-full"
                        >
                            <ServiceCard
                                title={t(`items.${index}.title`)}
                                description={t(`items.${index}.description`)}
                                image={item.image}
                                className="h-full min-h-[400px]"
                            />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
