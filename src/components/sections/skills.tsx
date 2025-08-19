'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Wrench, BarChart3 } from 'lucide-react';

export function SkillsSection() {
  const t = useTranslations('skills');

  const skillCategories = [
    {
      icon: Code,
      title: t('programming'),
      skills: [
        { name: 'Python', level: 95 },
        { name: 'R', level: 90 },
        { name: 'SQL', level: 88 },
        { name: 'JavaScript', level: 75 },
        { name: 'Java', level: 70 },
      ]
    },
    {
      icon: BarChart3,
      title: t('frameworks'),
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Scikit-learn', level: 95 },
        { name: 'Pandas', level: 95 },
        { name: 'NumPy', level: 90 },
      ]
    },
    {
      icon: Database,
      title: t('databases'),
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Redis', level: 75 },
        { name: 'Elasticsearch', level: 70 },
        { name: 'Neo4j', level: 65 },
      ]
    },
    {
      icon: Wrench,
      title: t('tools'),
      skills: [
        { name: 'Power BI', level: 90 },
        { name: 'Tableau', level: 85 },
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 80 },
        { name: 'Jupyter', level: 95 },
      ]
    },
    {
      icon: Cloud,
      title: t('cloud'),
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Azure', level: 80 },
        { name: 'Google Cloud', level: 75 },
        { name: 'Databricks', level: 70 },
        { name: 'Snowflake', level: 65 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                  <category.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            Additional Technologies & Concepts
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision', 'Time Series Analysis',
              'A/B Testing', 'Statistical Modeling', 'Feature Engineering', 'Model Deployment',
              'MLOps', 'Data Pipelines', 'ETL', 'API Development', 'Microservices',
              'Agile', 'Scrum', 'DevOps', 'CI/CD', 'Version Control'
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}