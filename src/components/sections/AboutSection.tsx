'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Wrench } from 'lucide-react';

export function AboutSection() {
  const t = useTranslations('about');

  const highlights = [
    {
      icon: Award,
      key: 'experience',
      color: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Users,
      key: 'projects',
      color: 'text-green-600 dark:text-green-400'
    },
    {
      icon: Globe,
      key: 'languages',
      color: 'text-purple-600 dark:text-purple-400'
    },
    {
      icon: Wrench,
      key: 'tools',
      color: 'text-orange-600 dark:text-orange-400'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-900">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                {t('title')}
              </h2>
              <p className="text-xl text-primary-600 dark:text-primary-400 font-medium">
                {t('subtitle')}
              </p>
            </div>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              {t('description')}
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {highlights.map((highlight) => {
                const Icon = highlight.icon;
                return (
                  <div
                    key={highlight.key}
                    className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-dark-100 rounded-lg"
                  >
                    <Icon className={`${highlight.color} flex-shrink-0`} size={24} />
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
                        {t(`highlights.${highlight.key}`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              {/* Placeholder for profile image */}
              <div className="aspect-square bg-gradient-to-br from-primary-400 to-purple-600 rounded-2xl p-8 shadow-2xl">
                <div className="w-full h-full bg-white/10 rounded-xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users size={40} />
                    </div>
                    <p className="text-lg font-semibold">Profile Photo</p>
                    <p className="text-sm opacity-80">Professional Headshot</p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary-600 dark:bg-primary-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-600 dark:bg-purple-400 rounded-full opacity-20"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}