import Hero from '@/components/Hero';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import About from '@/components/About';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Reviews />
      <Contact />
    </main>
  );
}
