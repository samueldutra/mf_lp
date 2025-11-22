'use client';

import { useTranslations } from 'next-intl';
import { Button } from '../ui/Button';
import FadeIn from '../animations/FadeIn';
import Reveal from '../animations/Reveal';
import ProductCard from '../ui/ProductCard';
import { ArrowRight } from 'lucide-react';

export default function Products() {
    const t = useTranslations('Products');

    const items = [
        { id: 'kit', image: '/images/product-kit.jpg' },
        { id: 'pigments', image: '/images/product-pigments.jpg' },
        { id: 'dermograph', image: '/images/product-dermograph.jpg' },
        { id: 'serum', image: '/images/product-serum.jpg' },
    ];

    return (
        <section id="products" className="py-24 bg-white">
            <div className="container-custom">
                <FadeIn className="text-center mb-16">
                    <div className="flex justify-center">
                        <Reveal>
                            <h2 className="font-serif text-4xl md:text-5xl text-dark-gray mb-4">
                                {t('title')}
                            </h2>
                        </Reveal>
                    </div>
                    <p className="text-dark-gray/70 text-lg max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </FadeIn>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {items.map((item, index) => (
                        <FadeIn key={item.id} delay={index * 0.1}>
                            <ProductCard
                                name={t(`items.${index}.name`)}
                                price={t(`items.${index}.price`)}
                                image={item.image}
                                tag={t(`items.${index}.tag`) !== `items.${index}.tag` ? t(`items.${index}.tag`) : undefined}
                            />
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.4} className="text-center">
                    <Button
                        variant="outline"
                        size="lg"
                        icon={<ArrowRight className="w-5 h-5" />}
                    >
                        {t('cta')}
                    </Button>
                </FadeIn>
            </div>
        </section>
    );
}
