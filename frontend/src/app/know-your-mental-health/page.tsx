import type { Metadata } from 'next';
import React from 'react';
import { PageBanner } from '@/components/common/page-banner';
import { InformationCard } from '@/components/common/info-card';
import { GlassCard } from '@/components/common/glass-card';
import { BookOpen, BrainCircuit, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
  title: "Know Your Mental Health | Sahanaya",
  description: "Learn about psychiatric conditions, emotional hygiene, anxiety coping strategies, and mental wellness models.",
};

export default function KnowYourMentalHealthPage() {
  const topics = [
    {
      title: "Understanding Anxiety & Panic",
      desc: "Learn about the difference between everyday stress and panic disorders, including physical signals of panic attacks.",
      icon: BrainCircuit,
    },
    {
      title: "Coping with Burnout",
      desc: "Understand symptoms of emotional exhaustion, physical fatigue, and cynicism, and learn strategies to recover.",
      icon: BookOpen,
    },
    {
      title: "De-stigmatizing Therapy",
      desc: "Demystifying what happens in a counseling session and why asking for support is a sign of personal courage.",
      icon: HeartHandshake,
    }
  ];

  return (
    <div className="flex flex-col w-full pb-16">
      <PageBanner 
        title="Know Your Mental Health" 
        description="Raise your awareness regarding emotional well-being, signs of clinical distress, and healthy boundaries."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 flex flex-col gap-10">
        <InformationCard
          type="info"
          title="Educational Guidelines"
          description="Education helps us identify warning signs early. However, reading resource articles should not be treated as a clinical self-diagnosis."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topics.map((topic, idx) => {
            const Icon = topic.icon;
            return (
              <GlassCard key={idx} className="flex flex-col text-left gap-3">
                <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-foreground">{topic.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{topic.desc}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}
