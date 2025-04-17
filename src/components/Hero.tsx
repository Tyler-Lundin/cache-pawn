import Image from 'next/image';
import ParallaxBackground from './ParallaxBackground';
import BackgroundSlideshow from './BackgroundSlideshow';

const Hero = () => {
    const storeImages = [
        '/images/store1.jpg',
        '/images/store2.jpg',
        '/images/store3.jpg',
        '/images/store4.jpg',
      ];
      
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      


      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center px-1 py-16 sm:py-24">
        <div className="backdrop-blur-sm bg-white/80 rounded-2xl p-3 sm:p-12 shadow-xl border border-white/20 relative">
            <BackgroundSlideshow 
        images={storeImages} 
        interval={8000}
        className="mix-blend-overlay"
      />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Your Trusted Pawn Shop in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-red-600">
              Logan, UT
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Fast Cache Pawn has been serving the community for over 20 years. 
            We offer a wide range of services including cash loans, jewelry, 
            musical instruments, electronics, and more. Our experienced staff 
            is here to help you find exactly what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#services" 
              className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-105 shadow-lg hover:shadow-amber-500/20"
            >
              Our Services
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 bg-white text-gray-900 border-2 border-gray-200 rounded-xl font-semibold hover:border-amber-500 transition-all hover:scale-105 shadow-lg hover:shadow-gray-500/10"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 