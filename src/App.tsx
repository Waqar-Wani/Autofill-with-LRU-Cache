import React, { useState, useEffect } from 'react'
import { SearchView } from './components/SearchView'
import { SearchController } from './controllers/SearchController'
import { SearchItem } from './models/SearchModel'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const [results, setResults] = useState<SearchItem[]>([]);
  const [controller] = useState(() => new SearchController());

  useEffect(() => {
    const debouncedSearch = controller.getDebouncedSearch((newResults) => {
      setResults(newResults);
    });

    return () => {
      // Cleanup if needed
    };
  }, [controller]);

  const handleSearch = controller.getDebouncedSearch((newResults) => {
    setResults(newResults);
  });

  return (
    <div className="app">
      <h1>Search Autofill</h1>
      <SearchView results={results} onSearch={handleSearch} />

      <div className="info-section">
        <div className="card">
          <h2>About This Project</h2>
          <p>This is a search autofill component built with React and TypeScript, following the MVC architecture. It features debounced input for performance, an LRU cache to store recent search results, and highlights matching substrings in the results.</p>
        </div>

        <div className="card">
          <h2>Er. Waqar Wani</h2>
          <p>Experienced IT Professional with 2 years of expertise in ERP systems, client interaction, documentation, and project coordination. Proven skills in communication, client relationship management, and working collaboratively with cross-functional teams. Adept at understanding business requirements, streamlining processes, and supporting project goals. Proficient in using Python, Java, C++, SQL, and analytical tools to deliver actionable insights and streamline operations. Skilled in data visualization, machine learning, and process optimization, with a strong foundation in developing scalable solutions for data-driven decision-making.</p>
          <div className="social-links">
            <p><a href="https://www.linkedin.com/in/waqar-wani-b610941a5/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a></p>
            <p><a href="https://github.com/Waqar-Wani" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App 