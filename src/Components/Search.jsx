import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [searchType, setSearchType] = useState('all');
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchType, query.trim());
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-box d-flex gap-2">
      <select
        className="form-select"
        value={searchType}
        onChange={e => setSearchType(e.target.value)}
        style={{ maxWidth: '180px' }}
      >
        <option value="all">All</option>
        <option value="location">Location</option>
        <option value="cuisine">Cuisine</option>
        <option value="dish">Dish</option>
        <option value="restaurant">Restaurant Name</option>
      </select>

      <input
        type="text"
        className="form-control"
        placeholder="Search for food, cuisine, or restaurants..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button className="btn btn-primary" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
