'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, HeartPulse, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { ThemeToggle } from '../ui/theme-toggle';
import { LanguageSwitcher } from '../ui/language-switcher';
import { Button } from '../ui/button';

export const Navbar: React.FC = () => {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  const navLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/about' },
    { name: t.nav.resources, href: '/resources' },
    { name: t.nav.mentalHealthInfo, href: '/know-your-mental-health' },
    { name: t.nav.events, href: '/events' },
    { name: t.nav.contact, href: '/contact' },
  ];

  const wellnessTools = [
    { name: t.nav.selfAssessment, href: '/self-assessment' },
    { name: t.nav.moodTracker, href: '/mood-tracker' },
    { name: t.nav.journal, href: '/journal' },
    { name: t.nav.relaxZone, href: '/relax' },
    { name: t.nav.aiCompanion, href: '/ai-companion' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 w-full z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 outline-none group">
            <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
              <HeartPulse className="h-6 w-6 text-primary" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-foreground">Sahanaya</span>
              <span className="text-[9px] font-medium text-muted-foreground uppercase tracking-widest leading-none">Leo Club of Pannipitiya Paradise</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Desktop navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 relative py-1 hover:text-primary ${
                  isActive(link.href) ? 'text-primary' : 'text-foreground/80'
                }`}
              >
                {link.name}
                {isActive(link.href) && (
                  <motion.div
                    layoutId="activeNavBorder"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Wellness Tools Dropdown */}
            <div className="relative">
              <button
                onClick={() => setToolsOpen(!toolsOpen)}
                className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 cursor-pointer outline-none"
              >
                <span>Wellness Tools</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${toolsOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {toolsOpen && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setToolsOpen(false)} />
                    <motion.div
                      initial={{ opacity: 0, y: 15, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 15, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-3 w-56 rounded-2xl bg-card border border-border shadow-xl z-20 overflow-hidden"
                    >
                      <div className="p-2 flex flex-col gap-1">
                        {wellnessTools.map((tool) => (
                          <Link
                            key={tool.href}
                            href={tool.href}
                            onClick={() => setToolsOpen(false)}
                            className={`px-4 py-2.5 rounded-xl text-sm transition-colors duration-300 hover:bg-muted ${
                              isActive(tool.href) ? 'text-primary bg-primary/5 font-semibold' : 'text-foreground/80'
                            }`}
                          >
                            {tool.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Link href="/emergency" className="outline-none">
              <Button variant="emergency" className="text-xs px-4 py-2">
                {t.nav.emergency}
              </Button>
            </Link>
            <Link href="/login" className="outline-none">
              <Button variant="ghost" className="text-xs px-4 py-2">
                {t.nav.login}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-foreground hover:bg-muted outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden w-full border-t border-border bg-background"
          >
            <div className="px-4 pt-3 pb-6 space-y-4 flex flex-col">
              <div className="flex flex-col gap-1 border-b border-border pb-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2.5 rounded-xl text-sm font-medium transition-colors hover:bg-muted ${
                      isActive(link.href) ? 'text-primary bg-primary/5' : 'text-foreground/80'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Wellness Tools List */}
              <div className="flex flex-col gap-1 border-b border-border pb-3">
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest px-3 mb-1">Wellness Tools</span>
                {wellnessTools.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-3 py-2 rounded-xl text-sm font-medium transition-colors hover:bg-muted ${
                      isActive(tool.href) ? 'text-primary bg-primary/5' : 'text-foreground/80'
                    }`}
                  >
                    {tool.name}
                  </Link>
                ))}
              </div>

              {/* Switchers & Action Buttons */}
              <div className="flex items-center justify-between px-3">
                <span className="text-sm font-medium text-foreground/70">Language</span>
                <LanguageSwitcher />
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <Link href="/emergency" onClick={() => setMobileMenuOpen(false)} className="w-full">
                  <Button variant="emergency" className="w-full">
                    {t.nav.emergency}
                  </Button>
                </Link>
                <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="w-full">
                  <Button variant="ghost" className="w-full">
                    {t.nav.login}
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
