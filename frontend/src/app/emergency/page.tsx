import type { Metadata } from 'next';
import React from 'react';
import { PageBanner } from '@/components/common/page-banner';
import { InformationCard } from '@/components/common/info-card';
import { GlassCard } from '@/components/common/glass-card';
import { Phone, Clock, MessageSquare, AlertOctagon } from 'lucide-react';

export const metadata: Metadata = {
  title: "Emergency Helplines & Crisis Support | Sahanaya",
  description: "If you are experiencing an emotional crisis or thoughts of self-harm, please contact one of these free, confidential helplines in Sri Lanka immediately.",
};

export default function EmergencyPage() {
  const helplines = [
    {
      name: "1926 National Mental Health Helpline",
      organization: "National Institute of Mental Health (NIMH), Sri Lanka",
      phone: "1926",
      hours: "24 Hours / 7 Days",
      languages: "Sinhala, Tamil, English",
      type: "Free Phone Call / SMS support",
      desc: "Managed by psychiatrists and counselors. Provides immediate guidance and psychological support for anyone in crisis."
    },
    {
      name: "CCC Line (Crisis Support)",
      organization: "CCC Foundation Sri Lanka",
      phone: "1333",
      hours: "24 Hours / 7 Days",
      languages: "Sinhala, Tamil, English",
      type: "Free Call from any connection",
      desc: "A toll-free helpline providing compassionate active listening and support for those dealing with loneliness or crisis."
    },
    {
      name: "Sri Lanka Sumithrayo",
      organization: "Sumithrayo Befrienders",
      phone: "0112696666",
      hours: "9:00 AM - 8:00 PM Daily",
      languages: "Sinhala, Tamil, English",
      type: "Landline call",
      desc: "Confidential emotional support and befriending services for those experiencing depression, suicidal thoughts, or distress."
    },
    {
      name: "Shanthi Maargam",
      organization: "Youth Wellness Center",
      phone: "0717639898",
      hours: "8:00 AM - 10:00 PM Daily",
      languages: "Sinhala, Tamil, English",
      type: "Counseling hotline / WhatsApp",
      desc: "Specialized mental health support and youth counseling center offering safe dialogue and emotional coping advice."
    }
  ];

  return (
    <div className="flex flex-col w-full pb-16">
      <PageBanner 
        title="Emergency Help & Crisis Support" 
        description="If you or someone you know is in immediate distress, please reach out to one of these free, confidential local helplines."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 flex flex-col gap-10">
        {/* Critical Emergency Banner */}
        <InformationCard
          type="error"
          title="Crisis Support Alert"
          description="Sahanaya does NOT provide professional medical treatments, clinical psychiatry, or immediate medical responses. If you are experiencing thoughts of self-harm, suicide, or severe psychiatric distress, please contact the services listed below or visit the nearest hospital emergency room immediately."
        />

        {/* Helpline List */}
        <div className="flex flex-col gap-6">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground text-left flex items-center gap-2">
            <AlertOctagon className="h-6 w-6 text-red-500" />
            <span>Sri Lankan Support Helplines</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {helplines.map((line, idx) => (
              <GlassCard 
                key={idx} 
                hoverable={true} 
                className="flex flex-col justify-between border border-red-500/10 hover:border-red-500/30 bg-gradient-to-br from-red-500/[0.02] via-card to-card p-6 text-left gap-5"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-red-500 uppercase tracking-widest leading-none mb-1">{line.organization}</span>
                    <h3 className="text-base font-extrabold text-foreground leading-snug">{line.name}</h3>
                  </div>
                  
                  <p className="text-xs text-muted-foreground leading-relaxed">{line.desc}</p>
                  
                  <div className="flex flex-col gap-2 pt-2 border-t border-border/40 text-[11px] text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                      <span><strong>Hours:</strong> {line.hours}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MessageSquare className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                      <span><strong>Languages:</strong> {line.languages}</span>
                    </div>
                  </div>
                </div>

                <a
                  href={`tel:${line.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-red-500 hover:bg-red-600 text-white text-xs font-bold shadow-md transition-colors duration-300 outline-none focus:ring-2 focus:ring-red-500/50 uppercase tracking-wider"
                >
                  <Phone className="h-4 w-4" />
                  <span>Call {line.phone}</span>
                </a>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Hospital Notice */}
        <GlassCard hoverable={false} className="p-6 text-center border border-border bg-muted/20">
          <span className="text-xs font-bold text-foreground">Seeking Direct Medical Care</span>
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-2">
            During extreme emergencies, you can also visit the emergency triage counter at any national base hospital in Sri Lanka (such as the National Hospital Colombo, NIMH Mulleriyawa, or base provincial hospitals) for acute psychological attention.
          </p>
        </GlassCard>
      </div>
    </div>
  );
}
