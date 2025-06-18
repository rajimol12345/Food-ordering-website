import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(
    location.state?.item ? [location.state.item] : []
  );

  const handleRemove = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    navigate('/checkout', { state: { cartItems } });
  };

  if (cartItems.length === 0) {
    return (
      <div className="p-5 text-center">
        <h4><i className="fas fa-shopping-cart text-muted me-2"></i>Your cart is empty</h4>
        <Link to="/" className="btn btn-outline-primary mt-3">
          <i className="fas fa-arrow-left me-2"></i>Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4">
        <i className="fas fa-shopping-cart text-primary me-2"></i>Your Cart
      </h2>

      {cartItems.map((item, index) => (
        <div key={index} className="card mb-3 shadow-sm">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={item.image}
                alt={item.name}
                className="img-fluid rounded-start"
                style={{ height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-center p-3">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text text-muted small">{item.description}</p>
              <h6 className="text-success fw-bold">₹ {item.price}</h6>

              <div className="mt-3">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => handleRemove(index)}
                >
                  <i className="fas fa-trash-alt me-2"></i>Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Total & Checkout */}
      <div className="text-end mt-4">
        <h5 className="mb-3 fw-bold">
          Total: ₹ {cartItems.reduce((acc, item) => acc + item.price, 0)}
        </h5>
        <button
          className="btn btn-primary btn-lg"
          onClick={handleCheckout}
        >
          <i className="fas fa-credit-card me-2"></i>Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
