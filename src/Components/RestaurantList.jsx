import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // Load data from local JSON or API
    axios.get('/history.json')
      .then(response => setRestaurants(response.data))
      .catch(() => console.error('Failed to fetch restaurants.'));
  }, []);

  return (
    <div className="container py-5">
      <h1 className="mb-4"><i className="fas fa-utensils me-2"></i>Top Restaurants</h1>

      <div className="row g-4">
        {restaurants.map((restaurant) => (
          <div key={restaurant.id} className="col-md-4">
            <Link to={`/restaurant/${restaurant.id}`} className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{restaurant.name}</h5>
                  <p className="card-text">
                    <i className="fas fa-utensil-spoon me-2 text-secondary"></i>
                    <strong>Cuisine:</strong> {restaurant.cuisine}
                  </p>
                  <p className="card-text">
                    <i className="fas fa-star text-warning me-2"></i>
                    <strong>Rating:</strong> {restaurant.rating}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantList;
