'use client';

import { useTranslations } from 'next-intl';
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FadeIn from '../animations/FadeIn';
import ServiceCard from '../ui/ServiceCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Services() {
    const t = useTranslations('Services');
    const carouselRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
        }
    }, []);

    const items = [
        { id: 'microblading', image: '/images/service-microblading.jpg' },
        { id: 'powder', image: '/images/service-powder.jpg' },
        { id: 'lips', image: '/images/service-lips.jpg' },
        { id: 'eyeliner', image: '/images/service-eyeliner.jpg' },
        { id: 'lashlift', image: '/images/service-lashlift.jpg' },
        { id: 'lamination', image: '/images/service-lamination.jpg' },
    ];

    return (
        <section id="services" className="py-24 bg-white overflow-hidden">
            <div className="container-custom mb-12">
                <FadeIn className="text-center">
                    <h2 className="font-serif text-4xl md:text-5xl text-dark-gray mb-4">
                        {t('title')}
                    </h2>
                    <p className="text-dark-gray/70 max-w-2xl mx-auto">
                        {t('subtitle')}
                    </p>
                </FadeIn>
            </div>

            {/* Carousel */}
            <div className="pl-4 md:pl-[max(1rem,calc((100vw-1200px)/2))]">
                <motion.div
                    ref={carouselRef}
                    className="cursor-grab active:cursor-grabbing overflow-hidden"
                >
                    <motion.div
                        drag="x"
                        dragConstraints={{ right: 0, left: -width }}
                        className="flex gap-6 pr-4 md:pr-12"
                    >
                        {items.map((item, index) => (
                            <motion.div
                                key={item.id}
                                className="min-w-[300px] md:min-w-[350px]"
                            >
                                <ServiceCard
                                    title={t(`items.${index}.title`)}
                                    description={t(`items.${index}.description`)}
                                    image={item.image}
                                    className="h-[450px]"
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Drag Indicator */}
            <div className="flex justify-center mt-12 gap-2 text-dark-gray/40 text-sm items-center">
                <ChevronLeft className="w-4 h-4 animate-pulse" />
                <span>Arraste para explorar</span>
                <ChevronRight className="w-4 h-4 animate-pulse" />
            </div>
        </section>
    );
}
