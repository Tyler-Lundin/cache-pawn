import Image from 'next/image';
import Link from 'next/link';
import ParallaxBackground from '@/components/ParallaxBackground';
import ImageSlideshow from '@/components/ImageSlideshow';
import BackgroundSlideshow from '@/components/BackgroundSlideshow';

const storeImages = [
  '/images/store1.jpg',
  '/images/store2.jpg',
  '/images/store3.jpg',
  '/images/store4.jpg',
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white/90">
      <ParallaxBackground />
      {/* Back Button */}
      <Link 
        href="/"
        className="fixed top-0 left-0 px-2 p-1 bg-white/90 border-b border-r rounded-br-lg border-black group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-all duration-300 z-50"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        <span className="text-sm font-medium opacity-40 group-hover:opacity-100 transition-opacity duration-300">
          Back
        </span>
      </Link>

      {/* Hero Section */}
      <section className="relative py-20">
        <BackgroundSlideshow images={storeImages} interval={8000} />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our Story
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Serving the Logan community with integrity and excellence for over 20 years
            </p>
          </div>
        </div>
      </section>

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
                We've built our reputation on trust, fair dealing, and exceptional customer service.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our experienced staff is dedicated to helping you find exactly what you need, 
                whether you're looking to buy, sell, or secure a loan. We take pride in offering 
                competitive rates and a wide selection of quality items.
              </p>
            </div>
            <ImageSlideshow images={storeImages} interval={4000} />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Cash Loans',
                description: 'Quick and confidential loans with competitive rates'
              },
              {
                title: 'Jewelry',
                description: 'Fine jewelry, gold, and precious metals'
              },
              {
                title: 'Electronics',
                description: 'Quality used electronics and stereo equipment'
              },
              {
                title: 'Musical Instruments',
                description: 'Guitars and other musical instruments'
              },
              {
                title: 'Title Loans',
                description: 'Vehicle title loans with fair terms'
              },
              {
                title: 'Used Equipment',
                description: 'A wide variety of quality used items'
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
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