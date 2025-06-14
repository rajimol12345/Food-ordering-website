import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const RestaurantDetail = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('/history.json')
      .then(response => {
        const found = response.data.find(r => r.id.toString() === id);
        if (found) {
          setRestaurant(found);
        } else {
          setError('Restaurant not found');
        }
      })
      .catch(() => setError('Failed to load restaurant data.'));
  }, [id]);

  if (error) return <div className="container my-5"><p className="text-danger">{error}</p></div>;
  if (!restaurant) return <div className="container my-5"><p>Loading...</p></div>;

  return (
    <div className="container my-5 restaurant-detail">
      <Link to="/" className="btn btn-outline-secondary mb-4">← Back to Home</Link>

      {/* Banner Image */}
      <img
        src={`https://source.unsplash.com/1200x400/?restaurant,food&sig=${restaurant.id}`}
        alt={restaurant.name}
        className="img-fluid rounded mb-4 shadow-sm"
      />

      {/* Restaurant Info */}
      <h2 className="fw-bold mb-3">{restaurant.name}</h2>
      <p><strong>Address:</strong> {restaurant.address}</p>
      <p><strong>Phone:</strong> {restaurant.phone}</p>
      <p><strong>Email:</strong> {restaurant.email}</p>
      <p><strong>Cuisine:</strong> {restaurant.cuisine}</p>
      <p><strong>Rating:</strong> ⭐ {restaurant.rating}</p>
      <p><strong>Opening Hours:</strong> {restaurant.openingHours}</p>

      {/* History Section */}
      {restaurant.history && (
        <div className="my-4">
          <h4 className="mb-2">About {restaurant.name}</h4>
          <p className="text-muted">{restaurant.history}</p>
        </div>
      )}

      {/* Offers Section */}
      {restaurant.offers && restaurant.offers.length > 0 && (
        <div className="mb-4">
          <h4 className="mb-2">Current Offers</h4>
          <ul className="list-group">
            {restaurant.offers.map((offer, index) => (
              <li key={index} className="list-group-item">✅ {offer}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Menu Section - in Cards */}
      {restaurant.menu && restaurant.menu.length > 0 && (
        <div className="mt-5">
          <h4 className="mb-3">Menu</h4>
          <div className="row g-4">
            {restaurant.menu.map((item, index) => (
              <div className="col-sm-6 col-md-4 col-lg-3" key={index}>
                <div className="card h-100 shadow-sm text-center">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text text-success fw-bold">₹ {item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RestaurantDetail;
