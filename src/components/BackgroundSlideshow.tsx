'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface BackgroundSlideshowProps {
  images: string[];
  interval?: number;
  className?: string;
}

const BackgroundSlideshow = ({ 
  images, 
  interval = 8000,
  className = '' 
}: BackgroundSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      
      {/* Soft overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/20 z-10 pointer-events-none" />

      <AnimatePresence initial={false}>
        {images.map((src, index) => (
          index === currentIndex && (
            <motion.div
              key={src}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2, scale: 1.05 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover blur-[2px]"
                priority
              />
            </motion.div>
          )
        ))}
      </AnimatePresence>

    </div>
  );
};

export default BackgroundSlideshow;
