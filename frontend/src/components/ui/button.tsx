'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'emergency' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  disabled,
  ...props
}) => {
  let baseStyles = "px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2 cursor-pointer";
  let variantStyles = "";

  switch (variant) {
    case 'primary':
      variantStyles = "bg-primary text-primary-foreground hover:bg-opacity-90 shadow-sm focus:ring-primary/50";
      break;
    case 'secondary':
      variantStyles = "bg-secondary text-secondary-foreground hover:bg-opacity-95 shadow-sm focus:ring-secondary/50";
      break;
    case 'emergency':
      variantStyles = "bg-red-500 hover:bg-red-600 text-white shadow-md focus:ring-red-500/50 uppercase tracking-wide font-semibold border-2 border-red-400 dark:border-red-500 animate-pulse hover:animate-none";
      break;
    case 'ghost':
      variantStyles = "bg-transparent text-foreground hover:bg-muted focus:ring-border";
      break;
  }

  if (disabled) {
    variantStyles = "bg-slate-300 dark:bg-slate-700 text-slate-500 dark:text-slate-400 cursor-not-allowed shadow-none";
  }

  return (
    <motion.button
      whileHover={disabled ? undefined : { scale: 1.02, y: -1 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={`${baseStyles} ${variantStyles} ${className}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </motion.button>
  );
};
