import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LanguageSelectorProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

const languages = [
  { 
    code: 'en', 
    name: 'English', 
    flag: 'https://flagcdn.com/w40/gb.png'
  },
  { 
    code: 'da', 
    name: 'Dansk', 
    flag: 'https://flagcdn.com/w40/dk.png'
  },
  { 
    code: 'de', 
    name: 'Deutsch', 
    flag: 'https://flagcdn.com/w40/de.png'
  },
  { 
    code: 'sv', 
    name: 'Svenska', 
    flag: 'https://flagcdn.com/w40/se.png'
  }
];

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ currentLanguage, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentLang = languages.find(lang => lang.code === currentLanguage)!;

  return (
    <div 
      className="fixed top-4 right-4 z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <motion.div
        className="relative"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        {/* Current Language Flag */}
        <motion.button
          className="relative px-2 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img
            src={currentLang.flag}
            alt={`${currentLang.name} flag`}
            className="w-6 h-4 object-cover rounded"
            loading="lazy"
          />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            {currentLang.name}
          </span>
        </motion.button>

        {/* Other Language Flags */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full right-0 mt-2 bg-gray-800 rounded-lg shadow-lg overflow-hidden"
            >
              {languages
                .filter(lang => lang.code !== currentLanguage)
                .map((lang) => (
                  <motion.button
                    key={lang.code}
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setIsOpen(false);
                    }}
                    className="relative group w-full px-2 py-1 hover:bg-gray-700 transition-colors flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img
                      src={lang.flag}
                      alt={`${lang.name} flag`}
                      className="w-6 h-4 object-cover rounded"
                      loading="lazy"
                    />
                    <span className="absolute -right-24 top-1/2 transform -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {lang.name}
                    </span>
                  </motion.button>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default LanguageSelector;