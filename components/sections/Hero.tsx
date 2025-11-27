'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '../ui/Button';
import FadeIn from '../animations/FadeIn';
import ScaleIn from '../animations/ScaleIn';
import { ArrowDown, Star } from 'lucide-react';

export default function Hero() {
    const t = useTranslations('Hero');
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen w-full overflow-hidden flex items-center bg-gradient-to-br from-primary-pink/10 via-white to-secondary-pink/20"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gold/5 blur-3xl" />
                <div className="absolute top-[40%] right-[0%] w-[40%] h-[40%] rounded-full bg-accent-pink/20 blur-3xl" />
            </div>

            <div className="container-custom relative z-20 grid lg:grid-cols-12 gap-8 items-center h-full pt-20">
                {/* Content */}
                <div className="lg:col-span-7 space-y-8 py-12 lg:py-0 relative z-30 flex flex-col items-start text-left">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-4">
                        <ScaleIn delay={0.2}>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/20 text-sm font-medium text-dark-gray shadow-sm">
                                <Star className="w-4 h-4 text-gold" fill="currentColor" />
                                Lash Global Dubai 2024
                            </span>
                        </ScaleIn>
                        <ScaleIn delay={0.3}>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gold/20 text-sm font-medium text-dark-gray shadow-sm">
                                <Star className="w-4 h-4 text-gold" fill="currentColor" />
                                SwissColor®️ Formation
                            </span>
                        </ScaleIn>
                    </div>

                    {/* Headline */}
                    <div className="space-y-4 w-full">
                        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-dark-gray leading-tight">
                            <span className="block overflow-hidden">
                                <motion.span
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
                                    className="block"
                                >
                                    {t('headline').split(' ')[0]} {t('headline').split(' ')[1]}
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden text-gold italic font-script">
                                <motion.span
                                    initial={{ y: 100 }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                                    className="block"
                                >
                                    {t('headline').split(' ').slice(2).join(' ')}
                                </motion.span>
                            </span>
                        </h1>
                        <FadeIn delay={0.6}>
                            <p className="text-lg md:text-xl text-dark-gray/80 max-w-lg leading-relaxed">
                                {t('subheadline')}
                            </p>
                        </FadeIn>
                    </div>

                    {/* CTAs */}
                    <FadeIn delay={0.8} className="flex flex-wrap gap-4 relative z-40">
                        <Button size="lg" variant="outline" className="border-dark-gray text-dark-gray hover:bg-dark-gray hover:text-white">
                            {t('cta2')}
                        </Button>
                        <Button size="lg" className="bg-accent-pink text-dark-gray hover:bg-white shadow-lg hover:scale-105 transition-all duration-300">
                            {t('cta1')}
                        </Button>
                    </FadeIn>
                </div>


            </div>

            {/* Hero Image */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="hidden lg:block absolute right-0 bottom-0 top-[170px] w-[50%] z-10 pointer-events-none"
            >
                <Image
                    src="/images/marcia-final.png"
                    alt="Márcia Freitas"
                    fill
                    className="object-contain object-bottom"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </motion.div>


        </section>
    );
}
