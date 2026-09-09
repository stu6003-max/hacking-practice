import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './App.css';

// Components will be added here

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/challenges" element={<div>Challenges</div>} />
          <Route path="/learning" element={<div>Learning Materials</div>} />
          <Route path="/leaderboard" element={<div>Leaderboard</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
