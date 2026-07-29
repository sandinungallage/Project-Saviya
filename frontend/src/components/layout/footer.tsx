'use client';

import React from 'react';
import Link from 'next/link';
import { HeartPulse } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-border bg-card text-card-foreground">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Main Mission Section */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 outline-none group w-fit">
              <div className="bg-primary/10 p-2 rounded-xl text-primary">
                <HeartPulse className="h-6 w-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight">Sahanaya</span>
                <span className="text-[9px] font-medium text-muted-foreground uppercase tracking-widest leading-none">Leo Club of Pannipitiya Paradise</span>
              </div>
            </Link>
            <p className="text-sm font-semibold italic text-primary">
              "{t.footer.tagline}"
            </p>
            <p className="text-xs text-muted-foreground max-w-sm">
              {t.footer.mission}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-foreground">{t.footer.quickLinks}</span>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/about" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300">
                  {t.nav.resources}
                </Link>
              </li>
              <li>
                <Link href="/know-your-mental-health" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300">
                  {t.nav.mentalHealthInfo}
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300">
                  {t.nav.events}
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300">
                  {t.nav.volunteer}
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300">
                  {t.nav.partners}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-foreground">{t.footer.legal}</span>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300">
                  {t.footer.privacy}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300">
                  {t.footer.terms}
                </Link>
              </li>
              <li>
                <Link href="/emergency" className="text-xs text-red-500 font-semibold hover:underline transition-colors duration-300">
                  {t.nav.emergency}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-muted-foreground">
            {t.common.copyright}
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-muted-foreground uppercase tracking-widest">Sponsored by District 306 A2</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
