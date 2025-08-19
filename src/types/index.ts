export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  imageUrl: string;
  category: 'Machine Learning' | 'Data Visualization' | 'Analytics' | 'AI/NLP';
  featured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | null;
  description: string[];
  technologies: string[];
}

export interface Skill {
  name: string;
  category: 'Programming' | 'Data Science' | 'Tools' | 'Cloud';
  level: number; // 1-5
  icon?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}