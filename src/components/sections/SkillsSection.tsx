'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, BarChart3, Cloud, Cpu, PieChart } from 'lucide-react';

export function SkillsSection() {
  const t = useTranslations('skills');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: t('programming'),
      icon: Code,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'R', level: 85 },
        { name: 'SQL', level: 90 },
        { name: 'JavaScript', level: 75 },
      ],
    },
    {
      title: t('dataScience'),
      icon: BarChart3,
      skills: [
        { name: 'Machine Learning', level: 90 },
        { name: 'Statistical Analysis', level: 85 },
        { name: 'Data Mining', level: 80 },
        { name: 'Predictive Modeling', level: 88 },
      ],
    },
    {
      title: t('tools'),
      icon: PieChart,
      skills: [
        { name: 'Power BI', level: 85 },
        { name: 'Tableau', level: 80 },
        { name: 'Excel', level: 90 },
        { name: 'Git', level: 85 },
      ],
    },
    {
      title: t('databases'),
      icon: Database,
      skills: [
        { name: 'SQL Server', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'MySQL', level: 80 },
      ],
    },
    {
      title: t('cloud'),
      icon: Cloud,
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Azure', level: 75 },
        { name: 'Google Cloud', level: 70 },
        { name: 'Docker', level: 75 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut" as const,
        delay: 0.5,
      },
    }),
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {t('title')}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across various domains of data science and technology.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg mr-4">
                    <category.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-card-foreground">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-primary/80 rounded-full"
                          variants={skillVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          custom={skill.level}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Technologies */}
          <motion.div variants={itemVariants} className="mt-16">
            <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <Cpu className="h-8 w-8 text-primary mr-3" />
                <h3 className="text-2xl font-semibold text-card-foreground">
                  Additional Technologies
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  'NumPy', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Keras',
                  'Apache Spark', 'Jupyter', 'VS Code', 'PyCharm', 'Matplotlib',
                  'Seaborn', 'Plotly', 'D3.js', 'Apache Airflow', 'Flask'
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}