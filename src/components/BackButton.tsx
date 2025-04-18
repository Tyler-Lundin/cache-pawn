"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';

interface BackButtonProps {
  href?: string;
  className?: string;
}

export const BackButton = ({ href = '/', className = '' }: BackButtonProps) => {
  return (
    <motion.div
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ 
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] // Custom easing curve for smooth motion
      }}
      className="fixed top-0 left-0 z-50"
    >
      <Link 
        href={href}
        className={`px-3 py-2 bg-white/95 border-b border-r rounded-br-lg border-black/20 group flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-all duration-300 ${className}`}
      >
        <motion.div
          whileHover={{ x: -4 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </motion.div>
        <motion.span 
          className="text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.05 }}
        >
          Back
        </motion.span>
      </Link>
    </motion.div>
  );
}; 