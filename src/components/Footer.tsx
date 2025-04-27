'use client';

import Link from 'next/link';
import Logo from '@/components/Logo';

const Footer = () => {
  return (
    <footer className="backdrop-blur-sm bg-gradient-to-b from-white/70 to-gray-100 border-t border-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* Brand Info */}
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-700 text-sm max-w-xs leading-relaxed">
              Your trusted pawn shop in Logan, Utah — real deals for over 20 years.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Services', href: '/services' },
                { label: 'About Us', href: '/about' },
                { label: 'Contact', href: '/contact' },
                { label: 'Privacy Policy', href: '/privacy' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    className="text-gray-600 hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-gray-900 uppercase tracking-wider">Contact</h3>
            <div className="text-sm text-gray-700 space-y-1">
              <p>Fast Cache Pawn</p>
              <p>527 Main St</p>
              <p>Logan, UT 84321</p>
              <p>
                <a 
                  href="tel:4357532316" 
                  className="text-amber-600 hover:text-amber-700 transition-colors"
                >
                  (435) 753-2316
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} Fast Cache Pawn. All rights reserved.</p>
          <p className="mt-2">
            Serving Logan since 2001
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
