import React from 'react';
import { SearchItem } from '../models/SearchModel';
import './SearchView.css';

interface SearchViewProps {
  results: SearchItem[];
  onSearch: (query: string) => void;
}

export const SearchView: React.FC<SearchViewProps> = ({ results, onSearch }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <div className="results-container">
        {results.map((item) => (
          <div key={item.id} className="result-item">
            <h3 dangerouslySetInnerHTML={{ __html: item.name }} />
          </div>
        ))}
      </div>
    </div>
  );
}; 