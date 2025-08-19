import { Skill, Project } from '@/types';

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', level: 95, category: 'programming' },
  { name: 'R', level: 90, category: 'programming' },
  { name: 'SQL', level: 90, category: 'programming' },
  { name: 'JavaScript', level: 80, category: 'programming' },
  { name: 'TypeScript', level: 75, category: 'programming' },

  // Data Science & ML
  { name: 'Machine Learning', level: 90, category: 'dataScience' },
  { name: 'Statistical Analysis', level: 95, category: 'dataScience' },
  { name: 'Data Visualization', level: 90, category: 'dataScience' },
  { name: 'Deep Learning', level: 80, category: 'dataScience' },
  { name: 'NLP', level: 75, category: 'dataScience' },
  { name: 'Time Series', level: 85, category: 'dataScience' },

  // Tools & Platforms
  { name: 'Power BI', level: 90, category: 'tools' },
  { name: 'Tableau', level: 85, category: 'tools' },
  { name: 'Excel', level: 95, category: 'tools' },
  { name: 'Git', level: 85, category: 'tools' },
  { name: 'Jupyter', level: 90, category: 'tools' },
  { name: 'Docker', level: 70, category: 'tools' },

  // Databases
  { name: 'SQL Server', level: 85, category: 'databases' },
  { name: 'PostgreSQL', level: 80, category: 'databases' },
  { name: 'MongoDB', level: 70, category: 'databases' },
  { name: 'SQLite', level: 85, category: 'databases' },

  // Cloud Platforms
  { name: 'AWS', level: 75, category: 'cloud' },
  { name: 'Azure', level: 70, category: 'cloud' },
  { name: 'Google Cloud', level: 65, category: 'cloud' },
];

export const projects: Project[] = [
  {
    title: 'Customer Segmentation Analysis',
    description: 'Developed a machine learning model to segment customers based on purchasing behavior patterns using K-means clustering and RFM analysis. The model identified 5 distinct customer segments leading to targeted marketing strategies.',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
    category: 'Machine Learning',
    image: '/projects/customer-segmentation.jpg'
  },
  {
    title: 'Sales Forecasting Dashboard',
    description: 'Built an interactive dashboard for sales prediction using ARIMA time series models and seasonal decomposition. The system provides weekly and monthly forecasts with 85% accuracy.',
    technologies: ['R', 'Shiny', 'Time Series', 'ggplot2', 'DT'],
    category: 'Data Visualization',
    image: '/projects/sales-dashboard.jpg'
  },
  {
    title: 'Sentiment Analysis Tool',
    description: 'Created a natural language processing application to analyze customer sentiment from social media posts and product reviews. Used BERT transformer model achieving 92% accuracy.',
    technologies: ['Python', 'NLTK', 'TensorFlow', 'BERT', 'AWS'],
    category: 'Natural Language Processing',
    image: '/projects/sentiment-analysis.jpg'
  },
  {
    title: 'Churn Prediction Model',
    description: 'Developed a predictive model to identify customers at risk of churning using ensemble methods. The model achieved 89% precision and reduced churn rate by 15%.',
    technologies: ['Python', 'XGBoost', 'Random Forest', 'Pandas', 'Plotly'],
    category: 'Machine Learning',
    image: '/projects/churn-prediction.jpg'
  },
  {
    title: 'Financial Risk Assessment',
    description: 'Built a comprehensive risk assessment model for loan default prediction using gradient boosting algorithms and feature engineering techniques.',
    technologies: ['Python', 'LightGBM', 'Feature Engineering', 'SHAP', 'SQL'],
    category: 'Financial Analytics',
    image: '/projects/risk-assessment.jpg'
  },
  {
    title: 'Real-time Analytics Pipeline',
    description: 'Designed and implemented a real-time data processing pipeline for streaming analytics using Apache Kafka and Spark for processing millions of events daily.',
    technologies: ['Apache Kafka', 'Spark', 'Python', 'Docker', 'AWS'],
    category: 'Data Engineering',
    image: '/projects/analytics-pipeline.jpg'
  }
];