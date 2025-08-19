"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { Skill } from "@/types";

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-foreground">{skill.name}</h3>
        <span className="text-sm text-muted-foreground px-2 py-1 bg-secondary rounded">
          {skill.category}
        </span>
      </div>
      
      <div className="w-full bg-secondary rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${(skill.level / 5) * 100}%` }}
          transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
          viewport={{ once: true }}
          className="bg-primary h-2 rounded-full"
        />
      </div>
      
      <div className="flex justify-between mt-2 text-sm text-muted-foreground">
        <span>Proficiency</span>
        <span>{skill.level}/5</span>
      </div>
    </motion.div>
  );
};

export function SkillsSection() {
  const skillCategories = {
    Programming: skills.filter(skill => skill.category === 'Programming'),
    'Data Science': skills.filter(skill => skill.category === 'Data Science'),
    Tools: skills.filter(skill => skill.category === 'Tools'),
    Cloud: skills.filter(skill => skill.category === 'Cloud'),
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        <div className="space-y-12">
          {Object.entries(skillCategories).map(([category, categorySkills], categoryIndex) => (
            <div key={category}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-6 text-primary"
              >
                {category}
              </motion.h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categorySkills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={categoryIndex * 10 + index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary/5 rounded-lg p-8"
        >
          <h3 className="text-xl font-bold mb-4 text-center">Core Competencies</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Machine Learning</div>
              <p className="text-muted-foreground text-sm">
                Supervised & Unsupervised Learning, Deep Learning, NLP, Computer Vision
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Data Engineering</div>
              <p className="text-muted-foreground text-sm">
                ETL Pipelines, Big Data Processing, Cloud Architecture, Database Design
              </p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">Business Intelligence</div>
              <p className="text-muted-foreground text-sm">
                Statistical Analysis, Data Visualization, A/B Testing, KPI Development
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}