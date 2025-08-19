"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ExternalLink, Eye } from "lucide-react";
import { projects } from "@/data/portfolio";
import { Project } from "@/types";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
              <CardDescription className="text-sm">
                {showFullDescription ? project.longDescription : project.description}
              </CardDescription>
              {project.longDescription !== project.description && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="mt-2 p-0 h-auto text-primary hover:text-primary/80"
                >
                  <Eye className="h-3 w-3 mr-1" />
                  {showFullDescription ? "Show less" : "Read more"}
                </Button>
              )}
            </div>
            <span className={`px-3 py-1 text-xs rounded-full ml-4 flex-shrink-0 ${
              project.featured 
                ? "bg-primary text-primary-foreground" 
                : "bg-secondary text-secondary-foreground"
            }`}>
              {project.category}
            </span>
          </div>
        </CardHeader>

        <CardContent className="flex-1">
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg mb-4 flex items-center justify-center">
            <div className="text-4xl">📊</div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex gap-2">
          {project.githubUrl && (
            <Button variant="outline" size="sm" onClick={() => window.open(project.githubUrl, '_blank')}>
              <Github className="h-4 w-4 mr-2" />
              Code
            </Button>
          )}
          {project.demoUrl && (
            <Button size="sm" onClick={() => window.open(project.demoUrl, '_blank')}>
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my data science and machine learning projects
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setFilter(category)}
              className="transition-all duration-200"
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Featured Projects Section */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-primary"
          >
            Featured Work
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* All Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl font-bold mb-8 text-primary"
          >
            All Projects
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-primary/5 rounded-lg p-8"
        >
          <h3 className="text-xl font-bold mb-6 text-center">Project Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary mb-2">92%</div>
              <p className="text-sm text-muted-foreground">Average Model Accuracy</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">15%</div>
              <p className="text-sm text-muted-foreground">Business Impact Improvement</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">1TB+</div>
              <p className="text-sm text-muted-foreground">Data Processed Daily</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary mb-2">10k+</div>
              <p className="text-sm text-muted-foreground">API Requests/Min</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}