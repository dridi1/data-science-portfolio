'use client';

import { motion } from 'framer-motion';
import { 
  Code, 
  Brain, 
  Settings, 
  Database,
  Cloud
} from 'lucide-react';

const skillCategories = [
  {
    key: 'programming',
    title: 'Programming Languages',
    icon: Code,
    skills: [
      { name: 'Python', level: 5 },
      { name: 'R', level: 4 },
      { name: 'SQL', level: 5 },
      { name: 'JavaScript', level: 3 }
    ],
    color: 'text-blue-500'
  },
  {
    key: 'dataScience',
    title: 'Data Science & ML',
    icon: Brain,
    skills: [
      { name: 'Machine Learning', level: 5 },
      { name: 'Statistical Analysis', level: 5 },
      { name: 'Data Visualization', level: 4 },
      { name: 'Deep Learning', level: 4 }
    ],
    color: 'text-green-500'
  },
  {
    key: 'tools',
    title: 'Tools & Platforms',
    icon: Settings,
    skills: [
      { name: 'Power BI', level: 5 },
      { name: 'Tableau', level: 4 },
      { name: 'Excel', level: 5 },
      { name: 'Git', level: 4 }
    ],
    color: 'text-purple-500'
  },
  {
    key: 'databases',
    title: 'Databases',
    icon: Database,
    skills: [
      { name: 'SQL Server', level: 5 },
      { name: 'PostgreSQL', level: 4 },
      { name: 'MongoDB', level: 3 }
    ],
    color: 'text-orange-500'
  }
];

const cloudSkills = ['AWS', 'Azure', 'Google Cloud'];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-lg p-6 shadow-sm border border-border hover:shadow-md transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <IconComponent className={`h-6 w-6 ${category.color} mr-3`} />
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.3, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-muted-foreground">{skill.name}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ 
                              duration: 0.2, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05 + i * 0.03 
                            }}
                            viewport={{ once: true }}
                            className={`w-2 h-2 rounded-full ${
                              i < skill.level ? 'bg-primary' : 'bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Cloud Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-background rounded-lg p-8 shadow-sm border border-border"
        >
          <div className="flex items-center justify-center mb-6">
            <Cloud className="h-6 w-6 text-sky-500 mr-3" />
            <h3 className="text-xl font-semibold text-foreground">
              Cloud Platforms
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {cloudSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-sky-100 dark:bg-sky-900/20 rounded-full text-sky-700 dark:text-sky-300 font-medium"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Progress Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Core Competencies
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Python', level: 95 },
              { name: 'Machine Learning', level: 90 },
              { name: 'Data Visualization', level: 88 },
              { name: 'Statistical Analysis', level: 92 }
            ].map((competency, index) => (
              <div key={competency.name} className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-muted"
                    />
                    <motion.path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray={`${competency.level}, 100`}
                      className="text-primary"
                      initial={{ strokeDasharray: "0, 100" }}
                      whileInView={{ strokeDasharray: `${competency.level}, 100` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-foreground">
                      {competency.level}%
                    </span>
                  </div>
                </div>
                <h4 className="font-medium text-foreground">{competency.name}</h4>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}