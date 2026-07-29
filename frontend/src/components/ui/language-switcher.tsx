'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/language-context';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { Language } from '@/constants/languages';
import { motion, AnimatePresence } from 'framer-motion';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const activeLang = languages.find(l => l.code === language);

  const selectLanguage = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full border border-border text-xs font-medium text-foreground hover:bg-muted transition-colors duration-300 outline-none focus:ring-2 focus:ring-primary/50 cursor-pointer"
        aria-haspopup="true"
        aria-expanded={isOpen}
        id="language-switcher-button"
      >
        <Globe className="h-3.5 w-3.5 text-muted-foreground" />
        <span>{activeLang?.nativeName || 'English'}</span>
        <ChevronDown className={`h-3 w-3 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop click listener */}
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute right-0 mt-2 w-40 rounded-2xl bg-card border border-border shadow-lg z-50 overflow-hidden"
              id="language-switcher-dropdown"
            >
              <div className="py-1" role="menu" aria-orientation="vertical">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => selectLanguage(lang.code)}
                    className={`flex items-center justify-between w-full text-left px-4 py-2.5 text-xs transition-colors hover:bg-muted ${
                      language === lang.code ? 'text-primary font-semibold' : 'text-foreground'
                    }`}
                    role="menuitem"
                  >
                    <span>{lang.nativeName}</span>
                    {language === lang.code && <Check className="h-3.5 w-3.5 text-primary" />}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
