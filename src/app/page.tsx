import Layout from '@/components/Layout';
import Services from '@/components/Services';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <Layout>
      <div className="space-y-24 -z-10">
        <Hero />
        <Services />
        <Reviews />
        <Contact />
      </div>
    </Layout>
  );
}
