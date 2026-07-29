import type { Metadata } from 'next';
import React from 'react';
import { PageBanner } from '@/components/common/page-banner';
import { InformationCard } from '@/components/common/info-card';
import { GlassCard } from '@/components/common/glass-card';
import { LayoutDashboard, Calendar, Activity, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: "User Dashboard | Sahanaya",
  description: "Access your dashboard to view emotional charts, review recent screening scores, and look back at journal entries.",
};

export default function DashboardPage() {
  return (
    <div className="flex flex-col w-full pb-16">
      <PageBanner 
        title="Your Wellness Dashboard" 
        description="View custom metrics, retrieve saved assessments, and trace your personal gratitude journals."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 flex flex-col gap-8 text-left">
        <InformationCard
          type="info"
          title="Account Information"
          description="You are currently browsing the dashboard template. Connect your guest or Google account to enable daily tracking."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <GlassCard hoverable={false} className="border border-border p-5 flex flex-col gap-3">
            <Calendar className="h-6 w-6 text-primary" />
            <span className="text-xs font-bold text-foreground uppercase tracking-wider">Mood Streak</span>
            <span className="text-2xl font-extrabold text-foreground">0 Days</span>
          </GlassCard>

          <GlassCard hoverable={false} className="border border-border p-5 flex flex-col gap-3">
            <Activity className="h-6 w-6 text-secondary-foreground dark:text-secondary" />
            <span className="text-xs font-bold text-foreground uppercase tracking-wider">Screening Tests</span>
            <span className="text-2xl font-extrabold text-foreground">0 Saved</span>
          </GlassCard>

          <GlassCard hoverable={false} className="border border-border p-5 flex flex-col gap-3">
            <BookOpen className="h-6 w-6 text-accent" />
            <span className="text-xs font-bold text-foreground uppercase tracking-wider">Journal Entries</span>
            <span className="text-2xl font-extrabold text-foreground">0 Logs</span>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
