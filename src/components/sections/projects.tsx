'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, BarChart3, Database, Brain, TrendingUp } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';

export function ProjectsSection() {
  // Sample data for visualizations
  const salesData = [
    { month: 'Jan', sales: 4000, profit: 2400 },
    { month: 'Feb', sales: 3000, profit: 1398 },
    { month: 'Mar', sales: 2000, profit: 9800 },
    { month: 'Apr', sales: 2780, profit: 3908 },
    { month: 'May', sales: 1890, profit: 4800 },
    { month: 'Jun', sales: 2390, profit: 3800 },
  ];

  const accuracyData = [
    { model: 'Random Forest', accuracy: 92 },
    { model: 'XGBoost', accuracy: 94 },
    { model: 'Neural Network', accuracy: 89 },
    { model: 'SVM', accuracy: 87 },
  ];

  const segmentData = [
    { name: 'High Value', value: 30, color: '#8884d8' },
    { name: 'Medium Value', value: 45, color: '#82ca9d' },
    { name: 'Low Value', value: 25, color: '#ffc658' },
  ];

  const projects = [
    {
      title: 'Customer Segmentation Analysis',
      description: 'Advanced clustering analysis to identify customer segments for targeted marketing campaigns, resulting in 35% increase in conversion rates.',
      icon: Database,
      image: 'segmentation',
      technologies: ['Python', 'Scikit-learn', 'K-means', 'Tableau'],
      features: [
        'RFM Analysis for customer value scoring',
        'K-means clustering with optimal cluster selection',
        'Interactive dashboards for segment exploration',
        'Actionable recommendations for each segment'
      ],
      metrics: {
        'Conversion Rate Increase': '35%',
        'Customer Segments': '5',
        'Data Points': '100K+'
      }
    },
    {
      title: 'Predictive Sales Forecasting',
      description: 'Machine learning model to predict future sales trends with 94% accuracy, enabling better inventory management and resource planning.',
      icon: TrendingUp,
      image: 'forecasting',
      technologies: ['Python', 'TensorFlow', 'Time Series', 'AWS'],
      features: [
        'LSTM neural networks for time series prediction',
        'Seasonal decomposition and trend analysis',
        'Real-time model updates with new data',
        'Automated alert system for anomalies'
      ],
      metrics: {
        'Prediction Accuracy': '94%',
        'Forecast Horizon': '12 months',
        'Cost Savings': '$2M+'
      }
    },
    {
      title: 'ML Model Performance Dashboard',
      description: 'Comprehensive dashboard for monitoring machine learning model performance across multiple algorithms and datasets.',
      icon: BarChart3,
      image: 'dashboard',
      technologies: ['Python', 'Streamlit', 'MLflow', 'Docker'],
      features: [
        'Real-time model performance tracking',
        'A/B testing framework for model comparison',
        'Feature importance analysis',
        'Automated model retraining pipeline'
      ],
      metrics: {
        'Models Monitored': '25+',
        'Performance Improvement': '15%',
        'Monitoring Frequency': 'Real-time'
      }
    },
    {
      title: 'NLP Sentiment Analysis Engine',
      description: 'Natural language processing system for analyzing customer sentiment from reviews and social media data.',
      icon: Brain,
      image: 'nlp',
      technologies: ['Python', 'BERT', 'spaCy', 'FastAPI'],
      features: [
        'Multi-language sentiment detection',
        'Real-time processing of text streams',
        'Emotion classification beyond sentiment',
        'Integration with existing CRM systems'
      ],
      metrics: {
        'Languages Supported': '5',
        'Processing Speed': '1000 texts/sec',
        'Accuracy': '91%'
      }
    }
  ];

  const renderVisualization = (type: string) => {
    switch (type) {
      case 'segmentation':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={segmentData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {segmentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        );
      case 'forecasting':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={salesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        );
      case 'dashboard':
        return (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={accuracyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="model" />
              <YAxis domain={[80, 100]} />
              <Tooltip />
              <Bar dataKey="accuracy" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        );
      default:
        return (
          <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg flex items-center justify-center">
            <Brain className="h-16 w-16 text-blue-600 dark:text-blue-400" />
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcase of data science projects demonstrating real-world impact and technical expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              {/* Visualization */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                {renderVisualization(project.image)}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3">
                    <project.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Key Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="text-sm text-gray-600 dark:text-gray-300 flex items-start">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Impact Metrics:
                  </h4>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(project.metrics).map(([key, value], i) => (
                      <div key={i} className="text-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </button>
                  <button className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-400 rounded-lg transition-colors">
                    <Github className="h-4 w-4 mr-2" />
                    View Code
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}