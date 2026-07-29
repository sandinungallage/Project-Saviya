'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverable = true
}) => {
  return (
    <motion.div
      whileHover={hoverable ? { y: -4, scale: 1.01, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)" } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={`glass-panel rounded-card p-6 shadow-sm overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
};
