import type { Metadata } from 'next';
import React from 'react';
import { PageBanner } from '@/components/common/page-banner';
import { InformationCard } from '@/components/common/info-card';
import { GlassCard } from '@/components/common/glass-card';
import { Smile, Activity, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: "Mood Tracker | Sahanaya",
  description: "Check in with your feelings daily. Chart your moods and emotional trends over time.",
};

export default function MoodTrackerPage() {
  const moodScale = [
    { label: "Struggling", val: 1, emoji: "😢" },
    { label: "Anxious", val: 2, emoji: "😰" },
    { label: "Neutral", val: 3, emoji: "😐" },
    { label: "Good", val: 4, emoji: "🙂" },
    { label: "Peaceful", val: 5, emoji: "🌸" }
  ];

  return (
    <div className="flex flex-col w-full pb-16">
      <PageBanner 
        title="Mood Tracker" 
        description="Monitor your day-to-day moods, identify trigger events, and gain visibility over your emotional waves."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 flex flex-col gap-8">
        <InformationCard
          type="info"
          title="Daily Check-in"
          description="Mood tracking helps build self-awareness. Taking 10 seconds every evening to record your mood provides valuable pattern insights."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Tracker Selection Card */}
          <div className="md:col-span-6">
            <GlassCard hoverable={false} className="border border-border p-6 flex flex-col gap-5 text-left">
              <span className="text-sm font-bold text-foreground">How are you feeling right now?</span>
              
              <div className="flex justify-between gap-2 py-3 border-y border-border/40">
                {moodScale.map((m, idx) => (
                  <button
                    key={idx}
                    disabled
                    className="flex flex-col items-center gap-1.5 p-2 rounded-xl hover:bg-muted cursor-not-allowed transition-colors text-center opacity-60 flex-1"
                  >
                    <span className="text-2xl sm:text-3xl">{m.emoji}</span>
                    <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-tight">{m.label}</span>
                  </button>
                ))}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Add tags (Locked)</label>
                <div className="flex flex-wrap gap-1.5">
                  {["Stressed", "Tired", "Excited", "Productive", "Relaxed", "Sad"].map((t, idx) => (
                    <span key={idx} className="text-[10px] px-2.5 py-1 rounded-full border border-border text-muted-foreground font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <Button variant="primary" disabled className="w-full text-xs py-2.5">
                <Lock className="h-3.5 w-3.5" />
                <span>Save Mood Entry (Locked)</span>
              </Button>
            </GlassCard>
          </div>

          {/* Analytical summary card */}
          <div className="md:col-span-6">
            <GlassCard hoverable={false} className="border border-border p-6 flex flex-col gap-4 text-left h-full">
              <span className="text-sm font-bold text-foreground flex items-center gap-1.5">
                <Activity className="h-4.5 w-4.5 text-primary" />
                <span>Weekly Insights</span>
              </span>
              
              <div className="min-h-[150px] bg-muted/30 border border-border rounded-xl flex items-center justify-center text-center p-4">
                <span className="text-xs text-muted-foreground">Historical mood logs will appear here after you save entries.</span>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
