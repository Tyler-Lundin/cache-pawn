'use client';

import ImageSlideshow from '@/components/ImageSlideshow';
import PageHero from '@/components/PageHero';
import Layout from '@/components/Layout';
import { Roboto_Serif } from "next/font/google";
import Image from 'next/image';

const font = Roboto_Serif({
  weight: ['400'],
  subsets: ['latin'],
});

const storeImages = [
  '/images/store1.jpg',
  '/images/store2.jpg',
  '/images/store3.jpg',
  '/images/store4.jpg',
];

export default function AboutPage() {
  return (
    <Layout>

      {/* Hero Section */}
      <PageHero 
        title="About Fast Cache Pawn" 
        subtitle="Real deals. Real trust. 20 years serving Logan."
      />

      {/* About Story Section */}
      <section className="relative w-full py-20 px-6 bg-gradient-to-b from-white via-gray-50 to-gray-200">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* Text Block */}
          <div className="space-y-8">
            <h2
              style={font.style}
              className="text-4xl md:text-5xl font-bold text-amber-800 leading-tight"
            >
              Built on Trust <br/> Driven by Deals
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Since 2001, Fast Cache Pawn has stood as a pillar of Logan&apos;s community.  
              Our reputation is forged through honest deals, fast service, and a dedication to getting you what you need when you need it most.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you&apos;re buying, selling, or loaning, our team treats you like a neighbor — not a number.  
              It&apos;s simple: we believe in fairness, speed, and loyalty.
            </p>
          </div>

          {/* Slideshow Block */}
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <ImageSlideshow images={storeImages} interval={4000} />
          </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="relative w-full py-24 px-6 bg-black">
        <div className="max-w-7xl mx-auto text-center space-y-16">

          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-amber-400 mb-6 uppercase tracking-wider">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              What keeps Fast Cache Pawn different from the rest — even after 20 years.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Trust',
                description: 'Every deal we make is built on fairness, honesty, and transparency.',
                bg: '/textures/trust.jpg',
              },
              {
                title: 'Service',
                description: 'Fast, respectful, and knowledgeable service — every customer, every time.',
                bg: '/textures/service.jpg',
              },
              {
                title: 'Value',
                description: 'Real deals. Real value. We respect your money and your time.',
                bg: '/textures/value.jpg',
              }
            ].map((value, index) => (
              <div
                key={index}
                className="relative bg-gray-900 rounded-2xl overflow-hidden p-8 flex flex-col items-center text-center shadow-xl hover:scale-105 hover:shadow-amber-500/20 transition-all duration-300"
              >
                {/* Optional Background Texture */}
                <div className="absolute inset-0 opacity-40">
                  <Image
                    src={value.bg}
                    alt={`${value.title} background`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    priority={index < 3}
                  />
                </div>

                {/* Value Content */}
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </Layout>
  );
}
