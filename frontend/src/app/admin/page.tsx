import type { Metadata } from 'next';
import React from 'react';
import { PageBanner } from '@/components/common/page-banner';
import { InformationCard } from '@/components/common/info-card';
import { GlassCard } from '@/components/common/glass-card';
import { ShieldAlert, BookOpen, AlertOctagon, Settings, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: "Admin Dashboard | Sahanaya",
  description: "Moderation console for Leo Club administrators to manage articles, update helplines, and review system settings.",
};

export default function AdminPage() {
  const stats = [
    { label: "Published Articles", count: 3, icon: BookOpen },
    { label: "Emergency Contacts", count: 4, icon: AlertOctagon },
    { label: "Pending Volunteers", count: 0, icon: Settings }
  ];

  return (
    <div className="flex flex-col w-full pb-16">
      <PageBanner 
        title="Admin Control Panel" 
        description="Moderation console for authorized Leo Club members to manage wellness articles and helpline indexes."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 flex flex-col gap-8 text-left">
        {/* Verification Warning */}
        <InformationCard
          type="error"
          title="Restricted Administrative Access"
          description="This section is reserved for the Leo Club of Pannipitiya Paradise administrative moderators. Unauthorized access is blocked."
        />

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((st, idx) => {
            const Icon = st.icon;
            return (
              <GlassCard key={idx} hoverable={false} className="border border-border p-5 flex flex-col gap-3">
                <Icon className="h-6 w-6 text-primary" />
                <span className="text-xs font-bold text-foreground uppercase tracking-wider">{st.label}</span>
                <span className="text-2xl font-extrabold text-foreground">{st.count}</span>
              </GlassCard>
            );
          })}
        </div>

        {/* Action Panel placeholder */}
        <GlassCard hoverable={false} className="border border-border p-8 text-center max-w-md mx-auto flex flex-col items-center gap-4 mt-4">
          <div className="p-3 bg-red-500/10 text-red-500 rounded-full">
            <ShieldAlert className="h-6 w-6" />
          </div>
          <span className="text-base font-bold text-foreground">Sign In Required</span>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Please log in with your administrative credentials to configure resources, approve volunteer requests, and audit logs.
          </p>
          <Button variant="primary" disabled className="text-xs py-2.5 px-6">
            <Lock className="h-3.5 w-3.5" />
            <span>Admin Sign In (Locked)</span>
          </Button>
        </GlassCard>
      </div>
    </div>
  );
}
