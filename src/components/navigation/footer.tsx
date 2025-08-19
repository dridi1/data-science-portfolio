'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ChevronUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/datascientist',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/datascientist',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/datascientist',
      label: 'Twitter'
    },
    {
      icon: Mail,
      href: 'mailto:contact@datascientist.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-8">
          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>

          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p className="mb-2">
              © {new Date().getFullYear()} Data Science Portfolio. All rights reserved.
            </p>
            <p className="text-sm">
              Built with Next.js, TypeScript, and Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}