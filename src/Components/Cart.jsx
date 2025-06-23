import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState(
    location.state?.item
      ? [{ ...location.state.item, quantity: 1 }]
      : []
  );

  const handleRemove = (index) => {
    const updated = [...cartItems];
    updated.splice(index, 1);
    setCartItems(updated);
  };

  const handleQuantityChange = (index, delta) => {
    const updated = [...cartItems];
    const currentQty = updated[index].quantity;

    if (currentQty === 1 && delta === -1) return;

    updated[index].quantity += delta;
    setCartItems(updated);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    navigate('/checkout', { state: { cartItems } });
  };

  if (cartItems.length === 0) {
    return (
      <div className="p-5 text-center">
        <h4>
          <i className="fas fa-shopping-cart text-muted me-2"></i>Your cart is empty
        </h4>
        <Link to="/Home" className="btn btn-outline-primary mt-3">
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
        <div key={index} className="card mb-4 shadow-sm">
          <div className="row g-0 align-items-center">
            {/* Product Image */}
            <div className="col-sm-3 p-3">
              <img
              src={item.image}
              alt={item.name}
              className="img-fluid rounded"
              style={{ height: '150px', width: '200%', objectFit: 'cover' }}
              />
            </div>

            {/* Product Details */}
            <div className="col-sm-6 p-3">
              <h5 className="mb-1">{item.name}</h5>
              <p className="text-muted small mb-2">{item.description}</p>
              <h6 className="text-success fw-bold mb-0">₹ {item.price}</h6>
              <p className="text-muted small mt-1">
                Subtotal: ₹ {item.price * item.quantity}
              </p>
            </div>

            {/* Quantity & Remove */}
            <div className="col-sm-3 d-flex flex-column align-items-end justify-content-center p-3">
              <div className="d-flex align-items-center mb-3">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => handleQuantityChange(index, -1)}
                >
                  −
                </button>
                <span className="mx-2 fw-bold">{item.quantity}</span>
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => handleQuantityChange(index, 1)}
                >
                  +
                </button>
              </div>

              <button
                className="btn btn-sm btn-outline-danger"
                onClick={() => handleRemove(index)}
              >
                <i className="fas fa-trash-alt me-1"></i>Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Total & Checkout */}
      <div className="text-end mt-4">
        <h5 className="mb-3 fw-bold">
          Total: ₹{' '}
          {cartItems.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          )}
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
