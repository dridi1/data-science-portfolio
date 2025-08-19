'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const t = useTranslations('experience');

  const experiences = [
    {
      title: 'Senior Data Scientist',
      company: 'TechCorp Analytics',
      location: 'Montreal, Canada',
      period: '2022 - Present',
      description: [
        'Led machine learning initiatives resulting in 25% improvement in predictive accuracy',
        'Developed automated data pipelines processing 1M+ records daily',
        'Mentored junior data scientists and established ML best practices',
        'Collaborated with cross-functional teams to deliver data-driven solutions'
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'SQL', 'Power BI']
    },
    {
      title: 'Data Scientist',
      company: 'Innovation Labs',
      location: 'Toronto, Canada',
      period: '2020 - 2022',
      description: [
        'Built customer segmentation models increasing marketing ROI by 30%',
        'Implemented real-time analytics dashboards for executive reporting',
        'Conducted A/B testing and statistical analysis for product optimization',
        'Created predictive models for demand forecasting and inventory management'
      ],
      technologies: ['Python', 'R', 'Tableau', 'PostgreSQL', 'Azure']
    },
    {
      title: 'Junior Data Analyst',
      company: 'DataStart Inc.',
      location: 'Quebec City, Canada',
      period: '2019 - 2020',
      description: [
        'Analyzed customer behavior patterns using SQL and statistical methods',
        'Created interactive dashboards for business stakeholders',
        'Automated reporting processes reducing manual work by 40%',
        'Supported data migration and quality assurance projects'
      ],
      technologies: ['SQL', 'Excel', 'Power BI', 'Python', 'MongoDB']
    },
    {
      title: 'Data Science Intern',
      company: 'Research Institute',
      location: 'Montreal, Canada',
      period: '2018 - 2019',
      description: [
        'Assisted in research projects involving large-scale data analysis',
        'Developed data visualization tools for academic publications',
        'Performed statistical analysis on experimental datasets',
        'Contributed to open-source data science tools and libraries'
      ],
      technologies: ['R', 'Python', 'SPSS', 'Git', 'Jupyter']
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
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

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-primary-200 dark:bg-primary-800"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-primary-600 dark:text-primary-400 mb-2">
                          <Building size={16} className="mr-1" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm space-x-4">
                          <div className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={14} className="mr-1" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                          <span className="text-primary-500 mr-2 mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;