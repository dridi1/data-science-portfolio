// Language management system
class LanguageManager {
  constructor() {
    this.currentLanguage = 'en';
    this.translations = {};
    this.init();
  }

  async init() {
    // Load translations from JSON file
    await this.loadTranslations();
    
    // Get saved language preference or detect browser language
    this.currentLanguage = this.getSavedLanguage() || this.detectBrowserLanguage();
    
    // Apply initial language
    this.setLanguage(this.currentLanguage);
    
    // Set up language toggle listener
    this.setupLanguageToggle();
  }

  async loadTranslations() {
    try {
      const response = await fetch('./data/content.json');
      const data = await response.json();
      this.translations = data.languages;
    } catch (error) {
      console.error('Failed to load translations:', error);
      // Fallback to English if loading fails
      this.translations = {
        en: {
          nav: { about: 'About', experience: 'Experience', education: 'Education', projects: 'Projects', contact: 'Contact' }
        }
      };
    }
  }

  getSavedLanguage() {
    return localStorage.getItem('preferred-language');
  }

  saveLanguage(language) {
    localStorage.setItem('preferred-language', language);
  }

  detectBrowserLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    const langCode = browserLang.split('-')[0];
    
    // Return supported language or default to English
    return this.translations[langCode] ? langCode : 'en';
  }

  setLanguage(language) {
    if (!this.translations[language]) {
      console.warn(`Language ${language} not supported, falling back to English`);
      language = 'en';
    }

    this.currentLanguage = language;
    this.saveLanguage(language);
    
    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('data-lang', language);
    
    // Update all translatable elements
    this.updatePageContent();
    
    // Update language toggle display
    this.updateLanguageToggle();
    
    // Dispatch custom event for other components
    document.dispatchEvent(new CustomEvent('languageChanged', { 
      detail: { language } 
    }));
  }

  updatePageContent() {
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(element => {
      const key = element.getAttribute('data-key');
      const translation = this.getTranslation(key);
      
      if (translation) {
        // Handle different element types
        if (element.tagName === 'INPUT' && element.type === 'submit') {
          element.value = translation;
        } else if (element.hasAttribute('placeholder')) {
          element.placeholder = translation;
        } else if (element.hasAttribute('title')) {
          element.title = translation;
        } else {
          element.textContent = translation;
        }
      }
    });

    // Update dynamic content
    this.updateDynamicContent();
  }

  updateDynamicContent() {
    const currentLangData = this.translations[this.currentLanguage];
    
    if (!currentLangData) return;

    // Update skills
    this.updateSkills(currentLangData.about?.skills || []);
    
    // Update experience timeline
    this.updateExperience(currentLangData.experience?.items || []);
    
    // Update education
    this.updateEducation(currentLangData.education?.items || []);
    
    // Update projects
    this.updateProjects(currentLangData.projects?.items || []);
  }

  updateSkills(skills) {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = skills.map(skill => 
      `<div class="skill-item">${skill}</div>`
    ).join('');
  }

  updateExperience(experiences) {
    const container = document.getElementById('experience-timeline');
    if (!container) return;

    container.innerHTML = experiences.map((exp, index) => `
      <div class="timeline-item" style="animation-delay: ${index * 0.2}s">
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <h3 class="experience-title">${exp.title}</h3>
          <h4 class="experience-company">${exp.company}</h4>
          <p class="experience-period">${exp.period}</p>
          <p class="experience-description">${exp.description}</p>
        </div>
      </div>
    `).join('');
  }

  updateEducation(education) {
    const container = document.getElementById('education-container');
    if (!container) return;

    container.innerHTML = education.map((edu, index) => `
      <div class="education-item" style="animation-delay: ${index * 0.2}s">
        <h3 class="education-degree">${edu.degree}</h3>
        <h4 class="education-school">${edu.school}</h4>
        <p class="education-period">${edu.period}</p>
        <p class="education-description">${edu.description}</p>
      </div>
    `).join('');
  }

  updateProjects(projects) {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = projects.map((project, index) => `
      <div class="project-item" style="animation-delay: ${index * 0.2}s">
        <div class="project-content">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
          <div class="project-technologies">
            ${project.technologies.map(tech => 
              `<span class="tech-tag">${tech}</span>`
            ).join('')}
          </div>
        </div>
      </div>
    `).join('');
  }

  getTranslation(key) {
    const keys = key.split('.');
    let current = this.translations[this.currentLanguage];
    
    for (const k of keys) {
      if (current && typeof current === 'object' && k in current) {
        current = current[k];
      } else {
        return null;
      }
    }
    
    return current;
  }

  updateLanguageToggle() {
    const langToggle = document.querySelector('.lang-toggle');
    const currentSpan = langToggle?.querySelector('.lang-current');
    const altSpan = langToggle?.querySelector('.lang-alt');
    
    if (currentSpan && altSpan) {
      if (this.currentLanguage === 'en') {
        currentSpan.textContent = 'EN';
        altSpan.textContent = 'FR';
      } else {
        currentSpan.textContent = 'FR';
        altSpan.textContent = 'EN';
      }
    }
  }

  setupLanguageToggle() {
    const langToggle = document.querySelector('.lang-toggle');
    
    if (langToggle) {
      langToggle.addEventListener('click', () => {
        const newLanguage = this.currentLanguage === 'en' ? 'fr' : 'en';
        this.setLanguage(newLanguage);
      });
    }
  }

  toggleLanguage() {
    const newLanguage = this.currentLanguage === 'en' ? 'fr' : 'en';
    this.setLanguage(newLanguage);
  }

  getCurrentLanguage() {
    return this.currentLanguage;
  }

  getAvailableLanguages() {
    return Object.keys(this.translations);
  }
}

// Export for use in main.js
window.LanguageManager = LanguageManager;