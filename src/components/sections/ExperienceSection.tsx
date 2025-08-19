'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Building, Calendar, MapPin, Award } from 'lucide-react';

export function ExperienceSection() {
  const t = useTranslations('experience');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Senior Data Scientist',
      company: 'TechCorp Analytics',
      location: 'Paris, France',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading data science initiatives for enterprise clients, developing predictive models and machine learning solutions that drive business value.',
      achievements: [
        'Improved customer retention by 25% through predictive analytics',
        'Led a team of 5 data scientists on multiple projects',
        'Developed automated ML pipelines reducing model deployment time by 60%',
        'Created interactive dashboards serving 500+ daily users'
      ],
      technologies: ['Python', 'TensorFlow', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      title: 'Data Scientist',
      company: 'DataInsights Solutions',
      location: 'Lyon, France',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Specialized in statistical analysis and data visualization for retail and e-commerce clients, building models to optimize pricing and inventory management.',
      achievements: [
        'Built pricing optimization models increasing revenue by 15%',
        'Designed A/B testing frameworks for product recommendations',
        'Created real-time monitoring dashboards for business KPIs',
        'Reduced inventory waste by 20% through demand forecasting'
      ],
      technologies: ['R', 'Python', 'Tableau', 'SQL Server', 'Azure']
    },
    {
      title: 'Junior Data Analyst',
      company: 'Marketing Metrics Inc.',
      location: 'Marseille, France',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Analyzed marketing campaign performance and customer behavior data to provide actionable insights for digital marketing strategies.',
      achievements: [
        'Analyzed campaign data for 50+ marketing initiatives',
        'Improved campaign ROI by 30% through data-driven insights',
        'Automated reporting processes saving 20 hours per week',
        'Developed customer segmentation models for targeted marketing'
      ],
      technologies: ['Excel', 'Power BI', 'Google Analytics', 'SQL', 'Python']
    },
    {
      title: 'Data Science Intern',
      company: 'StartupLab',
      location: 'Nice, France',
      period: '2018 - 2019',
      type: 'Internship',
      description: 'Contributed to various data science projects including web scraping, data cleaning, and basic machine learning model development.',
      achievements: [
        'Built web scraping tools for market research',
        'Created data visualization reports for stakeholders',
        'Assisted in developing recommendation systems',
        'Learned industry best practices for data handling'
      ],
      technologies: ['Python', 'BeautifulSoup', 'Pandas', 'Matplotlib', 'Git']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My professional journey in data science, showcasing growth from junior analyst to senior data scientist.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title + experience.company}
                variants={itemVariants}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10"></div>

                {/* Experience Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    {/* Header */}
                    <div className="mb-4">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-card-foreground">
                          {experience.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          experience.type === 'Full-time' 
                            ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                            : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                        }`}>
                          {experience.type}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center space-x-1">
                          <Building className="h-4 w-4" />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <div className="flex items-center mb-3">
                        <Award className="h-4 w-4 text-primary mr-2" />
                        <span className="text-sm font-semibold text-card-foreground">Key Achievements</span>
                      </div>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="text-primary mr-2 mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}