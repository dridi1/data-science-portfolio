'use client';

import { useRouter, usePathname } from '@/routing';
import { Globe } from 'lucide-react';
import { useState } from 'react';

export function LanguageSwitch() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentLocale = pathname.split('/')[1] || 'en';

  const handleLanguageChange = (locale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 p-2 rounded-lg bg-gray-100 dark:bg-dark-200 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-300 transition-colors duration-200"
        aria-label="Change language"
      >
        <Globe size={18} />
        <span className="text-sm font-medium uppercase">{currentLocale}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-24 bg-white dark:bg-dark-100 rounded-lg shadow-lg border border-gray-200 dark:border-dark-300 py-1 z-10">
          <button
            onClick={() => handleLanguageChange('en')}
            className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-dark-200 transition-colors duration-200 ${
              currentLocale === 'en' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => handleLanguageChange('fr')}
            className={`block w-full text-left px-3 py-2 text-sm hover:bg-gray-100 dark:hover:bg-dark-200 transition-colors duration-200 ${
              currentLocale === 'fr' ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            FR
          </button>
        </div>
      )}
    </div>
  );
}