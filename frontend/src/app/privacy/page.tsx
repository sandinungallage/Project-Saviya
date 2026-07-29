import type { Metadata } from 'next';
import React from 'react';
import { PageBanner } from '@/components/common/page-banner';
import { GlassCard } from '@/components/common/glass-card';

export const metadata: Metadata = {
  title: "Privacy Policy | Sahanaya",
  description: "Learn how Sahanaya handles user confidentiality, local storage data logging, and encryption principles.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full pb-16">
      <PageBanner 
        title="Privacy Policy" 
        description="Confidentiality and trust are cornerstones of mental health support. Read our privacy commitment."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 flex flex-col gap-6 text-left">
        <GlassCard hoverable={false} className="border border-border p-6 sm:p-8 flex flex-col gap-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-base font-bold text-foreground">1. User Confidentiality</h2>
          <p>
            Sahanaya is designed with a strict privacy-first architecture. Accessing emergency directories, reading self-care resources, and running somatic relax timers do not require user accounts or register details.
          </p>
          
          <h2 className="text-base font-bold text-foreground">2. Journal & Mood Logs</h2>
          <p>
            Any gratitude diary entries or emotional mood tracking scores you save are associated with your account token and encrypted in the database. Leo Club organizers, moderators, or developers cannot read the text of your logs.
          </p>

          <h2 className="text-base font-bold text-foreground">3. AI Chat Privacy</h2>
          <p>
            Conversations with Sahanaya AI Companion are run to provide coping suggestions. Chat records are stored dynamically to maintain dialogue history and are not used for public data modeling. If active suicidal keywords are detected, the system immediately highlights crisis contact resources.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
