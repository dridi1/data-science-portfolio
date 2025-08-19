'use client';

import { useTranslations } from 'next-intl';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { scrollToElement } from '@/lib/utils';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-dark-900 dark:to-dark-800">
      <div className="container-max section-padding">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400">
              {t('greeting')}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="text-gradient">
                {t('name')}
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 font-medium">
              {t('title')}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            {t('description')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={() => scrollToElement('projects')}
              className="btn-primary flex items-center space-x-2 px-8 py-3 text-lg"
            >
              <span>{t('cta')}</span>
            </button>
            <button
              onClick={() => scrollToElement('contact')}
              className="btn-secondary flex items-center space-x-2 px-8 py-3 text-lg"
            >
              <Mail size={20} />
              <span>{t('contact')}</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="pt-12"
          >
            <button
              onClick={() => scrollToElement('about')}
              className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 animate-bounce"
              aria-label="Scroll to next section"
            >
              <ChevronDown size={32} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}