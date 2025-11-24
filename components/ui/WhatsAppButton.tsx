'use client';

import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const phoneNumber = '41766711162'; // Swiss number
    const message = 'Olá! Gostaria de saber mais sobre os serviços.';

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.a
                    href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageCircle className="w-8 h-8 fill-current" />
                    <span className="absolute right-full mr-4 bg-white text-dark-gray px-3 py-1 rounded-lg text-sm font-medium shadow-md whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity pointer-events-none">
                        Fale Conosco
                    </span>
                </motion.a>
            )}
        </AnimatePresence>
    );
}
