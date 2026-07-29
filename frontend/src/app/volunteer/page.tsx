import type { Metadata } from 'next';
import React from 'react';
import { PageBanner } from '@/components/common/page-banner';
import { InformationCard } from '@/components/common/info-card';
import { GlassCard } from '@/components/common/glass-card';
import { HandHelping, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: "Volunteer Registration | Sahanaya",
  description: "Become a peer advocate, translate wellness articles, or support the Leo Club Sahanaya initiative as a volunteer.",
};

export default function VolunteerPage() {
  return (
    <div className="flex flex-col w-full pb-16">
      <PageBanner 
        title="Volunteer with Sahanaya" 
        description="Join us in advocating for mental health awareness. Become a helper, contributor, or content translation peer."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 flex flex-col gap-8">
        <InformationCard
          type="info"
          title="Volunteer Code"
          description="Volunteers do not act as clinical therapists. Peer supporters receive basic psychological first-aid guidelines before participating."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Form */}
          <div className="md:col-span-8">
            <GlassCard hoverable={false} className="border border-border p-6 flex flex-col gap-4 text-left">
              <span className="text-sm font-bold text-foreground">Sign Up as a Volunteer Advocate</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    disabled
                    placeholder="Enter your name (Locked)"
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-border bg-muted/40 cursor-not-allowed text-muted-foreground outline-none"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    disabled
                    placeholder="Enter your email (Locked)"
                    className="w-full px-4 py-2.5 text-xs rounded-xl border border-border bg-muted/40 cursor-not-allowed text-muted-foreground outline-none"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">How would you like to contribute?</label>
                <select
                  disabled
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-border bg-muted/40 cursor-not-allowed text-muted-foreground outline-none"
                >
                  <option>Translation (English/Sinhala/Tamil)</option>
                  <option>Content Writing / Resource Editing</option>
                  <option>Public Event Coordinator</option>
                </select>
              </div>

              <Button variant="primary" disabled className="w-fit text-xs py-2.5 px-6 mt-2">
                <Lock className="h-3.5 w-3.5" />
                <span>Submit Application (Locked)</span>
              </Button>
            </GlassCard>
          </div>

          {/* Guidelines */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <GlassCard hoverable={false} className="border border-border p-5 text-left flex flex-col gap-3">
              <HandHelping className="h-8 w-8 text-primary" />
              <span className="text-sm font-bold text-foreground">Why Volunteer?</span>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Volunteering with the Leo Club allows you to drive tangible impact across school colleges, universities, and work environments, helping to normalize discussions on mental care.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
