'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const skillsData = [
  { name: 'Python', level: 95 },
  { name: 'R', level: 90 },
  { name: 'SQL', level: 95 },
  { name: 'Machine Learning', level: 88 },
  { name: 'Data Viz', level: 85 }
];

const projectsData = [
  { month: 'Jan', projects: 2 },
  { month: 'Feb', projects: 3 },
  { month: 'Mar', projects: 2 },
  { month: 'Apr', projects: 4 },
  { month: 'May', projects: 3 },
  { month: 'Jun', projects: 5 }
];

const techStackData = [
  { name: 'Python', value: 40, color: '#3B82F6' },
  { name: 'R', value: 25, color: '#10B981' },
  { name: 'SQL', value: 20, color: '#F59E0B' },
  { name: 'JavaScript', value: 15, color: '#EF4444' }
];

export default function DataVisualization() {
  return (
    <section id="data-viz" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Data Visualization Examples
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interactive charts and visualizations showcasing my expertise in data presentation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Skills Chart */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-background rounded-lg p-6 shadow-sm border border-border"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Skills Proficiency</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={skillsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="level" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Projects Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-background rounded-lg p-6 shadow-sm border border-border"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Projects Completed (2024)</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={projectsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="projects" stroke="#10B981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Technology Stack Distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-background rounded-lg p-6 shadow-sm border border-border"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Technology Stack Distribution</h3>
          <div className="flex justify-center">
            <ResponsiveContainer width={400} height={400}>
              <PieChart>
                <Pie
                  data={techStackData}
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
                >
                  {techStackData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </section>
  );
}