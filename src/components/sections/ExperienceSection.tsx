'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle } from 'lucide-react';

export function ExperienceSection() {
  const t = useTranslations('experience');

  // Get positions from translations
  const positions = t.raw('positions') as Array<{
    title: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
  }>;

  return (
    <section id="experience" className="py-20 bg-white dark:bg-dark-900">
      <div className="container-max section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-600 to-purple-600"></div>

            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative mb-12 ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-12 top-4 w-6 h-6 bg-primary-600 rounded-full border-4 border-white dark:border-dark-900 shadow-lg"></div>

                {/* Content card */}
                <div className="card p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                        {position.title}
                      </h3>
                      <div className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-medium mt-1">
                        <MapPin size={16} />
                        <span>{position.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mt-2 md:mt-0">
                      <Calendar size={16} />
                      <span className="text-sm font-medium">{position.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                    {position.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm mb-3">
                      Key Achievements:
                    </h4>
                    {position.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start space-x-3">
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}