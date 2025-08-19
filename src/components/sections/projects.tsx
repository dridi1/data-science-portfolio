'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ExternalLink, Github, TrendingUp } from 'lucide-react';

export default function Projects() {
  const t = useTranslations('projects');

  const projects = [
    {
      title: t('items.0.title'),
      description: t('items.0.description'),
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
      highlights: [
        t('items.0.highlights.0'),
        t('items.0.highlights.1'),
        t('items.0.highlights.2')
      ]
    },
    {
      title: t('items.1.title'),
      description: t('items.1.description'),
      technologies: ['R', 'Prophet', 'ggplot2', 'Shiny'],
      highlights: [
        t('items.1.highlights.0'),
        t('items.1.highlights.1'),
        t('items.1.highlights.2')
      ]
    },
    {
      title: t('items.2.title'),
      description: t('items.2.description'),
      technologies: ['Power BI', 'SQL Server', 'DAX', 'Azure'],
      highlights: [
        t('items.2.highlights.0'),
        t('items.2.highlights.1'),
        t('items.2.highlights.2')
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
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

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-background rounded-lg overflow-hidden shadow-sm border border-border hover:shadow-lg transition-all duration-300 group"
            >
              {/* Project image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrendingUp className="h-16 w-16 text-primary/60" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((highlight, highlightIndex) => (
                    <div
                      key={highlightIndex}
                      className="flex items-start space-x-2"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 px-3 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm">
                    <ExternalLink className="h-4 w-4" />
                    <span>View Demo</span>
                  </button>
                  <button className="flex items-center space-x-2 px-3 py-2 border border-border rounded-md hover:bg-accent transition-colors text-sm">
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors font-medium">
            <Github className="mr-2 h-4 w-4" />
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}