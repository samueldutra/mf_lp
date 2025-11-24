'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Instagram, Facebook, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    const t = useTranslations('Footer');
    const tNav = useTranslations('Navigation');
    const tContact = useTranslations('Contact');

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-pink pt-16 pb-8 border-t border-secondary-pink">
            <div className="container-custom">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="relative w-12 h-12">
                                <Image
                                    src="/images/logo-new.png"
                                    alt="Márcia Freitas Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="font-serif text-2xl font-bold tracking-wider text-dark-gray">
                                MÁRCIA FREITAS
                            </span>
                        </Link>
                        <p className="text-dark-gray/80 text-sm leading-relaxed">
                            {t('description')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif text-lg font-semibold mb-6 text-dark-gray">
                            {t('quickLinks')}
                        </h3>
                        <ul className="space-y-3">
                            {['about', 'services', 'courses', 'mentorship', 'products'].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item}`}
                                        className="text-dark-gray/80 hover:text-gold transition-colors text-sm"
                                    >
                                        {tNav(item)}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="font-serif text-lg font-semibold mb-6 text-dark-gray">
                            {t('contact')}
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-dark-gray/80 text-sm">
                                <MapPin className="w-5 h-5 text-gold shrink-0" />
                                <span>{tContact('info.address')}</span>
                            </li>
                            <li className="flex items-center gap-3 text-dark-gray/80 text-sm">
                                <Phone className="w-5 h-5 text-gold shrink-0" />
                                <span>{tContact('info.phone')}</span>
                            </li>
                            <li className="flex items-center gap-3 text-dark-gray/80 text-sm">
                                <Mail className="w-5 h-5 text-gold shrink-0" />
                                <span>{tContact('info.email')}</span>
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="font-serif text-lg font-semibold mb-6 text-dark-gray">
                            {t('followUs')}
                        </h3>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark-gray hover:bg-gold hover:text-white transition-all duration-300 shadow-sm">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark-gray hover:bg-gold hover:text-white transition-all duration-300 shadow-sm">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-dark-gray hover:bg-gold hover:text-white transition-all duration-300 shadow-sm">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-dark-gray/10 pt-8 text-center">
                    <p className="text-dark-gray/60 text-sm">
                        © {currentYear} Márcia Freitas Master. {t('rights')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
