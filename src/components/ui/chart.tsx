'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface SkillChartProps {
  data: Array<{ name: string; value: number }>;
  type?: 'bar' | 'pie';
  colors?: string[];
}

const defaultColors = ['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444', '#06b6d4'];

export const SkillChart: React.FC<SkillChartProps> = ({ 
  data, 
  type = 'bar', 
  colors = defaultColors 
}) => {
  if (type === 'pie') {
    return (
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
        <XAxis 
          dataKey="name" 
          tick={{ fontSize: 12 }}
          className="text-gray-600 dark:text-gray-400"
        />
        <YAxis 
          tick={{ fontSize: 12 }}
          className="text-gray-600 dark:text-gray-400"
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'var(--tooltip-bg)',
            border: '1px solid var(--tooltip-border)',
            borderRadius: '8px'
          }}
        />
        <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

// Sample data for demonstration
export const skillsData = [
  { name: 'Python', value: 95 },
  { name: 'R', value: 90 },
  { name: 'SQL', value: 92 },
  { name: 'Machine Learning', value: 88 },
  { name: 'Data Viz', value: 85 },
  { name: 'Statistics', value: 92 }
];

export const projectsData = [
  { name: 'Customer Segmentation', value: 85 },
  { name: 'Fraud Detection', value: 92 },
  { name: 'Sales Forecasting', value: 88 },
  { name: 'Data Pipeline', value: 90 }
];