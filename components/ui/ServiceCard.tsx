'use client';

import Image from 'next/image';
import { Button } from '../ui/Button';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
    title: string;
    description: string;
    image: string;
    onClick?: () => void;
    className?: string;
}

export default function ServiceCard({
    title,
    description,
    image,
    onClick,
    className,
}: ServiceCardProps) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-500",
                className
            )}
        >
            {/* Image Container */}
            <div className="relative h-80 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            </div>

            {/* Content */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-serif text-2xl font-bold text-white mb-2">
                    {title}
                </h3>
                <p className="text-white/90 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                    {description}
                </p>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    <Button
                        variant="outline"
                        className="border-white text-white hover:bg-white hover:text-dark-gray w-full"
                        onClick={onClick}
                    >
                        Saiba Mais
                    </Button>
                </div>
            </div>
        </div>
    );
}
