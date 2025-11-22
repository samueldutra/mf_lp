'use client';

import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, type ContactFormData } from '@/lib/schemas';
import FadeIn from '../animations/FadeIn';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Textarea } from '../ui/Textarea';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function Contact() {
    const t = useTranslations('Contact');

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    });

    const onSubmit = async (data: ContactFormData) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(data);
        reset();
        alert('Mensagem enviada com sucesso!'); // Replace with toast later
    };

    return (
        <section id="contact" className="py-24 bg-white relative overflow-hidden">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <FadeIn>
                        <h2 className="font-serif text-4xl md:text-5xl text-dark-gray mb-4">
                            {t('title')}
                        </h2>
                        <p className="text-gold text-xl font-medium mb-12">
                            {t('subtitle')}
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary-pink/20 flex items-center justify-center text-gold flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-dark-gray mb-1">Address</h3>
                                    <p className="text-dark-gray/70">{t('info.address')}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary-pink/20 flex items-center justify-center text-gold flex-shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-dark-gray mb-1">Email</h3>
                                    <p className="text-dark-gray/70">{t('info.email')}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary-pink/20 flex items-center justify-center text-gold flex-shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-dark-gray mb-1">Phone</h3>
                                    <p className="text-dark-gray/70">{t('info.phone')}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary-pink/20 flex items-center justify-center text-gold flex-shrink-0">
                                    <Clock className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-dark-gray mb-1">Hours</h3>
                                    <p className="text-dark-gray/70">{t('info.hours')}</p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Contact Form */}
                    <FadeIn delay={0.2} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <Input label={t('form.name')} placeholder="" />
                                <Input label={t('form.phone')} placeholder="" />
                            </div>
                            <Input label={t('form.email')} type="email" placeholder="" />
                            <Input label={t('form.subject')} placeholder="" />
                            <Textarea label={t('form.message')} placeholder="" rows={4} />

                            <Button size="lg" className="w-full">
                                {t('form.submit')}
                            </Button>
                        </form>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
