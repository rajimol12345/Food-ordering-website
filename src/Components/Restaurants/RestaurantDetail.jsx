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

  if (error) {
    return (
      <div className="p-5">
        <p className="text-danger">{error}</p>
        <Link to="/" className="btn btn-outline-secondary mt-3">← Back to Home</Link>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="restaurant-detail-page" style={{ padding: '2rem' }}>
      <Link to="/" className="btn btn-outline-secondary mb-4">← Back to Home</Link>

      {/* Banner */}
      <img
        src={restaurant.image}
        alt={`Banner of ${restaurant.name}`}
        className="img-fluid w-100 rounded mb-4 shadow"
        style={{ maxHeight: '500px', objectFit: 'cover' }}
      />


      {/* Info */}
      <div className="card mb-4 p-4 shadow-sm">
        <h2 className="fw-bold mb-3">{restaurant.name}</h2>
        <p><strong>📍 Address:</strong> {restaurant.address}</p>
        <p><strong>📞 Phone:</strong> {restaurant.phone}</p>
        <p><strong>📧 Email:</strong> {restaurant.email}</p>
        <p><strong>🍽️ Cuisine:</strong> {restaurant.cuisine}</p>
        <p><strong>⭐ Rating:</strong> {restaurant.rating}</p>
        <p><strong>⏰ Opening Hours:</strong> {restaurant.openingHours}</p>
      </div>

      {/* History */}
      {restaurant.history && (
        <div className="card mb-4 p-4 bg-light shadow-sm">
          <h4 className="mb-2">About {restaurant.name}</h4>
          <p className="text-muted">{restaurant.history}</p>
        </div>
      )}

      {/* Offers */}
      {restaurant.offers?.length > 0 && (
        <div className="card mb-4 p-4 border-success shadow-sm">
          <h4 className="text-success mb-3">🎉 Current Offers</h4>
          <ul className="list-group list-group-flush">
            {restaurant.offers.map((offer, idx) => (
              <li key={idx} className="list-group-item">✅ {offer}</li>
            ))}
          </ul>
        </div>
      )}

      {restaurant.menu?.length > 0 && (
  <div className="bg-dark text-white py-5 px-3" style={{ marginTop: '3rem' }}>
    <h3 className="text-center mb-4">📜 Menu</h3>
    <div className="row g-4">
      {restaurant.menu.map((item, idx) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
          <div className="card h-100 shadow-sm position-relative">
            
            {/* Wishlist Heart Button */}
            <button
              className="btn btn-light position-absolute top-0 end-0 m-2"
              title="Add to Wishlist"
              style={{ zIndex: 1 }}
            >
              ❤️
            </button>

            {/* Food Image */}
            <img
              src={item.image}
              alt={item.name}
              className="card-img-top"
              style={{ height: '180px', objectFit: 'cover' }}
            />

            {/* Card Body */}
            <div className="card-body text-dark d-flex flex-column">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text text-muted small">{item.description}</p>
              <p className="card-text fw-bold text-success">₹ {item.price}</p>

              {/* Buttons */}
              <div className="mt-auto d-flex flex-column gap-2">
                <button className="btn btn-success btn-sm w-100">🛒 Add to Cart</button>
                <button className="btn btn-primary btn-sm w-100">💳 Buy Now</button>
              </div>
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
