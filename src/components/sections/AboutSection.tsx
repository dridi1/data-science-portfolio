'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Heart, Target } from 'lucide-react';

export function AboutSection() {
  const t = useTranslations('about');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
    <section id="about" className="py-20 bg-secondary/10">
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
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <div className="relative">
                <div className="w-full max-w-md mx-auto aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center shadow-2xl">
                  <div className="w-5/6 h-5/6 rounded-2xl bg-muted flex items-center justify-center">
                    <span className="text-6xl text-primary font-bold">👨‍💻</span>
                  </div>
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/30 rounded-full flex items-center justify-center">
                  <Target className="h-6 w-6 text-secondary-foreground" />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="order-1 lg:order-2 space-y-8">
              <div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {t('description')}
                </p>
              </div>

              {/* Background & Interests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {t('background')}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Master&apos;s in Data Science</li>
                    <li>• Statistics &amp; Mathematics</li>
                    <li>• Computer Science</li>
                    <li>• Business Analytics</li>
                  </ul>
                </div>

                <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
                  <div className="flex items-center mb-4">
                    <Heart className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-card-foreground">
                      {t('interests')}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Machine Learning</li>
                    <li>• Data Visualization</li>
                    <li>• Predictive Analytics</li>
                    <li>• Business Intelligence</li>
                  </ul>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}