'use client';

import React from 'react';
import { HeroSection } from '@/components/common/hero-section';
import { SectionTitle } from '@/components/common/section-title';
import { FeatureCard } from '@/components/common/feature-card';
import { FAQCard } from '@/components/common/faq-card';
import { NewsletterSection } from '@/components/common/newsletter-section';
import { GlassCard } from '@/components/common/glass-card';
import { 
  BookOpen, 
  Sparkles, 
  Wind, 
  PenTool, 
  Activity, 
  MessageSquare,
  Heart,
  Users,
  Award
} from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export default function Home() {
  const { t } = useLanguage();

  const features = [
    {
      title: t.nav.mentalHealthInfo,
      description: "Read peer-reviewed, easily digestible articles explaining anxiety, depression, burnout, and mental hygiene.",
      icon: BookOpen,
      href: "/know-your-mental-health",
      color: "primary" as const,
    },
    {
      title: t.nav.selfAssessment,
      description: "Take clinically validated screening self-assessments (PHQ-9, GAD-7) to understand your current symptom levels.",
      icon: Sparkles,
      href: "/self-assessment",
      color: "secondary" as const,
    },
    {
      title: t.nav.relaxZone,
      description: "Decompress with custom breathing timers, somatic grounding visual exercises, and soothing soundscapes.",
      icon: Wind,
      href: "/relax",
      color: "accent" as const,
    },
    {
      title: t.nav.journal,
      description: "Log your thoughts, achievements, and worries inside an encrypted, private digital diary.",
      icon: PenTool,
      href: "/journal",
      color: "primary" as const,
    },
    {
      title: t.nav.moodTracker,
      description: "Monitor your emotional changes and analyze triggers using our daily mood-logging chart tool.",
      icon: Activity,
      href: "/mood-tracker",
      color: "secondary" as const,
    },
    {
      title: t.nav.aiCompanion,
      description: "Speak to a warm, empathetic AI chatbot programmed to offer active listening, mindfulness tips, and guidance.",
      icon: MessageSquare,
      href: "/ai-companion",
      color: "accent" as const,
    }
  ];

  const faqs = [
    {
      question: "Is Sahanaya completely free?",
      answer: "Yes, Sahanaya is 100% free of charge. It is developed and sponsored by the Leo Club of Pannipitiya Paradise as a public community service project to address mental wellness in Sri Lanka."
    },
    {
      question: "Is my personal data secure and confidential?",
      answer: "Absolutely. Sahanaya is designed with a privacy-first approach. You can use all core features (Relax Zone, Articles, Assessments) without registering. If you choose to log your journal or mood, it is securely stored and is never shared with third parties."
    },
    {
      question: "Can Sahanaya replace regular therapy or clinical treatment?",
      answer: "No, Sahanaya does not replace clinical therapy, psychiatry, or hospital services. It is designed to act as an educational and peer-support toolkit. If you are experiencing serious symptoms or a mental crisis, please check our Emergency Help page immediately for professional helpline contacts."
    },
    {
      question: "How can I volunteer or support the Leo Club Sahanaya project?",
      answer: "We welcome support! You can sign up through our Volunteer page or contact the Leo Club of Pannipitiya Paradise directly. Peer support, translations, and technical development contributions are highly valued."
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* Feature Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionTitle 
          title="Designed for Your Inner Peace" 
          subtitle="Explore our selection of free, confidential digital tools built to assist your day-to-day mental wellbeing."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((feature, idx) => (
            <FeatureCard
              key={idx}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              href={feature.href}
              color={feature.color}
            />
          ))}
        </div>
      </section>

      {/* About Club Section */}
      <section className="py-16 bg-muted/30 border-y border-border/20 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6 items-start text-left">
              <SectionTitle 
                title="About the Initiative" 
                subtitle="Sahanaya is created by Pannipitiya Paradise Leos to help Sri Lankan youth and working professionals manage stress and access resources."
                align="left"
              />
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                As Leos, our mission is to provide leadership, experience, and opportunity through community service. Recognizing the rising pressures on university students, employees, and healthcare workers, the Leo Club of Pannipitiya Paradise initiated Sahanaya to establish a bridge to professional clinical mental healthcare while supplying daily mindfulness habits.
              </p>
              
              <div className="grid grid-cols-3 gap-4 w-full mt-4">
                <GlassCard hoverable={false} className="p-4 flex flex-col gap-1 items-center justify-center text-center">
                  <Heart className="h-5 w-5 text-red-500" />
                  <span className="text-sm font-bold text-foreground">100% Free</span>
                  <span className="text-[10px] text-muted-foreground">Always</span>
                </GlassCard>
                <GlassCard hoverable={false} className="p-4 flex flex-col gap-1 items-center justify-center text-center">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-sm font-bold text-foreground">For All</span>
                  <span className="text-[10px] text-muted-foreground">Sri Lankans</span>
                </GlassCard>
                <GlassCard hoverable={false} className="p-4 flex flex-col gap-1 items-center justify-center text-center">
                  <Award className="h-5 w-5 text-secondary-foreground dark:text-secondary" />
                  <span className="text-sm font-bold text-foreground">Leo Led</span>
                  <span className="text-[10px] text-muted-foreground">Pannipitiya Paradise</span>
                </GlassCard>
              </div>
            </div>
            
            {/* Visual representation */}
            <div className="w-full flex items-center justify-center">
              <GlassCard hoverable={false} className="p-8 border border-border bg-gradient-to-br from-primary/5 via-card to-card flex flex-col gap-4 text-center max-w-sm">
                <div className="h-12 w-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto text-lg font-bold">
                  S
                </div>
                <span className="text-base font-bold text-foreground">"It's Okay Not To Be Okay."</span>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Start your journey toward self-care, monitor emotional trends, write down your thoughts, or seek helpline contacts. We are with you.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <SectionTitle 
          title="Frequently Asked Questions" 
          subtitle="Clear answers regarding the platform services, user anonymity, and clinical support pathways."
        />
        <div className="flex flex-col gap-4 mt-8">
          {faqs.map((faq, idx) => (
            <FAQCard 
              key={idx} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  );
}
