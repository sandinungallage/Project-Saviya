import type { Metadata } from 'next';
import React from 'react';
import { PageBanner } from '@/components/common/page-banner';
import { GlassCard } from '@/components/common/glass-card';

export const metadata: Metadata = {
  title: "Terms & Conditions | Sahanaya",
  description: "Terms of service for utilizing the Sahanaya mental wellness platform templates.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col w-full pb-16">
      <PageBanner 
        title="Terms & Conditions" 
        description="Please review our terms of service before using Sahanaya's wellness and screening modules."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 flex flex-col gap-6 text-left">
        <GlassCard hoverable={false} className="border border-border p-6 sm:p-8 flex flex-col gap-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
          <h2 className="text-base font-bold text-foreground">1. Non-Medical Support Disclaimer</h2>
          <p>
            Sahanaya is not a clinical medical platform. By using the assessments, mood tracker, journal, and AI Companion, you agree that these services do not constitute professional diagnosis, clinical psychiatry, or emergency ambulance dispatch. In case of emergency, you must seek direct help from helpline desks or base hospitals.
          </p>
          
          <h2 className="text-base font-bold text-foreground">2. Code of Conduct</h2>
          <p>
            Users agree not to disrupt system databases, submit malicious inputs to the chatbot companion, or input offensive contents inside forms.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
