'use client';

import React from 'react';
import Link from 'next/link';
import { LucideIcon, ArrowRight } from 'lucide-react';
import { GlassCard } from './glass-card';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color?: 'primary' | 'secondary' | 'accent' | 'rose';
  linkText?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  href,
  color = 'primary',
  linkText = "Explore"
}) => {
  const colorMap = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/15 text-secondary-foreground dark:text-secondary',
    accent: 'bg-accent/10 text-accent',
    rose: 'bg-rose-500/10 text-rose-500'
  }[color];

  return (
    <GlassCard className="flex flex-col h-full justify-between items-start gap-4">
      <div className="flex flex-col gap-3">
        <div className={`p-3 rounded-2xl w-fit ${colorMap}`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold text-foreground tracking-tight">{title}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
      </div>
      
      <Link 
        href={href} 
        className="flex items-center gap-1 text-xs font-semibold text-primary hover:text-opacity-80 transition-colors duration-300 outline-none focus:underline mt-2 self-start cursor-pointer group"
      >
        <span>{linkText}</span>
        <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </GlassCard>
  );
};
