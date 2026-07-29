'use client';

import React from 'react';
import { AlertCircle, CheckCircle2, Info, XCircle } from 'lucide-react';
import { GlassCard } from './glass-card';

interface InformationCardProps {
  title: string;
  description: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  action?: React.ReactNode;
}

export const InformationCard: React.FC<InformationCardProps> = ({
  title,
  description,
  type = 'info',
  action
}) => {
  const config = {
    info: {
      icon: Info,
      color: 'text-primary',
      bg: 'bg-primary/5',
      border: 'border-primary/20'
    },
    success: {
      icon: CheckCircle2,
      color: 'text-secondary-foreground dark:text-secondary',
      bg: 'bg-secondary/5',
      border: 'border-secondary/20'
    },
    warning: {
      icon: AlertCircle,
      color: 'text-amber-500',
      bg: 'bg-amber-500/5',
      border: 'border-amber-500/20'
    },
    error: {
      icon: XCircle,
      color: 'text-red-500',
      bg: 'bg-red-500/5',
      border: 'border-red-500/20'
    }
  }[type];

  const Icon = config.icon;

  return (
    <GlassCard hoverable={false} className={`border ${config.border} ${config.bg} p-5 flex gap-4 items-start`}>
      <div className={`p-2 rounded-xl bg-card border border-border shadow-xs ${config.color}`}>
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-bold text-foreground tracking-tight">{title}</span>
          <p className="text-xs text-muted-foreground leading-relaxed max-w-2xl">{description}</p>
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </GlassCard>
  );
};
