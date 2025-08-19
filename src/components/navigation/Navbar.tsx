'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { useTheme } from '@/components/providers/ThemeProvider';
import { LanguageSwitch } from './LanguageSwitch';
import { scrollToElement } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();
  const t = useTranslations('navigation');

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'skills', href: '#skills' },
    { key: 'experience', href: '#experience' },
    { key: 'projects', href: '#projects' },
    { key: 'contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    const elementId = href.substring(1);
    scrollToElement(elementId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-dark-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-dark-300 z-50 transition-colors duration-300">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick('#home')}
              className="text-xl font-bold text-primary-600 dark:text-primary-400"
            >
              DS Portfolio
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </div>

          {/* Theme Toggle & Language Switch */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitch />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'light' ? <Moon size={20} /> : <Sun size={20} />)}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitch />
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'light' ? <Moon size={18} /> : <Sun size={18} />)}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-dark-900 border-t border-gray-200 dark:border-dark-300">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {t(item.key)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}