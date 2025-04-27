'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';
import Logo from './Logo';  
import { usePathname } from 'next/navigation';

const activeLinkStyle = 'blur-[1px] opacity-50 pointer-events-none text-red-400';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check scroll position on mount
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Main Nav Container */}
      <nav className={`relative z-50 transition-all duration-500 bg-white/50 h-36`}>
        <div className="h-full">
          {/* Mobile Menu Button - Large Nav */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden absolute top-4 right-4 text-black hover:text-gray-600 transition-colors duration-200"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Large Logo Container */}
          <div className={`flex flex-col items-center justify-center transition-all duration-300 h-full ${
            isScrolled ? 'opacity-0' : 'opacity-100'
          }`}>
            <Link href="/" className="block">
              <Logo fullLogo={true} />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className={`hidden md:flex w-full bg-white border-y border-black py-1 justify-center space-x-8 transition-all duration-300 ${
            isScrolled ? 'opacity-0 -translate-y-20' : 'opacity-100'
          }`}>
            <Link href="/" className={`${pathname === '/' ? activeLinkStyle : ''} hover:text-gray-600 transition-all duration-200 blur-[0px] hover:blur-[1px] hover:scale-105`}>
              Home
            </Link>
            <Link href="/about" className={`${pathname === '/about' ? activeLinkStyle : ''} hover:text-gray-600 transition-all duration-200 blur-[0px] hover:blur-[1px] hover:scale-105`}>
              About
            </Link>
            <Link href="/services" className={`${pathname === '/services' ? activeLinkStyle : ''} hover:text-gray-600 transition-all duration-200 blur-[0px] hover:blur-[1px] hover:scale-105`}>
              Services
            </Link>
            <Link href="/contact" className={`${pathname === '/contact' ? activeLinkStyle : ''} hover:text-gray-600 transition-all duration-200 blur-[0px] hover:blur-[1px] hover:scale-105`}>
              Contact
            </Link>
            <Link href="/privacy" className={`${pathname === '/privacy' ? activeLinkStyle : ''} hover:text-gray-600 transition-all duration-200 blur-[0px] hover:blur-[1px] hover:scale-105`}>
              Privacy
            </Link>
          </div>
        </div>
      </nav>

      {/* Fixed Mini Navbar */}
      <div className={`fixed top-0 grid items-center left-0 right-0 z-50 bg-white/75 backdrop-blur-sm h-16 border-b border-black transition-all duration-300 ${
        isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Small Logo */}
          <Link href="/" className="absolute grid place-content-center z-[200] top-1/2 -translate-y-1/2 left-3 p-1">
            <Logo />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex w-full justify-center space-x-8">
            <Link href="/" className={`${pathname === '/' ? activeLinkStyle : ''} hover:text-gray-600 transition-all duration-200 blur-[0px] hover:blur-[1px] hover:scale-105`}>
              Home
            </Link>

            <Link href="/about" className={`${pathname === '/about' ? activeLinkStyle : ''} hover:text-gray-600 transition-colors duration-200`}>
              About
            </Link>
            <Link href="/services" className={`${pathname === '/services' ? activeLinkStyle : ''} hover:text-gray-600 transition-colors duration-200`}>
              Services
            </Link>
            <Link href="/contact" className={`${pathname === '/contact' ? activeLinkStyle : ''} hover:text-gray-600 transition-colors duration-200`}>
              Contact
            </Link>
            <Link href="/privacy" className={`${pathname === '/privacy' ? activeLinkStyle : ''} hover:text-gray-600 transition-colors duration-200`}>
              Privacy
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-black hover:text-gray-600 transition-colors duration-200 absolute top-1/2 -translate-y-1/2 right-4"
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={toggleMobileMenu} />
    </>
  );
} 