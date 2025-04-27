'use client';

import { useEffect, useRef } from 'react';

export default function ParallaxBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }

      rafId.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        if (backgroundRef.current) {
          backgroundRef.current.style.transform = `translate3d(0, ${scrollY * 0.05}px, 0)`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white z-10 pointer-events-none" />
      <div
        ref={backgroundRef}
        className="absolute inset-0 will-change-transform"
        style={{
          backgroundImage: 'url("/images/background.jpeg")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          transform: 'translate3d(0, 0, 0)', // Initialize GPU compositing immediately
        }}
      />
    </div>
  );
}
