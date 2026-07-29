'use client';

import React from 'react';
import Link from 'next/link';
import { PhoneCall } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/language-context';

export const FloatingEmergencyButton: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link href="/emergency" className="outline-none" aria-label="Access Emergency Helplines">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="relative flex items-center justify-center h-14 w-14 rounded-full bg-red-500 text-white shadow-lg cursor-pointer hover:bg-red-600 transition-colors duration-300"
        >
          {/* Pulsing ring outer */}
          <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping z-0" />
          
          <PhoneCall className="h-6 w-6 relative z-10" />
          
          <div className="absolute right-16 bg-red-500 dark:bg-red-600 text-white font-bold text-[10px] tracking-wider uppercase px-3 py-1.5 rounded-lg shadow-md border border-red-400 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            {t.nav.emergency}
          </div>
        </motion.div>
      </Link>
    </div>
  );
};
