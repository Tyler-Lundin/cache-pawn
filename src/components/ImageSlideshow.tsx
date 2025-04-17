'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ImageSlideshowProps {
  images: string[];
  interval?: number;
  className?: string;
}

const ImageSlideshow = ({ 
  images, 
  interval = 5000, // 5 seconds default
  className = '' 
}: ImageSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative h-[400px] rounded-2xl overflow-hidden shadow-xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-red-600/20"></div>
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`Slideshow image ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlideshow; 