import type { Metadata } from 'next';
import React from 'react';
import { PageBanner } from '@/components/common/page-banner';
import { InformationCard } from '@/components/common/info-card';
import { GlassCard } from '@/components/common/glass-card';
import { Wind, Volume2, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: "Relax Zone & Mindfulness | Sahanaya",
  description: "Access breathing timers, deep somatic calming guides, and therapeutic ambient soundscapes to relieve stress instantly.",
};

export default function RelaxPage() {
  const activities = [
    {
      title: "Box Breathing Guide",
      desc: "Equal duration inhalation, holding, exhalation, and holding. Highly recommended for lowering cortisol and calming physical nerves.",
      icon: Wind,
      duration: "4-4-4-4 rhythm"
    },
    {
      title: "5-4-3-2-1 Grounding Practice",
      desc: "A somatic visual and cognitive technique designed to redirect thoughts back to the physical present, breaking anxiety spikes.",
      icon: HelpCircle,
      duration: "Cognitive exercise"
    },
    {
      title: "Ambient Wellness Sounds",
      desc: "Calm rainforest, rain shower, and beach white noise to drown out office or study distractions.",
      icon: Volume2,
      duration: "Audio stream"
    }
  ];

  return (
    <div className="flex flex-col w-full pb-16">
      <PageBanner 
        title="Relax Zone" 
        description="Take a few moments for yourself. Breathe, ground your thoughts, and reset your nervous system."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 flex flex-col gap-10">
        <InformationCard
          type="info"
          title="Mindful Decompression"
          description="Somatic and breathing exercises help restore vagal nerve tone. Sit comfortably and reduce screen brightness while practicing."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map((act, idx) => {
            const Icon = act.icon;
            return (
              <GlassCard key={idx} className="flex flex-col justify-between text-left h-full gap-5 border border-border">
                <div className="flex flex-col gap-3">
                  <div className="p-3 rounded-xl bg-accent/15 text-accent w-fit">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-base font-bold text-foreground leading-snug">{act.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{act.desc}</p>
                  <span className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">Type: {act.duration}</span>
                </div>

                <Button variant="primary" disabled className="w-full text-xs py-2.5">
                  <span>Open Tool (Locked)</span>
                </Button>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
