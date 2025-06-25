import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RestaurantDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
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

  const handleAddToWishlist = (item) => {
    const saved = JSON.parse(localStorage.getItem('savedItems')) || [];
    const exists = saved.some(savedItem => savedItem.id === item.id);
    if (!exists) {
      saved.push(item);
      localStorage.setItem('savedItems', JSON.stringify(saved));
      toast.success(`${item.name} added to your saved items!`);
    } else {
      toast.info(`${item.name} is already in your saved items.`);
    }
  };

  if (error) {
    return (
      <div className="p-5">
        <p className="text-danger">{error}</p>
        <Link to="/" className="btn btn-outline-secondary mt-3"><i className="fas fa-arrow-left me-2"></i>Back to Home</Link>
      </div>
    );
  }

  if (!restaurant) {
    return (
      <div className="text-center p-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="restaurant-detail-page" style={{ padding: '2rem' }}>
      <ToastContainer position="top-right" autoClose={2000} />
      <Link to="/Home" className="btn btn-primary">
        <i className="fas fa-arrow-left me-2"></i>Back to Home
      </Link>

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
        <p><strong><i className="fas fa-map-marker-alt me-2"></i>Address:</strong> {restaurant.address}</p>
        <p><strong><i className="fas fa-phone-alt me-2"></i>Phone:</strong> {restaurant.phone}</p>
        <p><strong><i className="fas fa-envelope me-2"></i>Email:</strong> {restaurant.email}</p>
        <p><strong><i className="fas fa-utensils me-2"></i>Cuisine:</strong> {restaurant.cuisine}</p>
        <p><strong><i className="fas fa-star me-2"></i>Rating:</strong> {restaurant.rating}</p>
        <p><strong><i className="fas fa-clock me-2"></i>Opening Hours:</strong> {restaurant.openingHours}</p>
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
          <h4 className="text-success mb-3"><i className="fas fa-gift me-2"></i>Current Offers</h4>
          <ul className="list-group list-group-flush">
            {restaurant.offers.map((offer, idx) => (
              <li key={idx} className="list-group-item"><i className="fas fa-check-circle text-success me-2"></i>{offer}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Menu */}
      {restaurant.menu?.length > 0 && (
        <div className="bg-light text-white py-5 px-3" style={{ marginTop: '3rem' }}>
          <h3 className="text-center mb-4"><i className="fas fa-book-open me-2"></i>Menu</h3>
          <div className="row g-4">
            {restaurant.menu.map((item, idx) => (
              <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id || idx}>
                <div className="card h-100 shadow-sm position-relative">

                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(e) => { e.target.src = '/fallback.jpg'; }}
                    className="card-img-top"
                    style={{ height: '180px', objectFit: 'cover' }}
                  />

                  <div className="card-body text-dark d-flex flex-column">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text text-muted small">{item.description}</p>
                    <p className="card-text fw-bold text-success">₹ {item.price}</p>

                    <div className="mt-auto d-flex flex-column gap-2">
                      <button
                        className="btn btn-success btn-sm w-100"
                        onClick={() => navigate('/cart', { state: { item } })}
                      >
                        <i className="fas fa-shopping-cart me-2"></i>Add to Cart
                      </button>
                      <button
                        className="btn btn-outline-danger btn-sm w-100"
                        onClick={() => handleAddToWishlist(item)}
                      >
                        <i className="fas fa-heart me-2"></i>Save to Wishlist
                      </button>
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
