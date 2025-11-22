import Navigation from '@/components/sections/Navigation';
import Hero from '@/components/sections/Hero';
import Timeline from '@/components/sections/Timeline';
import Expertise from '@/components/sections/Expertise';
import Services from '@/components/sections/Services';
import Academy from '@/components/sections/Academy';
import Mentorship from '@/components/sections/Mentorship';
import Products from '@/components/sections/Products';
import GlobalMap from '@/components/sections/GlobalMap';
import Testimonials from '@/components/sections/Testimonials';
import Philosophy from '@/components/sections/Philosophy';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';

export default function Home() {
    return (
        <main className="min-h-screen bg-primary-pink">
            <Navigation />
            <Hero />
            <Timeline />
            <Expertise />
            <Services />
            <Academy />
            <Mentorship />
            <Products />
            <GlobalMap />
            <Testimonials />
            <Philosophy />
            <Contact />
            <Footer />
        </main>
    );
}
