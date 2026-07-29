import type { Metadata } from 'next';
import React from 'react';
import { PageBanner } from '@/components/common/page-banner';
import { InformationCard } from '@/components/common/info-card';
import { GlassCard } from '@/components/common/glass-card';
import { Sparkles, BarChart, ShieldAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: "Mental Health Self-Assessments | Sahanaya",
  description: "Take verified clinical screenings (PHQ-9, GAD-7) to monitor your depression, stress, and anxiety levels anonymously.",
};

export default function SelfAssessmentPage() {
  const tests = [
    {
      title: "PHQ-9 Depression Screener",
      questions: "9 questions",
      duration: "3 mins",
      desc: "Patient Health Questionnaire. Used globally to measure the severity of depressive symptoms.",
      type: "Depression"
    },
    {
      title: "GAD-7 Anxiety Screener",
      questions: "7 questions",
      duration: "2 mins",
      desc: "Generalized Anxiety Disorder questionnaire. Evaluates worry, irritability, and physical anxiety flags.",
      type: "Anxiety"
    },
    {
      title: "Perceived Stress Scale (PSS-10)",
      questions: "10 questions",
      duration: "4 mins",
      desc: "Measures the degree to which situations in your life are appraised as stressful.",
      type: "Stress"
    }
  ];

  return (
    <div className="flex flex-col w-full pb-16">
      <PageBanner 
        title="Self-Assessments" 
        description="Take confidential, clinically backed self-assessment tests to understand your psychological well-being."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 flex flex-col gap-10">
        {/* Warning Banner */}
        <InformationCard
          type="warning"
          title="Clinical Screening Advisory"
          description="These screeners are meant to guide your awareness. They do NOT replace a clinical diagnostic evaluation by a licensed therapist, psychologist, or psychiatrist."
        />

        {/* Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tests.map((test, idx) => (
            <GlassCard key={idx} className="flex flex-col justify-between text-left h-full gap-5 border border-border">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold text-secondary-foreground dark:text-secondary bg-secondary/10 px-2.5 py-1 rounded-full w-fit">{test.type}</span>
                <h3 className="text-base font-bold text-foreground leading-snug">{test.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{test.desc}</p>
                <div className="flex gap-4 pt-2 text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                  <span>Questions: {test.questions}</span>
                  <span>Time: {test.duration}</span>
                </div>
              </div>

              <Button variant="primary" disabled className="w-full text-xs py-2.5">
                <span>Start Screener (Locked)</span>
              </Button>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
