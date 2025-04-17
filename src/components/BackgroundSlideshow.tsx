'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface BackgroundSlideshowProps {
  images: string[];
  interval?: number;
  className?: string;
}

const BackgroundSlideshow = ({ 
  images, 
  interval = 8000, // Slower transitions for background
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
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-2000 ${
            index === currentIndex ? 'opacity-20' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt=""
            fill
            className="object-cover grayscale blur-sm"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default BackgroundSlideshow; 