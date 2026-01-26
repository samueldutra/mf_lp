export type BioInstagramIcon =
    | 'MessageCircle'
    | 'CalendarCheck'
    | 'GraduationCap'
    | 'Sparkles'
    | 'ShoppingBag'
    | 'BadgeCheck'
    | 'HeartHandshake'
    | 'Users'
    | 'ShieldCheck'
    | 'Star'
    | 'Instagram'
    | 'Music2'
    | 'Youtube'
    | 'Globe'
    | 'MapPin'
    | 'Clock';

export const bioInstagramConfig = {
    whatsappPhone: '41766711162',
    profile: {
        avatarSrc: '/images/perfil-marcia.png',
    },
    primaryCtaId: 'primary',
    ctas: [
        {
            id: 'primary',
            icon: 'MessageCircle' as BioInstagramIcon,
            href: 'whatsapp' as const,
            variant: 'secondary' as const,
            size: 'lg' as const,
            emphasis: true,
        },
        {
            id: 'led-course',
            icon: 'Sparkles' as BioInstagramIcon,
            href: 'https://lp.marciafreitasbeautyacademy.com/',
            variant: 'outline' as const,
            size: 'lg' as const,
        },
        {
            id: 'courses',
            icon: 'GraduationCap' as BioInstagramIcon,
            href: 'whatsapp' as const,
            variant: 'outline' as const,
            size: 'lg' as const,
        },
        {
            id: 'portfolio',
            icon: 'Sparkles' as BioInstagramIcon,
            href: 'https://marciafreitasbeautyacademy.com/',
            variant: 'outline' as const,
            size: 'lg' as const,
        },
        {
            id: 'products',
            icon: 'ShoppingBag' as BioInstagramIcon,
            href: 'whatsapp' as const,
            variant: 'outline' as const,
            size: 'lg' as const,
        },
        {
            id: 'catalog',
            icon: 'ShoppingBag' as BioInstagramIcon,
            href: 'https://marciafreitasbeautyacademy.com/pdf/catalogo-de-produtos.pdf',
            variant: 'outline' as const,
            size: 'lg' as const,
        },
    ],
    products: [
        { id: 'lash-led', icon: 'Sparkles' as BioInstagramIcon },
        { id: 'micropigmentation', icon: 'BadgeCheck' as BioInstagramIcon },
        { id: 'mentorship', icon: 'HeartHandshake' as BioInstagramIcon },
    ],
    stats: [
        { id: 'clients', icon: 'Users' as BioInstagramIcon },
        { id: 'experience', icon: 'ShieldCheck' as BioInstagramIcon },
        { id: 'students', icon: 'Star' as BioInstagramIcon },
    ],
    testimonials: [
        { id: 'ines', avatarFallback: 'IN' },
        { id: 'weligton', avatarFallback: 'WE' },
    ],
    socials: [
        {
            id: 'instagram',
            icon: 'Instagram' as BioInstagramIcon,
            href: 'https://www.instagram.com/marciafreitasbeautyacademy/',
        },
        {
            id: 'website',
            icon: 'Globe' as BioInstagramIcon,
            href: 'https://marciafreitasbeautyacademy.com/',
        },
    ],
    location: {
        mapHref: '#',
        icon: 'MapPin' as BioInstagramIcon,
    },
    hours: {
        icon: 'Clock' as BioInstagramIcon,
    },
    footer: {
        privacyHref: '#',
    },
};
