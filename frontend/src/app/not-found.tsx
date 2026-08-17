'use client';

import React from 'react';
import Link from 'next/link';
import { Home, HelpCircle, PhoneCall } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GlassCard } from '@/components/common/glass-card';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center py-20 px-4 text-center bg-gradient-to-b from-primary/[0.02] to-transparent">
      <GlassCard hoverable={false} className="border border-border p-8 max-w-md w-full flex flex-col items-center gap-6">
        <div className="h-14 w-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold animate-pulse">
          404
        </div>
        
        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold text-foreground">A Quiet Moment</span>
          <p className="text-xs text-muted-foreground leading-relaxed">
            The page you are looking for has drifted away. Take a deep breath and find your way back using the options below.
          </p>
        </div>

        <div className="flex flex-col gap-2.5 w-full mt-2">
          <Link href="/" className="outline-none w-full">
            <Button variant="primary" className="w-full text-xs font-semibold py-2.5">
              <Home className="h-3.5 w-3.5" />
              <span>Back to Home</span>
            </Button>
          </Link>
          <Link href="/emergency" className="outline-none w-full">
            <Button variant="emergency" className="w-full text-xs font-semibold py-2.5">
              <PhoneCall className="h-3.5 w-3.5" />
              <span>Emergency Help</span>
            </Button>
          </Link>
        </div>
      </GlassCard>
    </div>
  );
}
