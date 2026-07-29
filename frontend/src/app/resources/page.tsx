import type { Metadata } from 'next';
import React from 'react';
import { PageBanner } from '@/components/common/page-banner';
import { InformationCard } from '@/components/common/info-card';
import { GlassCard } from '@/components/common/glass-card';
import { BookOpen, Search, Filter } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Resource Hub | Sahanaya",
  description: "Browse peer-reviewed articles, guidebooks, and wellness tips on managing anxiety, coping with work stress, and mindful self-care.",
};

export default function ResourcesPage() {
  const categories = ["All Resources", "Stress Management", "Anxiety & Worry", "Self Care Habits", "A/L & Exam Pressure", "Burnout & IT Work"];

  const articles = [
    {
      title: "Coping with G.C.E. A/L Exam Anxiety",
      category: "A/L & Exam Pressure",
      readTime: "4 mins read",
      desc: "An educational guide for students facing high academic pressure. Includes study-interval strategies and breathing patterns.",
      date: "Jul 28, 2026"
    },
    {
      title: "Signs of Job Burnout in the IT Industry",
      category: "Burnout & IT Work",
      readTime: "6 mins read",
      desc: "Recognize psychological and physical warning signs of professional exhaustion, and set boundaries in remote teams.",
      date: "Jul 25, 2026"
    },
    {
      title: "Mindfulness and Daily Breathing Habits",
      category: "Self Care Habits",
      readTime: "3 mins read",
      desc: "A brief guide on introducing standard box breathing exercises into your work-from-home schedule.",
      date: "Jul 20, 2026"
    }
  ];

  return (
    <div className="flex flex-col w-full pb-16">
      <PageBanner 
        title="Mental Wellness Resources" 
        description="Explore educational articles and guides to help understand mental health challenges and build strong coping mechanisms."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 flex flex-col gap-8">
        {/* Urgent Alert Disclaimer */}
        <InformationCard
          type="info"
          title="Information Hub Advisory"
          description="The articles provided are for informational purposes only and compiled by peer advocates. They are not intended as diagnostic tools or clinical assessments."
        />

        {/* Filter Controls Bar */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pb-2 border-b border-border">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              disabled
              placeholder="Search resources... (Locked)"
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-border bg-muted/40 cursor-not-allowed outline-none text-muted-foreground"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto py-1">
            <Filter className="h-4 w-4 text-muted-foreground shrink-0 hidden sm:block" />
            {categories.slice(0, 3).map((cat, idx) => (
              <span
                key={idx}
                className={`text-[10px] sm:text-xs px-3.5 py-1.5 rounded-full font-medium whitespace-nowrap cursor-pointer transition-colors ${
                  idx === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-border'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {articles.map((art, idx) => (
            <GlassCard key={idx} className="flex flex-col justify-between h-full text-left gap-4">
              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{art.category}</span>
                <h3 className="text-base font-bold text-foreground leading-snug">{art.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{art.desc}</p>
              </div>
              <div className="border-t border-border/60 pt-3 flex items-center justify-between mt-2">
                <span className="text-[10px] text-muted-foreground">{art.date} • {art.readTime}</span>
                <Link href="#" className="text-xs font-semibold text-primary hover:underline">
                  Read Article
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
