'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PhoneCall, ShieldAlert, Sparkles, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Button } from '../ui/button';
import { GlassCard } from './glass-card';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 bg-gradient-to-b from-primary/5 via-accent/5 to-transparent border-b border-border/10">
      {/* Background Soft Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 20, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-12 -left-12 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -20, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-12 h-80 w-80 rounded-full bg-secondary/10 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 text-left">
            {/* Tagline pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary uppercase tracking-wider"
            >
              <Heart className="h-3.5 w-3.5 fill-primary" />
              <span>{t.footer.tagline}</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]"
            >
              Your Digital Sanctuary for <span className="text-primary">Mental Wellness</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl"
            >
              {t.footer.mission} Sahanaya offers free, confidential support, screening assessments, and resources to build emotional resilience.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 w-full sm:w-auto"
            >
              <Link href="/self-assessment" className="w-full sm:w-auto outline-none">
                <Button variant="primary" className="w-full sm:w-auto py-3 px-7 text-sm font-semibold">
                  <Sparkles className="h-4 w-4" />
                  <span>Start Assessment</span>
                </Button>
              </Link>
              <Link href="/emergency" className="w-full sm:w-auto outline-none">
                <Button variant="emergency" className="w-full sm:w-auto py-3 px-7 text-sm font-semibold flex items-center justify-center gap-2">
                  <PhoneCall className="h-4 w-4" />
                  <span>{t.common.emergencyCall}</span>
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Right Visual / Advisory Card */}
          <div className="lg:col-span-5 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <GlassCard className="border border-red-500/20 bg-gradient-to-br from-red-500/5 via-card to-card shadow-lg p-6 sm:p-8 flex flex-col gap-5">
                <div className="flex items-center gap-2 text-red-500 font-bold text-sm tracking-wider uppercase">
                  <ShieldAlert className="h-5 w-5" />
                  <span>{t.common.disclaimerTitle}</span>
                </div>
                
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {t.common.disclaimerText}
                </p>

                <div className="border-t border-border/60 pt-4 flex flex-col gap-2">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Immediate Crisis Support</span>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold text-foreground">1926 National Helpline</span>
                    <a href="tel:1926" className="text-xs font-bold text-red-500 hover:underline">Call 1926</a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
