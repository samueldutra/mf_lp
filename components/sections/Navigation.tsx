'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import NavLink from '../ui/NavLink';
import LanguageSelector from '../ui/LanguageSelector';
import { cn } from '@/lib/utils';

export default function Navigation() {
    const t = useTranslations('Navigation');
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: t('about') },
        { href: '#services', label: t('services') },
        { href: '#courses', label: t('courses') },
        { href: '#mentorship', label: t('mentorship') },
        { href: '#products', label: t('products') },
        { href: '#contact', label: t('contact') },
    ];

    return (
        <>
            <header
                className={cn(
                    'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                    isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-[6px]' : 'bg-transparent py-[6px]',
                    isMobileMenuOpen ? 'hidden lg:block' : 'block'
                )}
            >
                <div className="container-custom flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative z-50 flex items-center gap-3">
                        <div className="relative w-[82px] h-[92px]">
                            <Image
                                src="/images/logo-new.png"
                                alt="Márcia Freitas Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className={cn(
                            "font-serif text-2xl font-bold tracking-wider",
                            isScrolled ? "text-dark-gray" : "text-dark-gray"
                        )}>
                            MÁRCIA FREITAS
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-dark-gray hover:text-gold transition-colors"
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <LanguageSelector />
                        <Button size="sm" variant={isScrolled ? 'primary' : 'outline'}>
                            {t('book')}
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden z-50 text-dark-gray"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu />
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay - fora do header */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 bg-white z-[60] flex flex-col lg:hidden"
                    >
                        {/* Header do menu com logo e botão fechar */}
                        <div className="flex items-center justify-between px-6 pt-6 pb-6 border-b border-gray-100">
                            <div className="flex items-center gap-3">
                                <div className="relative w-[60px] h-[68px]">
                                    <Image
                                        src="/images/logo-new.png"
                                        alt="Márcia Freitas Logo"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span className="font-serif text-xl font-bold tracking-wider text-dark-gray">
                                    MÁRCIA FREITAS
                                </span>
                            </div>
                            <button
                                className="text-dark-gray p-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <X size={28} />
                            </button>
                        </div>

                        {/* Links do menu */}
                        <div className="flex-1 flex flex-col items-center justify-center gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-2xl font-serif text-dark-gray hover:text-primary-pink transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="mt-4">
                                <LanguageSelector />
                            </div>
                            <Button size="lg" onClick={() => setIsMobileMenuOpen(false)}>
                                {t('book')}
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
