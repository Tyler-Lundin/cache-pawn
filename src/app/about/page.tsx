import ParallaxBackground from '@/components/ParallaxBackground';
import ImageSlideshow from '@/components/ImageSlideshow';
import { BackButton } from '@/components/BackButton';
import PageHero from '@/components/PageHero';
import { storeImages } from '@/lib/constants';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white/90">
      <ParallaxBackground />
      <BackButton />

      <PageHero 
        title="Our Story"
        subtitle="Serving the Logan community with integrity and excellence for over 20 years"
      />

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Your Trusted Pawn Shop in Logan
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Fast Cache Pawn has been a cornerstone of the Logan community for over two decades. 
                We&apos;ve built our reputation on trust, fair dealing, and exceptional customer service.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our experienced staff is dedicated to helping you find exactly what you need, 
                whether you&apos;re looking to buy, sell, or secure a loan. We take pride in offering 
                competitive rates and a wide selection of quality items.
              </p>
            </div>
            <ImageSlideshow images={storeImages} interval={4000} />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building trust through integrity and exceptional service
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Trust',
                description: 'We believe in building long-term relationships based on trust and transparency'
              },
              {
                title: 'Service',
                description: 'Our experienced staff is dedicated to providing exceptional customer service'
              },
              {
                title: 'Value',
                description: 'We offer competitive rates and fair deals on all our services'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 