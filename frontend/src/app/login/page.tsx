import type { Metadata } from 'next';
import React from 'react';
import { PageBanner } from '@/components/common/page-banner';
import { GlassCard } from '@/components/common/glass-card';
import { Button } from '@/components/ui/button';
import { LogIn, UserCheck, Shield, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: "Login & Session Setup | Sahanaya",
  description: "Sign in using Google authentication, create an anonymous guest account, or log in as an administrator.",
};

export default function LoginPage() {
  return (
    <div className="flex flex-col w-full pb-16">
      <PageBanner 
        title="Access Sahanaya" 
        description="Choose your preferred login method to save journal entries, check mood trends, or moderate resource articles."
      />

      <div className="max-w-md mx-auto px-4 sm:px-6 w-full mt-10">
        <GlassCard hoverable={false} className="border border-border p-6 flex flex-col gap-6 text-center">
          <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto">
            <LogIn className="h-6 w-6" />
          </div>
          
          <div className="flex flex-col gap-1 text-center">
            <span className="text-sm font-bold text-foreground">Sign In Options</span>
            <p className="text-xs text-muted-foreground">Select how you want to interact with the platform.</p>
          </div>

          <div className="flex flex-col gap-3.5 mt-2">
            {/* Google OAuth placeholder */}
            <Button variant="primary" disabled className="w-full text-xs font-semibold py-3 flex items-center justify-center gap-2">
              <UserCheck className="h-4 w-4" />
              <span>Continue with Google (Locked)</span>
            </Button>
            
            {/* Guest Session placeholder */}
            <Button variant="secondary" disabled className="w-full text-xs font-semibold py-3 flex items-center justify-center gap-2">
              <SparklesIcon className="h-4 w-4" />
              <span>Continue as Anonymous Guest (Locked)</span>
            </Button>
          </div>
          
          <div className="border-t border-border/60 pt-4 mt-2">
            <Button variant="ghost" disabled className="w-full text-[11px] font-bold text-muted-foreground flex items-center justify-center gap-1">
              <Shield className="h-3.5 w-3.5" />
              <span>Admin Moderation Login (Locked)</span>
            </Button>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}

// Sparkles local placeholder icon helper
function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z" />
      <path d="m5 3 1 2.5L8.5 6 6 7 5 9.5 4 7 1.5 6 4 5Z" />
      <path d="m19 17 1 2.5 2.5.5-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z" />
    </svg>
  );
}
