'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      title: 'Senior Data Scientist',
      company: 'TechCorp Analytics',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Lead data science initiatives for enterprise clients, developing machine learning models for predictive analytics and business intelligence solutions.',
      achievements: [
        'Developed ML models that improved client revenue by 25%',
        'Led a team of 5 data scientists on complex projects',
        'Implemented automated data pipelines processing 10TB+ daily',
        'Created executive dashboards used by C-level executives'
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Data Scientist',
      company: 'FinanceAI Solutions',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed algorithmic trading strategies and risk assessment models for financial institutions using advanced statistical methods.',
      achievements: [
        'Built predictive models with 92% accuracy for market trends',
        'Reduced client risk exposure by 30% through improved models',
        'Automated reporting processes saving 40 hours per week',
        'Published research on time series forecasting methods'
      ],
      technologies: ['R', 'Python', 'SQL', 'Tableau', 'Azure']
    },
    {
      title: 'Junior Data Analyst',
      company: 'RetailMetrics Inc.',
      location: 'San Francisco, CA',
      period: '2019 - 2020',
      description: 'Analyzed customer behavior patterns and sales data to optimize marketing campaigns and inventory management for retail clients.',
      achievements: [
        'Improved marketing ROI by 35% through targeted campaigns',
        'Developed customer segmentation models for 10+ clients',
        'Created automated ETL processes for data integration',
        'Trained business stakeholders on data interpretation'
      ],
      technologies: ['SQL', 'Power BI', 'Excel', 'Google Analytics']
    },
    {
      title: 'Data Science Intern',
      company: 'StartupLab',
      location: 'Boston, MA',
      period: '2018 - 2019',
      description: 'Supported data-driven decision making through exploratory data analysis and statistical modeling for various startup projects.',
      achievements: [
        'Conducted A/B tests that increased user engagement by 20%',
        'Built recommendation systems for e-commerce platforms',
        'Created data visualization dashboards for stakeholders',
        'Assisted in grant applications with statistical analysis'
      ],
      technologies: ['Python', 'Pandas', 'Matplotlib', 'Jupyter']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A journey through my professional growth in data science and analytics
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-800"></div>

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
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="h-4 w-4 mr-1" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    
                    <div className="flex items-center mb-4">
                      <Building className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                      <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                        Key Achievements:
                      </h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md"
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
}