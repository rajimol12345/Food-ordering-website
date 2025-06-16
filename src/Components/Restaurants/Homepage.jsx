import React from 'react';


const Homepage = () => {
  return (
    <div className="homepage">
      <h1>Search Restaurants</h1>

      <div className="search-box">
        <select className="search-type">
          <option value="all">All</option>
          <option value="location">Location</option>
          <option value="cuisine">Cuisine</option>
          <option value="dish">Dish</option>
          <option value="restaurant">Restaurant Name</option>
        </select>

        <input
          type="text"
          placeholder="Search for food, cuisine, or restaurants..."
          className="search-input"
        />

        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default Homepage;
