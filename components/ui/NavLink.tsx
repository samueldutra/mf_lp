'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export default function NavLink({ href, children, className, onClick }: NavLinkProps) {
    return (
        <Link href={href} onClick={onClick} className={cn("relative group", className)}>
            <span className="relative z-10">{children}</span>
            <motion.span
                className="absolute left-0 bottom-0 w-full h-[1px] bg-gold origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                layoutId="underline"
            />
        </Link>
    );
}
