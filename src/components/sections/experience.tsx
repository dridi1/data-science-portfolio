'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Calendar, Building, Award } from 'lucide-react';

export default function Experience() {
  const t = useTranslations('experience');

  const positions = [
    {
      title: t('positions.0.title'),
      company: t('positions.0.company'),
      period: t('positions.0.period'),
      description: t('positions.0.description'),
      achievements: [
        t('positions.0.achievements.0'),
        t('positions.0.achievements.1'),
        t('positions.0.achievements.2')
      ]
    },
    {
      title: t('positions.1.title'),
      company: t('positions.1.company'),
      period: t('positions.1.period'),
      description: t('positions.1.description'),
      achievements: [
        t('positions.1.achievements.0'),
        t('positions.1.achievements.1'),
        t('positions.1.achievements.2')
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {t('title')}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {positions.map((position, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative md:ml-16"
              >
                {/* Timeline dot */}
                <div className="absolute -left-16 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                <div className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {position.title}
                      </h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <Building className="h-4 w-4 mr-2" />
                        <span>{position.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{position.period}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {position.description}
                  </p>

                  <div className="space-y-2">
                    {position.achievements.map((achievement, achievementIndex) => (
                      <motion.div
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: index * 0.2 + achievementIndex * 0.1 
                        }}
                        viewport={{ once: true }}
                        className="flex items-start space-x-3"
                      >
                        <Award className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-sm">{achievement}</span>
                      </motion.div>
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