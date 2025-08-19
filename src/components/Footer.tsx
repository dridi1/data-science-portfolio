'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Links */}
          <div className="flex items-center space-x-6 mb-4 md:mb-0">
            <a
              href="mailto:contact@example.com"
              className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
              <span className="hidden sm:inline">contact@example.com</span>
            </a>
            <a
              href="https://linkedin.com/in/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>© 2024 Data Science Portfolio. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using Next.js</span>
          </div>
        </div>
      </div>
    </footer>
  );
}