import type { ElementType } from 'react';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import {
    CalendarCheck,
    Clock,
    Globe,
    GraduationCap,
    HeartHandshake,
    Instagram,
    MapPin,
    MessageCircle,
    Music2,
    ShieldCheck,
    ShoppingBag,
    Sparkles,
    Star,
    Users,
    Youtube,
    BadgeCheck,
    ChevronRight,
    ArrowUpRight,
} from 'lucide-react';

import { bioInstagramConfig, type BioInstagramIcon } from '@/lib/bio-instagram';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Separator } from '@/components/ui/Separator';
import { cn } from '@/lib/utils';

const iconMap: Record<BioInstagramIcon, ElementType> = {
    MessageCircle,
    CalendarCheck,
    GraduationCap,
    Sparkles,
    ShoppingBag,
    BadgeCheck,
    HeartHandshake,
    Users,
    ShieldCheck,
    Star,
    Instagram,
    Music2,
    Youtube,
    Globe,
    MapPin,
    Clock,
};

const buildWhatsAppLink = (phone: string, message: string) =>
    `https://api.whatsapp.com/send/?phone=${phone}&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;

export default async function BioInstagramPage() {
    const t = await getTranslations('BioInstagram');

    const profile = t.raw('profile') as {
        name: string;
        handle: string;
        bio: string;
    };
    const badges = t.raw('badges') as string[];
    const sections = t.raw('sectionTitles') as Record<string, string>;
    const ctas = t.raw('ctas') as Record<string, { label: string; note: string }>;
    const products = t.raw('products') as Array<{ title: string; description: string; tag: string }>;
    const testimonials = t.raw('testimonials') as Array<{
        name: string;
        role: string;
        text: string;
        metric: string;
    }>;
    const stats = t.raw('stats') as Array<{ label: string; value: string }>;
    const location = t.raw('location') as { address: string; city: string; cta: string };
    const hours = t.raw('hours') as { label: string; value: string };
    const socials = t.raw('socials') as Record<string, string>;
    const footer = t.raw('footer') as { brand: string; privacy: string; rights: string };
    const whatsappMessage = t('whatsappMessage');

    const primaryCtaConfig = bioInstagramConfig.ctas.find(
        (cta) => cta.id === bioInstagramConfig.primaryCtaId
    );

    return (
        <main className="relative min-h-screen overflow-hidden !bg-[#32175D] text-dark-gray">
            <div className="absolute inset-0">
                <div className="absolute -top-40 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#6b34c6]/30 blur-[140px]" />
                <div className="absolute top-40 -left-20 h-[360px] w-[360px] rounded-full bg-[#a65ad3]/25 blur-[140px]" />
                <div className="absolute bottom-10 right-0 h-[300px] w-[300px] rounded-full bg-[#c98bff]/20 blur-[140px]" />
                <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />
            </div>

            <div className="relative mx-auto flex w-full max-w-2xl flex-col gap-8 px-6 py-12 lg:py-16">
                <Card className="border-white/70 bg-white/85">
                    <CardHeader className="items-center text-center">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src={bioInstagramConfig.profile.avatarSrc} alt={profile.name} />
                            <AvatarFallback>{profile.name.slice(0, 2).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="space-y-1">
                            <CardTitle className="text-3xl">{profile.name}</CardTitle>
                            <CardDescription className="text-base font-semibold text-dark-gray/70">
                                {profile.handle}
                            </CardDescription>
                        </div>
                        <p className="max-w-md text-sm text-dark-gray/80">{profile.bio}</p>
                        <div className="flex flex-wrap justify-center gap-2">
                            {badges.map((badge) => (
                                <Badge key={badge} variant="outline" className="bg-white/70">
                                    {badge}
                                </Badge>
                            ))}
                        </div>
                    </CardHeader>
                </Card>

                {primaryCtaConfig && (
                    <Card className="border-dark-gray/10 bg-gradient-to-r from-[#540E98] via-[#7b1fa8] to-[#CF23B3] text-white">
                        <CardHeader>
                            <Badge variant="secondary" className="w-fit bg-white/10 text-white">
                                {sections.booking}
                            </Badge>
                            <CardTitle className="text-2xl text-white">{ctas.primary.label}</CardTitle>
                            <CardDescription className="mb-3 text-sm text-white/70">{ctas.primary.note}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex justify-center">
                            <Button
                                href={buildWhatsAppLink(bioInstagramConfig.whatsappPhone, whatsappMessage)}
                                variant="primary"
                                size="md"
                                className="btn-pulse mx-auto w-full max-w-sm justify-center rounded-full bg-[#59EB69] px-4 text-dark-gray hover:bg-[#4fdd5f] hover:text-dark-gray"
                            >
                                <span className="grid w-full grid-cols-[1fr_auto_1fr] items-center">
                                    <span className="justify-self-start -translate-x-5">
                                        <Image src="/whatsapp-icone.svg" alt="WhatsApp" width={32} height={32} />
                                    </span>
                                    <span className="justify-self-center text-base font-semibold text-center">
                                        {ctas.primary.label}
                                    </span>
                                    <span aria-hidden="true" />
                                </span>
                            </Button>
                        </CardContent>
                    </Card>
                )}

                <Card id="links" className="border-white/50 !bg-[#8437F9] text-white">
                    <CardHeader>
                        <CardTitle className="text-2xl text-white">{sections.featured}</CardTitle>
                    </CardHeader>
                    <CardContent className="mt-3 space-y-6">
                        {bioInstagramConfig.ctas
                            .filter((cta) => cta.id !== bioInstagramConfig.primaryCtaId)
                            .map((cta) => {
                                const Icon = iconMap[cta.icon];
                                const text = ctas[cta.id];
                                const href =
                                    cta.href === 'whatsapp'
                                        ? buildWhatsAppLink(bioInstagramConfig.whatsappPhone, whatsappMessage)
                                        : cta.href;

                                return (
                                    <Button
                                        key={cta.id}
                                        href={href}
                                        variant={cta.variant}
                                        size={cta.size}
                                        className="w-full justify-start rounded-2xl border-[2px] !border-white !bg-transparent px-5 py-4 text-left !text-white shadow-[0_10px_30px_-20px_rgba(0,0,0,0.5)] hover:!bg-[#EAE3F5] hover:!text-[#540E98]"
                                        icon={<Icon className="h-5 w-5" />}
                                    >
                                        <span className="flex w-full items-center justify-between gap-4">
                                            <span className="flex flex-col text-left">
                                                <span className="text-base font-semibold">{text.label}</span>
                                                <span className="mt-1 text-xs text-white/80 group-hover:text-[#540E98]/80">
                                                    {text.note}
                                                </span>
                                            </span>
                                            <ChevronRight className="h-5 w-5 text-white/70 group-hover:text-[#540E98]/70" />
                                        </span>
                                    </Button>
                                );
                            })}
                    </CardContent>
                </Card>

                <Card id="socials" className="border-white/50 !bg-[#8437F9] text-white">
                    <CardHeader>
                        <CardTitle className="text-2xl text-white">{sections.socials}</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-3 sm:grid-cols-2">
                        {bioInstagramConfig.socials.map((social) => {
                            const Icon = iconMap[social.icon];
                            const label = socials[social.id];

                            return (
                                <Button
                                    key={social.id}
                                    href={social.href}
                                    variant="outline"
                                    size="lg"
                                    className="w-full justify-between rounded-2xl border-[2px] !border-white !bg-transparent px-5 py-4 text-left !text-white hover:!bg-[#EAE3F5] hover:!text-[#540E98]"
                                    icon={<Icon className="h-5 w-5" />}
                                >
                                    <span className="flex w-full items-center justify-between">
                                        <span className="text-sm font-semibold">{label}</span>
                                        <ArrowUpRight className="h-4 w-4 text-white/70 group-hover:text-[#540E98]/70" />
                                    </span>
                                </Button>
                            );
                        })}
                    </CardContent>
                </Card>

                <Card className="border-white/50 !bg-[#8437F9] text-white">
                    <CardHeader>
                        <CardTitle className="text-2xl text-white">{sections.location}</CardTitle>
                        <CardDescription className="text-white/80">{`${hours.label} • ${hours.value}`}</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border-[2px] border-white/80 bg-transparent p-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#540E98]">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">{location.address}</p>
                                    <p className="text-xs text-white/80">{location.city}</p>
                                </div>
                            </div>
                            <Button
                                href={bioInstagramConfig.location.mapHref}
                                variant="outline"
                                size="sm"
                                className="mt-4 w-full justify-between rounded-xl border-[2px] !border-white !bg-transparent px-4 text-white hover:!bg-[#EAE3F5] hover:!text-[#540E98]"
                            >
                                <span className="text-xs font-semibold">{location.cta}</span>
                                <ArrowUpRight className="h-4 w-4" />
                            </Button>
                        </div>
                        <div className="rounded-2xl border-[2px] border-white/80 bg-transparent p-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-[#540E98]">
                                    <Clock className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">{hours.label}</p>
                                    <p className="text-xs text-white/80">{hours.value}</p>
                                </div>
                            </div>
                            <p className="mt-4 text-xs text-white/80">
                                {ctas.primary.note}
                            </p>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex flex-col items-center gap-2 text-center text-xs text-dark-gray/60">
                    <span className="text-sm font-semibold text-dark-gray">{footer.brand}</span>
                    <a href={bioInstagramConfig.footer.privacyHref} className="hover:text-dark-gray">
                        {footer.privacy}
                    </a>
                    <span>{footer.rights}</span>
                </div>
            </div>
        </main>
    );
}
