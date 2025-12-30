'use client';

import { useTranslations } from 'next-intl';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FadeIn from '../animations/FadeIn';
import ProductCard from '../ui/ProductCard';

export default function Products() {
    const t = useTranslations('Products');
    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

    const items = [
        { id: 'lash-adhesive', image: '/images/product-lash-adhesive.jpg' },
        { id: 'lash-adhesive-2', image: '/images/product-lash-adhesive-2.jpg' },
        { id: 'lash-extension-glue', image: '/images/product-lash-extension-glue.jpg' },
        { id: 'lash-remover', image: '/images/product-lash-remover.jpg' },
        { id: 'primer', image: '/images/product-primer.jpg' },
        { id: 'pinca', image: '/images/product-pinca.jpg' },
        { id: 'cilios-6dw', image: '/images/product-cilios-6dw.jpg' },
    ];

    const scroll = (direction: 'left' | 'right') => {
        if (carouselRef.current) {
            const scrollAmount = 300;
            carouselRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <section id="products" className="py-24 bg-white overflow-hidden">
            <div className="container-custom mb-12">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                    <FadeIn>
                        <h2 className="font-serif text-4xl md:text-5xl text-dark-gray">
                            {t('title')} <span className="text-primary-pink">{t('titleHighlight')}</span>
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.1} className="flex items-center gap-4">
                        {/* Badge */}
                        <span className="inline-flex items-center px-5 py-2 rounded-full bg-dark-gray text-white text-sm font-medium">
                            {t('badge')}
                        </span>

                        {/* Navigation Arrows */}
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => scroll('left')}
                                className="w-10 h-10 rounded-full border border-primary-pink flex items-center justify-center bg-white hover:bg-primary-pink transition-colors group"
                                aria-label="Anterior"
                            >
                                <ChevronLeft className="w-5 h-5 text-primary-pink group-hover:text-white transition-colors" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-10 h-10 rounded-full border border-primary-pink flex items-center justify-center bg-white hover:bg-primary-pink transition-colors group"
                                aria-label="Próximo"
                            >
                                <ChevronRight className="w-5 h-5 text-primary-pink group-hover:text-white transition-colors" />
                            </button>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Carousel */}
            <div className="pl-4 md:pl-[max(1rem,calc((100vw-1200px)/2))]">
                <motion.div
                    ref={carouselRef}
                    className="cursor-grab active:cursor-grabbing overflow-x-auto scrollbar-hide"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-6 pr-4 md:pr-12"
                    >
                        {items.map((item, index) => {
                            const whatsappMessage = encodeURIComponent(t(`items.${index}.whatsapp`));
                            const whatsappLink = `https://api.whatsapp.com/send/?phone=41766711162&text=${whatsappMessage}&type=phone_number&app_absent=0`;

                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="min-w-[240px] md:min-w-[280px]"
                                >
                                    <ProductCard
                                        name={t(`items.${index}.name`)}
                                        image={item.image}
                                        href={whatsappLink}
                                        ctaText={t('ctaButton')}
                                    />
                                </motion.div>
                            );
                        })}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
