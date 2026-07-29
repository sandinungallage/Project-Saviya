'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { GlassCard } from './glass-card';

interface FAQCardProps {
  question: string;
  answer: string;
}

export const FAQCard: React.FC<FAQCardProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <GlassCard hoverable={false} className="p-0 overflow-hidden border border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-5 text-left font-medium text-sm sm:text-base text-foreground outline-none cursor-pointer"
        aria-expanded={isOpen}
      >
        <span className="pr-4">{question}</span>
        <div className={`p-1.5 rounded-full bg-muted text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary/10 text-primary' : ''}`}>
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-muted-foreground border-t border-border/45 leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
};
