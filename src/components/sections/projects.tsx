'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, BarChart3, Brain, Database, TrendingUp } from 'lucide-react';

const Projects = () => {
  const t = useTranslations('projects');

  const projects = [
    {
      title: 'Customer Segmentation Analysis',
      description: 'Machine learning-based customer segmentation using RFM analysis and clustering algorithms to identify high-value customer groups.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'K-means'],
      features: [
        'RFM Analysis implementation',
        'K-means clustering optimization',
        'Interactive visualizations',
        'Business recommendations'
      ],
      icon: <BarChart3 className="w-6 h-6" />,
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Predictive Sales Forecasting',
      description: 'Time series forecasting model using LSTM neural networks to predict sales trends with 95% accuracy.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      technologies: ['Python', 'TensorFlow', 'LSTM', 'Prophet', 'Streamlit'],
      features: [
        'LSTM neural networks',
        'Seasonal decomposition',
        'Real-time predictions',
        'Interactive dashboard'
      ],
      icon: <TrendingUp className="w-6 h-6" />,
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Fraud Detection System',
      description: 'Real-time fraud detection system using ensemble methods and anomaly detection algorithms.',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop',
      technologies: ['Python', 'XGBoost', 'Isolation Forest', 'Apache Kafka', 'Docker'],
      features: [
        'Real-time processing',
        'Ensemble methods',
        'Anomaly detection',
        'Model monitoring'
      ],
      icon: <Brain className="w-6 h-6" />,
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      title: 'Data Pipeline Automation',
      description: 'End-to-end data pipeline automation system processing millions of records daily with data quality monitoring.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop',
      technologies: ['Apache Airflow', 'Python', 'PostgreSQL', 'AWS S3', 'DBT'],
      features: [
        'Automated ETL processes',
        'Data quality checks',
        'Error handling & recovery',
        'Performance monitoring'
      ],
      icon: <Database className="w-6 h-6" />,
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800">
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg p-2 text-white">
                  {project.icon}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.demoUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg font-medium text-sm flex items-center justify-center transition-colors"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    {t('liveDemo')}
                  </motion.a>
                  <motion.a
                    href={project.codeUrl}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg font-medium text-sm flex items-center justify-center transition-colors"
                  >
                    <Github size={16} className="mr-2" />
                    {t('sourceCode')}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Interested in seeing more projects or discussing collaboration?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary px-8 py-3"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;