import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/data.json') // Make sure this file includes restaurants and products
      .then(response => {
        const { restaurants = [], products = [] } = response.data;
        setRestaurants(restaurants);
        setProducts(products);
        if (restaurants.length > 0) setSelectedRestaurantId(restaurants[0].id); // Default selection
      })
      .catch(error => {
        console.error('Error loading data:', error);
      });
  }, []);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const goToCart = () => {
    navigate('/Cart', { state: { cart } });
  };

  const filteredProducts = products.filter(p => p.restaurantId === selectedRestaurantId);

  const selectedRestaurant = restaurants.find(r => r.id === selectedRestaurantId);

  return (
    <div className="container my-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="fw-bold">Restaurant Menu</h2>
        <div onClick={goToCart} style={{ cursor: 'pointer' }}>
          <FaShoppingCart size={24} /> Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </div>
      </div>

      <div className="row">
        {/* Sidebar: Restaurant List */}
        <div className="col-md-3 mb-4">
          <h5 className="fw-bold">Restaurants</h5>
          <ul className="list-group">
            {restaurants.map(restaurant => (
              <li
                key={restaurant.id}
                className={`list-group-item ${selectedRestaurantId === restaurant.id ? 'active' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={() => setSelectedRestaurantId(restaurant.id)}
              >
                {restaurant.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Product Menu Cards */}
        <div className="col-md-9">
          <h4 className="mb-3">
            {selectedRestaurant ? `Menu - ${selectedRestaurant.name}` : 'Select a restaurant'}
          </h4>

          {filteredProducts.length > 0 ? (
            <div className="row g-4">
              {filteredProducts.map(product => (
                <div key={product.id} className="col-sm-6 col-md-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="card-img-top"
                      style={{ height: '180px', objectFit: 'cover' }}
                      onError={e => (e.target.src = 'https://via.placeholder.com/200x140?text=No+Image')}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text text-muted">{product.description}</p>
                      <div className="fw-bold mb-2">₹ {product.price.toFixed(2)}</div>
                      <button className="btn btn-sm btn-primary" onClick={() => addToCart(product)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p>No menu items found for this restaurant.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
