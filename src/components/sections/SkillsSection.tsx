'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { skills } from '@/lib/data';
import { SkillCard } from '@/components/ui/SkillCard';
import { SkillsChart } from '@/components/ui/SkillsChart';

export function SkillsSection() {
  const t = useTranslations('skills');

  const categories = {
    programming: skills.filter(skill => skill.category === 'programming'),
    dataScience: skills.filter(skill => skill.category === 'dataScience'),
    tools: skills.filter(skill => skill.category === 'tools'),
    databases: skills.filter(skill => skill.category === 'databases'),
    cloud: skills.filter(skill => skill.category === 'cloud'),
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark-800">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills List */}
          <div className="space-y-8">
            {Object.entries(categories).map(([categoryKey, categorySkills], index) => (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {t(`categories.${categoryKey}`)}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {categorySkills.map((skill) => (
                    <SkillCard key={skill.name} skill={skill} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <SkillsChart skills={skills} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}