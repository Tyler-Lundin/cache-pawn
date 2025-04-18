import BackgroundSlideshow from './BackgroundSlideshow';
import { storeImages } from '@/lib/constants';

interface PageHeroProps {
  title: string;
  subtitle: string;
  interval?: number;
}

const PageHero = ({ 
  title, 
  subtitle, 
  interval = 8000 
}: PageHeroProps) => {
  return (
    <section className="relative py-20">
      <BackgroundSlideshow images={storeImages} interval={interval} />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PageHero; 