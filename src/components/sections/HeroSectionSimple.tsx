'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Mail } from 'lucide-react';

export function HeroSectionSimple() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Data Science Portfolio
            </motion.h1>
            
            <motion.h2 
              className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transforming data into actionable insights
            </motion.h2>
            
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Passionate data scientist with expertise in machine learning, statistical analysis, and data visualization. Specialized in turning complex data into strategic business solutions.
            </motion.p>
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <button
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>View My Work</span>
              <ArrowDown className="h-5 w-5" />
            </button>
            
            <button
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center space-x-2 transform hover:-translate-y-1"
            >
              <Mail className="h-5 w-5" />
              <span>Get in Touch</span>
            </button>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="flex justify-center mb-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full bg-gradient-to-br from-primary to-secondary/50 flex items-center justify-center shadow-2xl">
              <div className="w-44 h-44 sm:w-60 sm:h-60 rounded-full bg-muted flex items-center justify-center">
                <span className="text-6xl sm:text-8xl text-primary font-bold">DS</span>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div 
              className="bg-card border border-border rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h3 className="text-xl font-bold text-card-foreground mb-3">Machine Learning</h3>
              <p className="text-muted-foreground">Advanced ML models and algorithms for predictive analytics and pattern recognition.</p>
            </motion.div>

            <motion.div 
              className="bg-card border border-border rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <h3 className="text-xl font-bold text-card-foreground mb-3">Data Visualization</h3>
              <p className="text-muted-foreground">Interactive dashboards and compelling visualizations that tell data stories.</p>
            </motion.div>

            <motion.div 
              className="bg-card border border-border rounded-xl p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <h3 className="text-xl font-bold text-card-foreground mb-3">Business Intelligence</h3>
              <p className="text-muted-foreground">Strategic insights and data-driven recommendations for business growth.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}