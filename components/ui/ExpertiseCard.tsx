'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ExpertiseCardProps {
    title: string;
    subtitle: string;
    image: string;
    ctaText: string;
    href?: string;
    className?: string;
}

export default function ExpertiseCard({
    title,
    subtitle,
    image,
    ctaText,
    href,
    className,
}: ExpertiseCardProps) {
    const Component = href ? 'a' : 'div';

    return (
        <Component
            href={href}
            target={href ? '_blank' : undefined}
            rel={href ? 'noopener noreferrer' : undefined}
            className={cn(
                "relative overflow-hidden rounded-3xl group cursor-pointer block",
                "min-w-[280px] md:min-w-[320px] h-[450px] md:h-[500px]",
                className
            )}
        >
            {/* Background Image */}
            <Image
                src={image}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div
                className="absolute inset-0"
                style={{
                    background: 'linear-gradient(to top, rgba(243, 151, 171, 0.95) 0%, rgba(243, 151, 171, 0.8) 8%, rgba(243, 151, 171, 0.5) 15%, rgba(243, 151, 171, 0.2) 22%, rgba(243, 151, 171, 0) 30%)'
                }}
            />

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-white leading-tight">
                    {title}
                </h3>
                <p className="text-white/80 text-sm">
                    {subtitle}
                </p>
                <span
                    className="inline-flex items-center gap-2 text-white text-sm font-medium px-6 py-2.5 rounded-full transition-all duration-300 w-fit mt-2 group-hover:gap-3"
                    style={{ backgroundColor: '#F397AB' }}
                >
                    {ctaText}
                    <ArrowRight className="w-4 h-4" />
                </span>
            </div>
        </Component>
    );
}
