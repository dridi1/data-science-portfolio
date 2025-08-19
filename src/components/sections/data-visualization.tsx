"use client";

import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";

const skillData = [
  { name: "Python", value: 95 },
  { name: "Machine Learning", value: 90 },
  { name: "SQL", value: 88 },
  { name: "R", value: 75 },
  { name: "JavaScript", value: 70 },
];

const experienceData = [
  { year: "2019", projects: 5, impact: 10 },
  { year: "2020", projects: 8, impact: 15 },
  { year: "2021", projects: 12, impact: 25 },
  { year: "2022", projects: 15, impact: 35 },
  { year: "2023", projects: 20, impact: 45 },
];

const categoryData = [
  { name: "Machine Learning", value: 40, color: "#3b82f6" },
  { name: "Data Visualization", value: 25, color: "#10b981" },
  { name: "Analytics", value: 20, color: "#f59e0b" },
  { name: "AI/NLP", value: 15, color: "#ef4444" },
];

export function DataVisualizationSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Data Insights</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Visual representation of my skills, experience, and project impact over time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Skills Chart */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg border border-border"
          >
            <h3 className="text-xl font-bold mb-4">Technical Proficiency</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-lg border border-border"
          >
            <h3 className="text-xl font-bold mb-4">Growth Over Time</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={experienceData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis dataKey="year" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Line type="monotone" dataKey="projects" stroke="#3b82f6" strokeWidth={2} name="Projects" />
                <Line type="monotone" dataKey="impact" stroke="#10b981" strokeWidth={2} name="Business Impact %" />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Project Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-card p-6 rounded-lg border border-border"
        >
          <h3 className="text-xl font-bold mb-4 text-center">Project Distribution by Category</h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <div className="w-80 h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              {categoryData.map((category) => (
                <div key={category.name} className="flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="text-foreground">{category.name}</span>
                  <span className="text-muted-foreground">({category.value}%)</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}