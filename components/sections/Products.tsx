'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FileText } from 'lucide-react';
import { Button } from '../ui/Button';
import FadeIn from '../animations/FadeIn';
import ScaleIn from '../animations/ScaleIn';

export default function Products() {
    const t = useTranslations('Products');

    return (
        <section id="products" className="pt-12 pb-24 bg-white overflow-hidden">
            <div className="container-custom">
                {/* Mobile Layout */}
                <div className="flex flex-col gap-6 lg:hidden">
                    <FadeIn>
                        <span className="inline-flex items-center px-5 py-2 rounded-full bg-dark-gray text-white text-sm font-medium">
                            {t('badge')}
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="font-serif text-4xl text-dark-gray">
                            {t('title')} <span className="text-primary-pink">{t('titleHighlight')}</span>
                        </h2>
                    </FadeIn>

                    <ScaleIn>
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/nossos-produtos.jpg"
                                alt={t('title')}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </ScaleIn>

                    <FadeIn delay={0.2}>
                        <p className="text-lg text-dark-gray/70 leading-relaxed">
                            {t('subtitle')}
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.3} className="flex justify-center">
                        <Button
                            size="lg"
                            className="bg-primary-pink text-white hover:bg-primary-pink/90"
                            icon={<FileText className="w-5 h-5" />}
                            onClick={() => window.open('/pdf/catalogo-de-produtos.pdf', '_blank')}
                        >
                            {t('cta')}
                        </Button>
                    </FadeIn>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <ScaleIn>
                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/nossos-produtos.jpg"
                                alt={t('title')}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </ScaleIn>

                    {/* Content */}
                    <div className="space-y-6">
                        <FadeIn>
                            <span className="inline-flex items-center px-5 py-2 rounded-full bg-dark-gray text-white text-sm font-medium">
                                {t('badge')}
                            </span>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <h2 className="font-serif text-4xl md:text-5xl text-dark-gray">
                                {t('title')} <span className="text-primary-pink">{t('titleHighlight')}</span>
                            </h2>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <p className="text-lg text-dark-gray/70 leading-relaxed">
                                {t('subtitle')}
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.3}>
                            <Button
                                size="lg"
                                className="mt-4 bg-primary-pink text-white hover:bg-primary-pink/90"
                                icon={<FileText className="w-5 h-5" />}
                                onClick={() => window.open('/pdf/catalogo-de-produtos.pdf', '_blank')}
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
