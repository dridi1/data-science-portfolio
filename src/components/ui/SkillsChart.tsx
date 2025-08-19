'use client';

import { useEffect, useRef } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Skill } from '@/types';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface SkillsChartProps {
  skills: Skill[];
}

export function SkillsChart({ skills }: SkillsChartProps) {
  // Group skills by category and get top skills
  const topSkills = skills
    .sort((a, b) => b.level - a.level)
    .slice(0, 10);

  const data = {
    labels: topSkills.map(skill => skill.name),
    datasets: [
      {
        label: 'Skill Level (%)',
        data: topSkills.map(skill => skill.level),
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',   // Blue
          'rgba(16, 185, 129, 0.8)',   // Green
          'rgba(245, 101, 101, 0.8)',  // Red
          'rgba(139, 92, 246, 0.8)',   // Purple
          'rgba(245, 158, 11, 0.8)',   // Yellow
          'rgba(236, 72, 153, 0.8)',   // Pink
          'rgba(20, 184, 166, 0.8)',   // Teal
          'rgba(251, 146, 60, 0.8)',   // Orange
          'rgba(99, 102, 241, 0.8)',   // Indigo
          'rgba(34, 197, 94, 0.8)',    // Emerald
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          'rgba(16, 185, 129, 1)',
          'rgba(245, 101, 101, 1)',
          'rgba(139, 92, 246, 1)',
          'rgba(245, 158, 11, 1)',
          'rgba(236, 72, 153, 1)',
          'rgba(20, 184, 166, 1)',
          'rgba(251, 146, 60, 1)',
          'rgba(99, 102, 241, 1)',
          'rgba(34, 197, 94, 1)',
        ],
        borderWidth: 1,
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Top Technical Skills',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
        color: '#374151',
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: '#fff',
        bodyColor: '#fff',
        borderColor: '#4B5563',
        borderWidth: 1,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(156, 163, 175, 0.2)',
        },
        ticks: {
          color: '#6B7280',
          callback: function(value: any) {
            return value + '%';
          },
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#6B7280',
          maxRotation: 45,
          minRotation: 45,
        },
      },
    },
  };

  return (
    <div className="card p-6">
      <div className="h-80">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}