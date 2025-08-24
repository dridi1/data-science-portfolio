// Main application functionality
class PortfolioApp {
  constructor() {
    this.languageManager = null;
    this.observers = [];
    this.init();
  }

  async init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setup());
    } else {
      this.setup();
    }
  }

  async setup() {
    // Initialize language manager
    this.languageManager = new LanguageManager();
    
    // Setup navigation
    this.setupNavigation();
    
    // Setup mobile menu
    this.setupMobileMenu();
    
    // Setup smooth scrolling
    this.setupSmoothScrolling();
    
    // Setup intersection observers for animations
    this.setupIntersectionObservers();
    
    // Setup form handling (if any)
    this.setupForms();
    
    // Setup scroll effects
    this.setupScrollEffects();
    
    // Add keyboard navigation support
    this.setupKeyboardNavigation();
    
    console.log('Portfolio app initialized successfully');
  }

  setupNavigation() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    // Highlight active navigation item based on scroll position
    const sections = document.querySelectorAll('section[id]');
    
    const highlightNavigation = () => {
      const scrollY = window.pageYOffset;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    };
    
    // Add scroll listener with throttling
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          highlightNavigation();
          ticking = false;
        });
        ticking = true;
      }
    });
    
    // Initial check
    highlightNavigation();
  }

  setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
        mobileToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
      });
      
      // Close menu when clicking on a link
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileToggle.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.style.overflow = '';
        });
      });
      
      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!mobileToggle.contains(e.target) && !navMenu.contains(e.target)) {
          mobileToggle.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    }
  }

  setupSmoothScrolling() {
    // Enhanced smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.offsetTop;
          const offsetPosition = elementPosition - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  setupIntersectionObservers() {
    // Observer for fade-in animations
    const fadeInObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements that should fade in
    const fadeInElements = document.querySelectorAll('.timeline-item, .education-item, .project-item');
    fadeInElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      fadeInObserver.observe(el);
    });
    
    this.observers.push(fadeInObserver);
    
    // Observer for skill items animation
    const skillsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillItems = entry.target.querySelectorAll('.skill-item');
          skillItems.forEach((item, index) => {
            setTimeout(() => {
              item.style.opacity = '1';
              item.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
          });
        }
      });
    }, { threshold: 0.5 });
    
    const skillsContainer = document.getElementById('skills-container');
    if (skillsContainer) {
      skillsObserver.observe(skillsContainer);
      this.observers.push(skillsObserver);
    }
  }

  setupForms() {
    // Setup contact form if it exists
    const contactForm = document.querySelector('#contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;
        
        try {
          // Here you would typically send the form data to a server
          console.log('Form data:', data);
          
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          // Show success message
          this.showNotification('Message sent successfully!', 'success');
          contactForm.reset();
        } catch (error) {
          console.error('Form submission error:', error);
          this.showNotification('Failed to send message. Please try again.', 'error');
        } finally {
          submitButton.textContent = originalText;
          submitButton.disabled = false;
        }
      });
    }
  }

  setupScrollEffects() {
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.pageYOffset;
    
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      // Add/remove scrolled class based on scroll position
      if (currentScrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
      
      // Hide/show navbar on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.style.transform = 'translateY(-100%)';
      } else {
        navbar.style.transform = 'translateY(0)';
      }
      
      lastScrollY = currentScrollY;
    };
    
    // Throttle scroll events
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  setupKeyboardNavigation() {
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
      // ESC key closes mobile menu
      if (e.key === 'Escape') {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (mobileToggle && navMenu && navMenu.classList.contains('active')) {
          mobileToggle.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
      
      // Ctrl/Cmd + L toggles language
      if ((e.ctrlKey || e.metaKey) && e.key === 'l') {
        e.preventDefault();
        if (this.languageManager) {
          this.languageManager.toggleLanguage();
        }
      }
    });
    
    // Improve focus management
    this.setupFocusManagement();
  }

  setupFocusManagement() {
    // Add skip link for screen readers
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content landmark
    const mainContent = document.querySelector('main') || document.querySelector('.hero-section');
    if (mainContent) {
      mainContent.id = 'main-content';
      mainContent.setAttribute('tabindex', '-1');
    }
    
    // Trap focus in mobile menu when open
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
      const focusableElements = navMenu.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
      
      navMenu.addEventListener('keydown', (e) => {
        if (e.key === 'Tab' && navMenu.classList.contains('active')) {
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];
          
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      });
    }
  }

  showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
      position: 'fixed',
      top: '20px',
      right: '20px',
      padding: '12px 24px',
      borderRadius: '8px',
      backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
      color: 'white',
      fontWeight: '500',
      zIndex: '9999',
      transform: 'translateX(100%)',
      transition: 'transform 0.3s ease-out',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    });
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, 4000);
  }

  // Cleanup method
  destroy() {
    // Remove all observers
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
    
    // Remove event listeners
    // (In a real application, you'd store references to functions to properly remove them)
    
    console.log('Portfolio app destroyed');
  }
}

// Performance optimization: Load app when DOM is ready
let app;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    app = new PortfolioApp();
  });
} else {
  app = new PortfolioApp();
}

// Handle page visibility changes for performance
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    // Pause animations/timers when page is hidden
  } else {
    // Resume when page becomes visible
  }
});

// Export for debugging purposes
window.PortfolioApp = PortfolioApp;
window.portfolioApp = app;