import type { Metadata } from 'next';
import React from 'react';
import { PageBanner } from '@/components/common/page-banner';
import { GlassCard } from '@/components/common/glass-card';
import { Mail, Phone, MapPin, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: "Contact Us | Leo Club of Pannipitiya Paradise",
  description: "Get in touch with Sahanaya developers or Leo Club committee organizers regarding feedback, partnerships, or support.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full pb-16">
      <PageBanner 
        title="Contact Us" 
        description="For feedback, volunteer ideas, or media inquiries, send us a message or reach out to Leo organizers directly."
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        {/* Contact Form */}
        <div className="md:col-span-7">
          <GlassCard hoverable={false} className="border border-border p-6 flex flex-col gap-4 text-left">
            <span className="text-sm font-bold text-foreground">Send a Message</span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  disabled
                  placeholder="Your Name (Locked)"
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-border bg-muted/40 cursor-not-allowed text-muted-foreground outline-none"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  disabled
                  placeholder="Your Email (Locked)"
                  className="w-full px-4 py-2.5 text-xs rounded-xl border border-border bg-muted/40 cursor-not-allowed text-muted-foreground outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Message</label>
              <textarea
                rows={4}
                disabled
                placeholder="Write your feedback here... (Locked)"
                className="w-full px-4 py-2.5 text-xs rounded-xl border border-border bg-muted/40 cursor-not-allowed text-muted-foreground outline-none resize-none"
              />
            </div>

            <Button variant="primary" disabled className="w-fit text-xs py-2.5 px-6">
              <Lock className="h-3.5 w-3.5" />
              <span>Send Message (Locked)</span>
            </Button>
          </GlassCard>
        </div>

        {/* Club Details */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <GlassCard hoverable={false} className="border border-border p-6 text-left flex flex-col gap-4">
            <span className="text-sm font-bold text-foreground">Pannipitiya Paradise Leos</span>
            
            <div className="flex flex-col gap-3.5 text-xs text-muted-foreground">
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span>info.pannipitiyaparadiseleos@gmail.com</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>+94 77 123 4567 (Leo President)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-primary shrink-0" />
                <span>Pannipitiya, Colombo, Sri Lanka</span>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
