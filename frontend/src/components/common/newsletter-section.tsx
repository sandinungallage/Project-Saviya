'use client';

import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '../ui/button';
import { GlassCard } from './glass-card';

export const NewsletterSection: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="py-12 w-full">
      <GlassCard hoverable={false} className="max-w-4xl mx-auto border border-border bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 p-8 sm:p-12 text-center flex flex-col items-center gap-6">
        <div className="p-3.5 rounded-full bg-primary/10 text-primary">
          <Mail className="h-6 w-6" />
        </div>
        
        <div className="flex flex-col gap-2 max-w-lg">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            {t.common.newsletterTitle}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            {t.common.newsletterDesc}
          </p>
        </div>

        {submitted ? (
          <div className="bg-secondary/10 text-secondary-foreground dark:text-secondary px-6 py-3 rounded-full text-sm font-semibold border border-secondary/20">
            Thank you for subscribing! We've sent a welcome email.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 w-full max-w-md mt-2">
            <div className="relative flex-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.common.newsletterPlaceholder}
                className="w-full pl-5 pr-5 py-3 rounded-full border border-border bg-card text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-all duration-300"
                aria-label="Email address"
              />
            </div>
            <Button type="submit" variant="primary" className="py-3 px-6 shrink-0">
              <span>{t.common.subscribe}</span>
              <Send className="h-3.5 w-3.5" />
            </Button>
          </form>
        )}
      </GlassCard>
    </section>
  );
};
