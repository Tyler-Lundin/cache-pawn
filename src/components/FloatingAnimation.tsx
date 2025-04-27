'use client';

import { motion } from 'framer-motion';

interface FloatingAnimationProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  yOffset?: number;
}

export const FloatingAnimation = ({ 
  children, 
  className = '',
  duration = 4,
  yOffset = 5 
}: FloatingAnimationProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -yOffset, 0],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}; 