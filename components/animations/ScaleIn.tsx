'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface ScaleInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    threshold?: number;
    style?: React.CSSProperties;
}

export default function ScaleIn({
    children,
    className,
    delay = 0,
    duration = 0.5,
    threshold = 0.2,
    style,
}: ScaleInProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: `0px 0px -${threshold * 100}% 0px` as `${number}px ${number}px ${number}% ${number}px` });

    return (
        <motion.div
            ref={ref}
            style={style}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{
                duration: duration,
                delay: delay,
                ease: [0.21, 0.47, 0.32, 0.98], // Custom spring-like ease
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
}
