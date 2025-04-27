'use client';

import { services } from '@/lib/services';
import Image from 'next/image';
const ServicesGrid = () => {

  return (
    <section id="services" className="py-20 px-6 bg-gradient-to-b from-white to-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4 uppercase tracking-wider">
          What We Offer
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
          Cash loans, trusted appraisals, valuable goods — get what you need, fast.
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden p-6 flex flex-col items-center justify-center text-center shadow-xl hover:scale-105 hover:shadow-amber-500/30 transition-all duration-300 bg-black/70"
          >
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
              <Image
                src={service.bg}
                alt={`${service.name} background`}
                fill
                className="object-cover object-center opacity-30"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                priority={index < 3} // prioritize first few for faster paint
              />
            </div>

            {/* Content Layer */}
            <div className="relative z-10">
              <div className="text-5xl mb-3 text-amber-400 group-hover:rotate-6 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-white tracking-wide uppercase">
                {service.name}
              </h3>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 rounded-full opacity-70" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
