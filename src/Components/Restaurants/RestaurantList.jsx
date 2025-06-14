import React from 'react';

const restaurants = [
  {
    id: 1,
    name: "Pasta Palace",
    cuisine: "Italian",
    rating: 4.5,
    image: "https://source.unsplash.com/400x300/?pasta"
  },
  {
    id: 2,
    name: "Sushi Central",
    cuisine: "Japanese",
    rating: 4.8,
    image: "https://source.unsplash.com/400x300/?sushi"
  },
  {
    id: 3,
    name: "Curry House",
    cuisine: "Indian",
    rating: 4.6,
    image: "https://source.unsplash.com/400x300/?curry"
  },
  {
    id: 4,
    name: "Taco Town",
    cuisine: "Mexican",
    rating: 4.2,
    image: "https://source.unsplash.com/400x300/?taco"
  }
];

function RestaurantList() {
  return (
    <div className="restaurant-list">
      <h1>Top Restaurants</h1>
      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} />
            <h2>{restaurant.name}</h2>
            <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
            <p><strong>Rating:</strong> ⭐ {restaurant.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantList;
