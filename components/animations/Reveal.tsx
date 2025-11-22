'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    width?: 'fit-content' | '100%';
    color?: string; // Color of the reveal block
}

export default function Reveal({
    children,
    className,
    delay = 0.25,
    duration = 0.5,
    width = 'fit-content',
    color = '#D4AF37', // Default gold
}: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div ref={ref} className={cn("relative overflow-hidden", className)} style={{ width }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration, delay }}
            >
                {children}
            </motion.div>
            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: "100%" },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5, ease: "easeIn" }}
                style={{
                    position: "absolute",
                    top: 4,
                    bottom: 4,
                    left: 0,
                    right: 0,
                    background: color,
                    zIndex: 20,
                }}
            />
        </div>
    );
}
