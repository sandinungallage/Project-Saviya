'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] gap-4" aria-busy="true" aria-live="polite">
      <div className="relative flex items-center justify-center">
        {/* Outer breathing ring */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute h-12 w-12 rounded-full border-2 border-primary/30"
        />
        
        {/* Core spinning ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
          className="h-8 w-8 rounded-full border-2 border-t-primary border-r-transparent border-b-transparent border-l-transparent"
        />
      </div>
      <span className="text-xs font-medium text-muted-foreground animate-pulse tracking-wide">
        Breathe in, breathe out...
      </span>
    </div>
  );
};
