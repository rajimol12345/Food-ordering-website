import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const type = params.get('type');
  const query = params.get('query');

  return (
    <div className="container mt-4">
      <h2>Search Results</h2>
      <p><strong>Search Type:</strong> {type}</p>
      <p><strong>Query:</strong> {query}</p>

      {/* TODO: Implement actual filtering logic */}
    </div>
  );
};

export default SearchResults;
