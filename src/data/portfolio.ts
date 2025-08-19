import { Project, Experience, Skill } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Predictive Analytics Dashboard',
    description: 'Real-time dashboard for sales forecasting using machine learning algorithms',
    longDescription: 'Built a comprehensive predictive analytics dashboard that uses Random Forest and LSTM models to forecast sales trends. The dashboard provides real-time insights with interactive visualizations, helping businesses make data-driven decisions.',
    technologies: ['Python', 'Scikit-learn', 'TensorFlow', 'Plotly', 'Streamlit', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/predictive-dashboard',
    demoUrl: 'https://predictive-dashboard.vercel.app',
    imageUrl: '/images/project1.jpg',
    category: 'Machine Learning',
    featured: true
  },
  {
    id: '2',
    title: 'Customer Churn Analysis',
    description: 'ML model to predict customer churn with 92% accuracy',
    longDescription: 'Developed a machine learning pipeline to predict customer churn using ensemble methods. Implemented feature engineering, model selection, and hyperparameter tuning to achieve 92% accuracy. The solution helped reduce churn by 15%.',
    technologies: ['Python', 'Pandas', 'XGBoost', 'Matplotlib', 'Jupyter'],
    githubUrl: 'https://github.com/yourusername/churn-analysis',
    imageUrl: '/images/project2.jpg',
    category: 'Machine Learning',
    featured: true
  },
  {
    id: '3',
    title: 'Interactive Data Visualization',
    description: 'D3.js dashboard for exploring complex datasets',
    longDescription: 'Created an interactive data visualization platform using D3.js and React to explore complex multi-dimensional datasets. Features include dynamic filtering, real-time updates, and exportable charts.',
    technologies: ['JavaScript', 'D3.js', 'React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/yourusername/data-viz',
    demoUrl: 'https://data-viz-platform.vercel.app',
    imageUrl: '/images/project3.jpg',
    category: 'Data Visualization',
    featured: false
  },
  {
    id: '4',
    title: 'NLP Sentiment Analysis API',
    description: 'REST API for real-time sentiment analysis of social media data',
    longDescription: 'Built a scalable REST API that performs real-time sentiment analysis on social media posts using BERT and custom trained models. Processes over 10,000 requests per minute with sub-second response times.',
    technologies: ['Python', 'FastAPI', 'BERT', 'Docker', 'Redis', 'AWS'],
    githubUrl: 'https://github.com/yourusername/sentiment-api',
    imageUrl: '/images/project4.jpg',
    category: 'AI/NLP',
    featured: true
  }
];

export const experiences: Experience[] = [
  {
    id: '1',
    title: 'Senior Data Scientist',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    startDate: '2022-01',
    endDate: null,
    description: [
      'Led a team of 4 data scientists in developing ML models for customer segmentation and churn prediction',
      'Implemented automated ML pipelines that reduced model deployment time by 60%',
      'Collaborated with product teams to integrate ML insights into user-facing features',
      'Mentored junior data scientists and conducted technical interviews'
    ],
    technologies: ['Python', 'TensorFlow', 'AWS', 'Docker', 'Kubernetes', 'SQL']
  },
  {
    id: '2',
    title: 'Data Scientist',
    company: 'StartupXYZ',
    location: 'New York, NY',
    startDate: '2020-06',
    endDate: '2022-01',
    description: [
      'Built recommendation systems that increased user engagement by 25%',
      'Developed A/B testing frameworks for data-driven product decisions',
      'Created ETL pipelines processing 1TB+ of data daily',
      'Presented findings to C-level executives and stakeholders'
    ],
    technologies: ['Python', 'Spark', 'Kafka', 'PostgreSQL', 'Airflow', 'GCP']
  },
  {
    id: '3',
    title: 'Data Analyst',
    company: 'Analytics Pro',
    location: 'Boston, MA',
    startDate: '2019-01',
    endDate: '2020-06',
    description: [
      'Performed statistical analysis on customer behavior and business metrics',
      'Created interactive dashboards using Tableau and Power BI',
      'Automated reporting processes, saving 20+ hours per week',
      'Collaborated with marketing team to optimize campaign performance'
    ],
    technologies: ['Python', 'R', 'SQL', 'Tableau', 'Power BI', 'Excel']
  }
];

export const skills: Skill[] = [
  // Programming Languages
  { name: 'Python', category: 'Programming', level: 5 },
  { name: 'R', category: 'Programming', level: 4 },
  { name: 'SQL', category: 'Programming', level: 5 },
  { name: 'JavaScript', category: 'Programming', level: 4 },
  { name: 'Scala', category: 'Programming', level: 3 },
  
  // Data Science & ML
  { name: 'Machine Learning', category: 'Data Science', level: 5 },
  { name: 'Deep Learning', category: 'Data Science', level: 4 },
  { name: 'Statistical Analysis', category: 'Data Science', level: 5 },
  { name: 'Data Visualization', category: 'Data Science', level: 5 },
  { name: 'A/B Testing', category: 'Data Science', level: 4 },
  { name: 'Time Series Analysis', category: 'Data Science', level: 4 },
  
  // Tools & Frameworks
  { name: 'TensorFlow', category: 'Tools', level: 4 },
  { name: 'PyTorch', category: 'Tools', level: 4 },
  { name: 'Scikit-learn', category: 'Tools', level: 5 },
  { name: 'Pandas', category: 'Tools', level: 5 },
  { name: 'Apache Spark', category: 'Tools', level: 4 },
  { name: 'Tableau', category: 'Tools', level: 4 },
  { name: 'Power BI', category: 'Tools', level: 3 },
  
  // Cloud & Infrastructure
  { name: 'AWS', category: 'Cloud', level: 4 },
  { name: 'Google Cloud', category: 'Cloud', level: 3 },
  { name: 'Docker', category: 'Cloud', level: 4 },
  { name: 'Kubernetes', category: 'Cloud', level: 3 },
  { name: 'Apache Airflow', category: 'Cloud', level: 4 }
];