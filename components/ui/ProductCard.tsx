'use client';

import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';

interface ProductCardProps {
    name: string;
    price?: string;
    image: string;
    tag?: string;
    href?: string;
    ctaText?: string;
    className?: string;
}

export default function ProductCard({
    name,
    price,
    image,
    tag,
    href,
    ctaText = 'Ver Detalhes',
    className,
}: ProductCardProps) {
    return (
        <div
            className={cn(
                "group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300",
                className
            )}
        >
            {/* Image */}
            <div className="relative aspect-[9/16] overflow-hidden bg-secondary-pink/20">
                {tag && (
                    <span className="absolute top-3 left-3 z-10 bg-gold text-white text-xs font-bold px-3 py-1 rounded-full">
                        {tag}
                    </span>
                )}
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Quick Add Overlay */}
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                >
                    <Button
                        size="sm"
                        variant="secondary"
                        className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                        icon={<ShoppingBag className="w-4 h-4" />}
                    >
                        {ctaText}
                    </Button>
                </a>
            </div>

            {/* Info */}
            <div className="p-4 text-center">
                <h3 className="font-serif text-lg font-semibold text-dark-gray mb-1 group-hover:text-gold transition-colors">
                    {name}
                </h3>
                {price && (
                    <p className="text-sm font-medium text-dark-gray/60">
                        {price}
                    </p>
                )}
            </div>
        </div>
    );
}
