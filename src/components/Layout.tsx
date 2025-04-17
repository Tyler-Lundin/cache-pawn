"use client";
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Logo from './Logo';
import { LayoutProps } from '@/types';
import ParallaxBackground from './ParallaxBackground';
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white/50 to-blue-300/50">
      <ParallaxBackground />
      <Navbar />
      
      <main className="max-w-7xl mx-auto bg-white/30 backdrop-blur-[1px] md:px-8 py-4 md:py-12">
        {children}
      </main>

      <footer className="backdrop-blur-sm mt-auto bg-white/30 border-t border-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Logo />
              <p className="mt-4 text-gray-600">
                Your trusted pawn shop in Logan, UT for over 20 years.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-600 hover:text-amber-500 transition-colors">Services</a></li>
                <li><a href="#reviews" className="text-gray-600 hover:text-amber-500 transition-colors">Reviews</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-amber-500 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
              <p className="text-gray-600">527 Main St</p>
              <p className="text-gray-600">Logan, UT 84321</p>
              <p className="text-gray-600">(435) 753-2316</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-black/50">
            <p className="text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} Fast Cache Pawn. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 