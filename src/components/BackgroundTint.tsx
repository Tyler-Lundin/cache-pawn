'use client';

import { motion } from 'framer-motion';

const BackgroundTint = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base layer with subtle gradient */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/80 to-white/70"
      />

      {/* Animated gradient overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0 bg-gradient-to-br from-amber-50/20 via-transparent to-blue-50/20"
      />

      {/* Subtle noise texture */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
        }}
      />

      {/* Animated light rays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-0 w-full h-full">
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0"
          />
        </div>
      </motion.div>

      {/* Subtle border gradient */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 2%, rgba(255,255,255,0) 98%, rgba(255,255,255,0.1) 100%)',
        }}
      />
    </div>
  );
};

export default BackgroundTint; 