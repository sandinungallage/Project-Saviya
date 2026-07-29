import type { Metadata } from 'next';
import React from 'react';
import { PageBanner } from '@/components/common/page-banner';
import { InformationCard } from '@/components/common/info-card';
import { GlassCard } from '@/components/common/glass-card';
import { Heart, Users, Target, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: "About Sahanaya | Leo Club of Pannipitiya Paradise",
  description: "Learn about the mission, values, and story behind Sahanaya, the official mental wellness initiative of the Leo Club of Pannipitiya Paradise, Sri Lanka.",
};

export default function AboutPage() {
  const objectives = [
    {
      title: "Raise Public Awareness",
      desc: "Promote healthy mental habits and dissolve social stigma surrounding mental illnesses through active education.",
      icon: Target,
    },
    {
      title: "Provide Free Access",
      desc: "Make daily self-care logs, breathing exercises, and screening tests available to everyone without financial barriers.",
      icon: Heart,
    },
    {
      title: "Bridge Professional Care",
      desc: "Connect users in emotional distress with verified, free national helpline desks and counselors in Sri Lanka.",
      icon: ShieldCheck,
    }
  ];

  return (
    <div className="flex flex-col w-full pb-16">
      <PageBanner 
        title="About Sahanaya" 
        description="Learn more about the mission, history, and goals of our community mental wellness project."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 flex flex-col gap-10">
        {/* Warning Banner */}
        <InformationCard
          type="warning"
          title="Educational Support Disclaimer"
          description="Sahanaya is a digital guidance tool developed for peer support and mental wellness awareness. It is not an alternative to licensed clinical diagnosis, therapy, counseling, or medical treatments."
        />

        {/* Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 flex flex-col gap-4 text-left">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">Our Story & Mission</h2>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Mental health is one of the most critical yet neglected areas of social well-being in Sri Lanka. High academic pressures on G.C.E. Advanced Level (A/L) and university students, combined with occupational burnout among IT, banking, and BPO professionals, highlight an urgent need for easily accessible support systems.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Sahanaya was conceptualized by the Leo Club of Pannipitiya Paradise as an open-source, community-focused platform. It is designed to empower individuals with daily self-management tools, allowing them to track their emotional state, reflect in a private diary, and find verified emergency channels.
            </p>
          </div>
          <div className="md:col-span-5">
            <GlassCard hoverable={false} className="p-6 bg-gradient-to-br from-primary/10 via-card to-card flex flex-col gap-3 text-center border border-primary/20">
              <Users className="h-10 w-10 text-primary mx-auto" />
              <span className="text-base font-bold text-foreground">Community Driven</span>
              <p className="text-[11px] text-muted-foreground leading-relaxed">
                Operated entirely by youth volunteers from Leo District 306 A2, Sri Lanka. Built to foster community care and emotional health.
              </p>
            </GlassCard>
          </div>
        </div>

        {/* Objectives */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground text-left">Core Objectives</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {objectives.map((obj, idx) => {
              const Icon = obj.icon;
              return (
                <GlassCard key={idx} className="flex flex-col gap-3 text-left">
                  <div className="p-2.5 bg-primary/15 text-primary rounded-xl w-fit">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-bold text-foreground">{obj.title}</span>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{obj.desc}</p>
                </GlassCard>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
