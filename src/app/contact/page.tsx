import { BackButton } from '@/components/BackButton';
import ParallaxBackground from '@/components/ParallaxBackground';
import PageHero from '@/components/PageHero';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white/90">
      <ParallaxBackground />
      <BackButton />

      <PageHero 
        title="Contact Us"
        subtitle="Get in touch with Fast Cache Pawn"
      />

      <Contact />
    </main>
  );
} 