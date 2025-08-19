'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { SkillChart, skillsData, projectsData } from '@/components/ui/chart';
import { TrendingUp, BarChart3, PieChart } from 'lucide-react';

const DataVisualization = () => {
  const t = useTranslations();

  return (
    <section id="data-viz" className="section-padding bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Data Insights & Analytics
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Visualizing data to unlock meaningful insights and drive informed decisions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Skills Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-4">
              <BarChart3 className="w-6 h-6 text-primary-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Technical Skills Proficiency
              </h3>
            </div>
            <SkillChart data={skillsData} type="bar" />
          </motion.div>

          {/* Projects Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-4">
              <PieChart className="w-6 h-6 text-primary-600 mr-2" />
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Project Success Rates
              </h3>
            </div>
            <SkillChart data={projectsData} type="pie" />
          </motion.div>
        </div>

        {/* Performance Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
        >
          <div className="flex items-center mb-6">
            <TrendingUp className="w-6 h-6 text-primary-600 mr-2" />
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Key Performance Indicators
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Model Accuracy', value: '94.2%', change: '+2.3%' },
              { label: 'Processing Speed', value: '1.2M/sec', change: '+15%' },
              { label: 'Cost Reduction', value: '32%', change: '+8%' },
              { label: 'Client Satisfaction', value: '98%', change: '+5%' }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {metric.label}
                </div>
                <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                  {metric.change} vs last quarter
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Data Science Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
            Data Science Methodology
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { step: '1', title: 'Data Collection', desc: 'Gather relevant data from multiple sources' },
              { step: '2', title: 'Data Cleaning', desc: 'Process and clean raw data for analysis' },
              { step: '3', title: 'Exploration', desc: 'Explore patterns and relationships in data' },
              { step: '4', title: 'Modeling', desc: 'Build and train machine learning models' },
              { step: '5', title: 'Deployment', desc: 'Deploy models and monitor performance' }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                    {phase.step}
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {phase.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {phase.desc}
                  </p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-4 h-0.5 bg-primary-300"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataVisualization;