'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ImageGalleryProps {
    images: { src: string; alt: string }[];
    className?: string;
}

export default function ImageGallery({ images, className }: ImageGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const handlePrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev! - 1));
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedIndex === null) return;
        setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev! + 1));
    };

    return (
        <>
            {/* Grid */}
            <div className={cn("grid grid-cols-2 md:grid-cols-3 gap-4", className)}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="relative aspect-square cursor-pointer overflow-hidden rounded-xl group"
                        onClick={() => setSelectedIndex(index)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                        onClick={() => setSelectedIndex(null)}
                    >
                        <button
                            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
                            onClick={() => setSelectedIndex(null)}
                        >
                            <X className="w-8 h-8" />
                        </button>

                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
                            onClick={handlePrevious}
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>

                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors p-2"
                            onClick={handleNext}
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        <motion.div
                            key={selectedIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="relative w-full max-w-4xl aspect-[3/2] rounded-lg overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={images[selectedIndex].src}
                                alt={images[selectedIndex].alt}
                                fill
                                className="object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
