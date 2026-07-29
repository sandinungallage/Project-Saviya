import type { Metadata } from 'next';
import React from 'react';
import { PageBanner } from '@/components/common/page-banner';
import { InformationCard } from '@/components/common/info-card';
import { GlassCard } from '@/components/common/glass-card';
import { MessageSquare, Send, Sparkles, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: "AI Wellness Companion | Sahanaya",
  description: "Speak with Sahanaya AI, an empathetic companion for active listening, coping advice, and stress management.",
};

export default function AICompanionPage() {
  return (
    <div className="flex flex-col w-full pb-16">
      <PageBanner 
        title="AI Companion" 
        description="Interact with Sahanaya's wellness assistant for mental health guidance, relaxation tips, and a warm listening ear."
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 flex flex-col gap-8">
        {/* Important Warning Banner */}
        <InformationCard
          type="error"
          title="AI Companion Disclaimer"
          description="Sahanaya Bot is an automated conversational tool. It cannot provide psychiatric diagnosis, therapy sessions, or crisis interventions. In case of thoughts of self-harm or a mental health crisis, please call a professional national helpline immediately."
        />

        {/* Chat Interface Container */}
        <GlassCard hoverable={false} className="border border-border p-0 flex flex-col h-[500px] overflow-hidden bg-card">
          {/* Header */}
          <div className="px-6 py-4 border-b border-border bg-muted/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Sparkles className="h-4.5 w-4.5" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-foreground leading-none">Sahanaya Bot</span>
                <span className="text-[10px] text-muted-foreground mt-1">Free digital wellness listener</span>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[9px] font-bold text-emerald-500 uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Online</span>
            </div>
          </div>

          {/* Chat Feed */}
          <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-4 bg-muted/5">
            {/* Bot Message Welcome */}
            <div className="flex gap-3 max-w-[80%] self-start text-left">
              <div className="h-8 w-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                S
              </div>
              <div className="p-3.5 rounded-2xl rounded-tl-none bg-card border border-border text-xs sm:text-sm text-foreground leading-relaxed shadow-sm">
                Hello. I am Sahanaya Bot, your peer wellness companion. You can talk to me about exam stress, feeling overwhelmed, or just share your daily thoughts. How can I help you breathe easier today?
              </div>
            </div>
          </div>

          {/* Input Panel */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex items-center gap-2 max-w-full">
              <input
                type="text"
                disabled
                placeholder="Talk to Sahanaya Bot... (Locked)"
                className="flex-1 px-5 py-3 rounded-full border border-border bg-muted/40 cursor-not-allowed text-xs sm:text-sm text-muted-foreground outline-none placeholder:text-muted-foreground"
              />
              <Button variant="primary" disabled className="p-3 rounded-full shrink-0">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
