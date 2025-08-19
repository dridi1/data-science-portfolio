'use client';

import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Mail } from 'lucide-react';

export default function About() {
  const highlights = [
    "5+ years in Data Science & Analytics",
    "Expert in Python, R, and SQL", 
    "Machine Learning & Statistical Modeling",
    "Data Visualization & Business Intelligence"
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With over 5 years of experience in data science and analytics, I specialize in extracting meaningful insights from complex datasets. My background combines strong technical skills with business acumen to deliver impactful solutions.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 text-muted-foreground"
              >
                <MapPin className="h-5 w-5" />
                <span>Based in Tunisia</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 text-muted-foreground"
              >
                <Mail className="h-5 w-5" />
                <span>alex.dridi@email.com</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="w-72 h-72 rounded-full bg-background border-4 border-primary/20 flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary to-secondary opacity-10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-muted flex items-center justify-center">
                      <span className="text-6xl font-bold text-muted-foreground">AD</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-4 right-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center"
              >
                <span className="text-sm font-bold text-primary">ML</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-8 left-0 w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center"
              >
                <span className="text-xs font-bold text-secondary">📊</span>
              </motion.div>
              
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 left-0 w-8 h-8 bg-accent rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}