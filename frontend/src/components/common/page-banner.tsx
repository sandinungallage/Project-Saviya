'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PageBannerProps {
  title: string;
  description?: string;
  parentPage?: { name: string; href: string };
}

export const PageBanner: React.FC<PageBannerProps> = ({
  title,
  description,
  parentPage
}) => {
  return (
    <div className="w-full bg-gradient-to-b from-primary/5 to-transparent border-b border-border/20 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col gap-3"
        >
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            {parentPage && (
              <>
                <Link href={parentPage.href} className="hover:text-primary transition-colors">
                  {parentPage.name}
                </Link>
                <ChevronRight className="h-3 w-3" />
              </>
            )}
            <span className="text-foreground/70 font-bold truncate max-w-[150px] sm:max-w-none">{title}</span>
          </nav>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            {title}
          </h1>

          {description && (
            <p className="text-sm sm:text-base text-muted-foreground max-w-3xl leading-relaxed mt-1">
              {description}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};
