'use client';

import { useTranslations } from 'next-intl';
import { useScroll } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import FadeIn from '../animations/FadeIn';
import { cn } from '@/lib/utils';

export default function Timeline() {
    const t = useTranslations('About');
    const containerRef = useRef<HTMLDivElement>(null);
    useScroll({
        target: containerRef,
        offset: ['start end', 'end start'],
    });

    const items = [
        {
            year: '2008',
            image: '/images/marcia-swiss.jpg', // Placeholder
        },
        {
            year: '2015',
            image: '/images/marcia-europe.jpg', // Placeholder
        },
        {
            year: '2024',
            image: '/images/marcia-dubai.jpg', // Placeholder
        },
    ];

    return (
        <section id="about" className="py-24 bg-white overflow-hidden" ref={containerRef}>
            <div className="container-custom">
                <FadeIn className="text-center mb-16">
                    <h2 className="font-serif text-4xl md:text-5xl text-dark-gray mb-4">
                        {t('title')}
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto rounded-full" />
                </FadeIn>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-secondary-pink md:-translate-x-1/2" />

                    <div className="space-y-12 md:space-y-24">
                        {items.map((item, index) => (
                            <TimelineItem
                                key={item.year}
                                item={item}
                                index={index}
                                t={t}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

interface TimelineItemData {
    year: string;
    image: string;
}

function TimelineItem({ item, index, t }: { item: TimelineItemData, index: number, t: (key: string) => string }) {
    const isEven = index % 2 === 0;

    return (
        <div className={cn(
            "relative flex flex-col md:flex-row gap-8 md:gap-0 items-center",
            isEven ? "md:flex-row" : "md:flex-row-reverse"
        )}>
            {/* Dot */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white shadow-md z-10 md:-translate-x-1/2 translate-y-1/2 md:translate-y-0 top-0 md:top-1/2" />

            {/* Content */}
            <div className={cn(
                "w-full md:w-1/2 pl-12 md:pl-0",
                isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
            )}>
                <FadeIn direction={isEven ? 'right' : 'left'}>
                    <h4 className="font-serif text-6xl text-gold font-bold mb-2 leading-none">
                        {item.year}
                    </h4>
                    <h3 className="font-serif text-2xl font-bold text-dark-gray mb-2 relative z-0">
                        {t(`timeline.${index}.title`)}
                    </h3>
                    <p className="text-dark-gray/70 leading-relaxed">
                        {t(`timeline.${index}.description`)}
                    </p>
                </FadeIn>
            </div>

            {/* Image */}
            <div className={cn(
                "w-full md:w-1/2 pl-12 md:pl-0",
                isEven ? "md:pl-16" : "md:pr-16"
            )}>
                <FadeIn direction={isEven ? 'left' : 'right'} delay={0.2}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                        <div className="absolute inset-0 bg-gold/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500" />
                        <Image
                            src={item.image}
                            alt={t(`timeline.${index}.title`)}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                    </div>
                </FadeIn>
            </div>
        </div >
    );
}
