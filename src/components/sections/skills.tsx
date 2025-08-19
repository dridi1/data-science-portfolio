'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const Skills = () => {
  const t = useTranslations('skills');

  const skillCategories = [
    {
      title: t('categories.programming'),
      skills: [
        { name: t('items.python'), level: 95 },
        { name: t('items.r'), level: 90 },
        { name: t('items.sql'), level: 92 },
        { name: t('items.javascript'), level: 85 },
      ],
    },
    {
      title: t('categories.dataScience'),
      skills: [
        { name: t('items.machineLearning'), level: 93 },
        { name: t('items.statisticalAnalysis'), level: 95 },
        { name: t('items.dataVisualization'), level: 90 },
        { name: t('items.deepLearning'), level: 87 },
      ],
    },
    {
      title: t('categories.tools'),
      skills: [
        { name: t('items.powerBI'), level: 88 },
        { name: t('items.tableau'), level: 85 },
        { name: t('items.excel'), level: 92 },
        { name: t('items.git'), level: 89 },
      ],
    },
    {
      title: t('categories.databases'),
      skills: [
        { name: t('items.sqlServer'), level: 90 },
        { name: t('items.postgresql'), level: 88 },
        { name: t('items.mongodb'), level: 82 },
      ],
    },
    {
      title: t('categories.cloud'),
      skills: [
        { name: t('items.aws'), level: 85 },
        { name: t('items.azure'), level: 83 },
        { name: t('items.googleCloud'), level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-500 to-accent-500 h-2 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'Python', 'R', 'SQL', 'JavaScript', 'Power BI', 'Tableau',
              'AWS', 'Azure', 'Git', 'MongoDB', 'PostgreSQL', 'Excel'
            ].map((tech, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 mx-auto mb-2 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold">
                  {tech.slice(0, 2).toUpperCase()}
                </div>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;