'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, BarChart, Users, TrendingUp, Brain } from 'lucide-react';

export function ProjectsSection() {
  const t = useTranslations('projects');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'Customer Segmentation Analysis',
      description: 'Comprehensive customer segmentation using unsupervised machine learning techniques to identify distinct customer groups and optimize marketing strategies.',
      image: '📊',
      icon: Users,
      category: 'Machine Learning',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'K-means'],
      features: [
        'RFM Analysis for customer behavior',
        'K-means clustering for segmentation',
        'Interactive visualization dashboard',
        'Actionable marketing recommendations'
      ],
      metrics: {
        'Customer Groups': '5',
        'Accuracy': '92%',
        'Business Impact': '+25% ROI'
      },
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Sales Forecasting Model',
      description: 'Time series forecasting model using LSTM neural networks to predict sales trends and optimize inventory management for retail businesses.',
      image: '📈',
      icon: TrendingUp,
      category: 'Deep Learning',
      technologies: ['Python', 'TensorFlow', 'Keras', 'NumPy', 'LSTM'],
      features: [
        'Multi-step ahead forecasting',
        'Seasonal pattern recognition',
        'Real-time prediction updates',
        'Confidence interval estimation'
      ],
      metrics: {
        'MAPE': '8.5%',
        'Forecast Horizon': '12 months',
        'Model Training': '99.2% accuracy'
      },
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Interactive business intelligence dashboard providing real-time insights and predictive analytics for key performance indicators.',
      image: '📋',
      icon: BarChart,
      category: 'Data Visualization',
      technologies: ['Power BI', 'Python', 'SQL Server', 'DAX', 'REST APIs'],
      features: [
        'Real-time data integration',
        'Predictive KPI monitoring',
        'Custom alert systems',
        'Mobile-responsive design'
      ],
      metrics: {
        'Daily Users': '500+',
        'Data Sources': '15',
        'Update Frequency': 'Real-time'
      },
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Recommendation Engine',
      description: 'Collaborative filtering recommendation system using matrix factorization to provide personalized product recommendations for e-commerce platforms.',
      image: '🤖',
      icon: Brain,
      category: 'Recommendation System',
      technologies: ['Python', 'Surprise', 'Flask', 'Redis', 'PostgreSQL'],
      features: [
        'Collaborative filtering algorithm',
        'Content-based recommendations',
        'Hybrid recommendation approach',
        'A/B testing framework'
      ],
      metrics: {
        'Click-through Rate': '+35%',
        'User Engagement': '+28%',
        'API Response': '<100ms'
      },
      demoUrl: '#',
      githubUrl: '#'
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

  return (
    <section id="projects" className="py-20 bg-background">
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
              A showcase of my data science projects demonstrating expertise in machine learning, analytics, and business intelligence.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="bg-card border border-border rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Project Header */}
                <div className="relative p-6 bg-gradient-to-r from-primary/10 to-secondary/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/20 rounded-lg">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <div className="text-4xl">{project.image}</div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-6">
                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-card-foreground mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h4 className="text-sm font-semibold text-card-foreground mb-3">Project Metrics</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center py-1">
                          <span className="text-sm text-muted-foreground">{key}</span>
                          <span className="text-sm font-medium text-primary">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-card-foreground mb-3">{t('technologies')}</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3 pt-4 border-t border-border">
                    <a
                      href={project.demoUrl}
                      className="flex-1 bg-primary text-primary-foreground py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200 flex items-center justify-center space-x-2 text-sm"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>{t('viewProject')}</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 border border-border text-card-foreground py-2 px-4 rounded-lg font-medium hover:bg-secondary transition-colors duration-200 flex items-center justify-center space-x-2 text-sm"
                    >
                      <Github className="h-4 w-4" />
                      <span>{t('viewCode')}</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Interested in collaborating?
              </h3>
              <p className="text-muted-foreground mb-6">
                I&apos;m always open to discussing new projects and opportunities in data science.
              </p>
              <button
                onClick={() => {
                  const contactSection = document.querySelector('#contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-200"
              >
                Let&apos;s Work Together
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}