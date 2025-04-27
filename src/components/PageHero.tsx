import BackgroundSlideshow from './BackgroundSlideshow';
import { storeImages } from '@/lib/constants';
import { motion } from 'framer-motion';

interface PageHeroProps {
  title: string;
  subtitle: string;
  interval?: number;
}

const PageHero = ({ 
  title, 
  subtitle, 
  interval = 6000 
}: PageHeroProps) => {
  return (
    <section className="relative py-32 bg-gradient-to-b from-white/90 via-white/80 to-white/60 backdrop-blur-sm overflow-hidden">

      {/* Background Slideshow */}
      <div className="absolute inset-0 -z-10">
        <BackgroundSlideshow images={storeImages} interval={interval} />
        {/* Subtle overlay to boost text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-white/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 drop-shadow-md mb-6">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            {subtitle}
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default PageHero;
