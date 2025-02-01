import React from 'react';
import Introduction from './components/Introduction';
import Timeline from './components/Timeline';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-gray-900">
      <Introduction />
      <Timeline />
      <Contact />
    </div>
  );
}

export default App;