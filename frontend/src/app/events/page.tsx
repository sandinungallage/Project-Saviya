import type { Metadata } from 'next';
import React from 'react';
import { PageBanner } from '@/components/common/page-banner';
import { InformationCard } from '@/components/common/info-card';
import { GlassCard } from '@/components/common/glass-card';
import { Calendar, MapPin, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: "Mental Wellness Events | Sahanaya",
  description: "Join upcoming mental health seminars, peer-support groups, and wellness camps organized by the Leo Club of Pannipitiya Paradise.",
};

export default function EventsPage() {
  const events = [
    {
      title: "Mindfulness and Stress Management Seminar",
      date: "August 15, 2026",
      time: "9:00 AM - 11:30 AM",
      location: "Colombo Public Library Hall",
      desc: "An interactive peer-to-peer session led by counseling advocates to discuss exams, deadlines, and anxiety control.",
      status: "Registrations Open Soon"
    },
    {
      title: "Peer-Support Group Circle",
      date: "September 02, 2026",
      time: "4:00 PM - 5:30 PM",
      location: "Virtual / Zoom session",
      desc: "A safe, moderated conversation space to share coping strategies with other students and working professionals.",
      status: "Online Event"
    }
  ];

  return (
    <div className="flex flex-col w-full pb-16">
      <PageBanner 
        title="Leo Club Wellness Events" 
        description="Participate in seminars, peer discussions, and mindfulness workshops organized to foster community wellness."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 flex flex-col gap-8">
        <InformationCard
          type="info"
          title="Community Spaces"
          description="Our public events are educational and peer-led. Attendees agree to maintain mutual respect and protect privacy of peer disclosures."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          {events.map((ev, idx) => (
            <GlassCard key={idx} hoverable={true} className="border border-border p-6 flex flex-col justify-between text-left gap-4">
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-bold text-primary uppercase tracking-wider">{ev.status}</span>
                <h3 className="text-base font-bold text-foreground leading-snug">{ev.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{ev.desc}</p>
                
                <div className="flex flex-col gap-2 pt-2 border-t border-border/40 text-[11px] text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                    <span>{ev.date} at {ev.time}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                    <span>{ev.location}</span>
                  </div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
