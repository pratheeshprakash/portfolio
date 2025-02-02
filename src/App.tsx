import React, { useState, useEffect } from 'react';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import LanguageSelector from './components/LanguageSelector';

function App() {
  const [language, setLanguage] = useState('en');
  const [content, setContent] = useState<any>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // First load the translation lookup to determine which file to use
        const lookupResponse = await fetch('/content/translation_lookup.json');
        const lookup = await lookupResponse.json();
        
        // Get the translation file path from the lookup
        const translationFile = lookup.languages[language];
        
        // Load the actual content
        const contentResponse = await fetch(`/content/${translationFile}`);
        const data = await contentResponse.json();
        setContent(data);
      } catch (error) {
        console.error('Error loading content:', error);
      }
    };

    loadContent();
  }, [language]);

  if (!content) {
    return <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="text-white text-xl">Loading...</div>
    </div>;
  }

  return (
    <div className="bg-gray-900">
      <LanguageSelector
        currentLanguage={language}
        onLanguageChange={setLanguage}
      />
      <Introduction content={content} />
      <Timeline content={content} />
      <Contact content={content} />
    </div>
  );
}

export default App;