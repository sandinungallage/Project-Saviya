import type { Metadata } from 'next';
import React from 'react';
import { PageBanner } from '@/components/common/page-banner';
import { GlassCard } from '@/components/common/glass-card';
import { ShieldCheck, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: "Our Partners & Alliances | Sahanaya",
  description: "Collaborating with local clinics, support networks, and psychiatrists to expand mental wellness access across Sri Lanka.",
};

export default function PartnersPage() {
  return (
    <div className="flex flex-col w-full pb-16">
      <PageBanner 
        title="Partners & Alliances" 
        description="We collaborate with registered medical professionals, mental health NGOs, and youth welfare networks."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 flex flex-col gap-6 text-center">
        <GlassCard hoverable={false} className="border border-border p-8 max-w-lg mx-auto flex flex-col items-center gap-4">
          <div className="p-3 bg-secondary/10 text-secondary-foreground dark:text-secondary rounded-full">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <span className="text-base font-bold text-foreground">Sponsorship & Collaborations</span>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Leo Club of Pannipitiya Paradise works in compliance with District 306 A2 guidelines. If you represent a registered counseling organization or clinic in Sri Lanka and wish to support our mission, please reach out via our contact page.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
