"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { experiences } from "@/data/portfolio";
import { Experience } from "@/types";

const ExperienceCard = ({ experience, index }: { experience: Experience; index: number }) => {
  const formatDate = (date: string | null) => {
    if (!date) return "Present";
    const [year, month] = date.split("-");
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Timeline line */}
      <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-border hidden md:block" />
      
      {/* Timeline dot */}
      <div className="absolute left-2.5 top-6 w-3 h-3 bg-primary rounded-full hidden md:block" />

      <div className="md:ml-12 bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-foreground">{experience.title}</h3>
            <div className="flex items-center text-primary font-medium mt-1">
              <Briefcase className="h-4 w-4 mr-2" />
              {experience.company}
            </div>
          </div>
          
          <div className="flex flex-col sm:items-end mt-2 sm:mt-0 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
            </div>
            <div className="flex items-center mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              {experience.location}
            </div>
          </div>
        </div>

        <ul className="space-y-2 mb-4">
          {experience.description.map((desc, descIndex) => (
            <li key={descIndex} className="text-muted-foreground flex items-start">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
              {desc}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey in data science and machine learning
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              index={index}
            />
          ))}
        </div>

        {/* Career Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Years of Experience</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">25%</div>
            <div className="text-sm text-muted-foreground">Average ROI Improvement</div>
          </div>
          <div className="text-center p-6 bg-card rounded-lg border border-border">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">ML Models in Production</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}