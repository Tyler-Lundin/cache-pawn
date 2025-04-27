import Layout from '@/components/Layout';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <Layout>
      <div className="-z-10 py-4">
        <Hero />
        <Reviews />
        <Contact />
      </div>
    </Layout>
  );
}
