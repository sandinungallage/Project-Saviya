import type { Metadata } from 'next';
import React from 'react';
import { PageBanner } from '@/components/common/page-banner';
import { InformationCard } from '@/components/common/info-card';
import { GlassCard } from '@/components/common/glass-card';
import { BookOpen, Calendar, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: "Gratitude Journal | Sahanaya",
  description: "Reflect on your day, log highlights, write notes, and compile a private gratitude journal securely.",
};

export default function JournalPage() {
  const previousEntries = [
    {
      title: "Finding peace at the park",
      date: "July 28, 2026",
      preview: "I took a 15-minute walk today after finishing the coding sprint. It helped clear my head..."
    },
    {
      title: "Grateful for peer support",
      date: "July 24, 2026",
      preview: "Had a great call with the Leo Club committee members. Feeling supported in my volunteer role..."
    }
  ];

  return (
    <div className="flex flex-col w-full pb-16">
      <PageBanner 
        title="Gratitude Journal" 
        description="A private, secure space to note down thoughts, reflect on daily positive triggers, and practice self-compassion."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 flex flex-col gap-8">
        <InformationCard
          type="info"
          title="Privacy Check"
          description="Your journal entries are encrypted and private. Leo Club moderators and system admins have zero access to your text content."
        />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* New Entry Form */}
          <div className="md:col-span-8">
            <GlassCard hoverable={false} className="border border-border p-6 flex flex-col gap-4 text-left">
              <span className="text-sm font-bold text-foreground">Write a New Entry</span>
              
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Title</label>
                <input
                  type="text"
                  disabled
                  placeholder="What's on your mind today? (Locked)"
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-border bg-muted/40 cursor-not-allowed outline-none text-muted-foreground"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Content</label>
                <textarea
                  rows={5}
                  disabled
                  placeholder="Start writing... (Locked)"
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-border bg-muted/40 cursor-not-allowed outline-none text-muted-foreground resize-none"
                />
              </div>

              <Button variant="primary" disabled className="w-fit text-xs py-2.5 px-6 self-start">
                <Lock className="h-3.5 w-3.5" />
                <span>Save Entry (Locked)</span>
              </Button>
            </GlassCard>
          </div>

          {/* History / Previous Entries */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <span className="text-xs font-bold text-foreground text-left uppercase tracking-wider flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-primary" />
              <span>Past Journal Entries</span>
            </span>

            {previousEntries.map((ent, idx) => (
              <GlassCard key={idx} hoverable={true} className="p-4 border border-border flex flex-col text-left gap-2 cursor-not-allowed">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-foreground truncate max-w-[150px]">{ent.title}</span>
                  <span className="text-[9px] text-muted-foreground">{ent.date}</span>
                </div>
                <p className="text-[10px] text-muted-foreground line-clamp-2 leading-relaxed">{ent.preview}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
