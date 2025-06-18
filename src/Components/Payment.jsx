import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { customer, cartItems } = location.state || {};

  if (!customer || !cartItems) {
    return (
      <div className="container text-center py-5">
        <h4>
          <i className="fas fa-exclamation-triangle text-warning me-2"></i>
          Missing order information.
        </h4>
        <button onClick={() => navigate('/')} className="btn btn-outline-primary mt-3">
          <i className="fas fa-arrow-left me-2"></i>Back to Home
        </button>
      </div>
    );
  }

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePayment = () => {
    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];

    const newOrder = {
      id: Date.now(),
      customer,
      items: cartItems,
      total: totalPrice,
      date: new Date().toLocaleString(),
    };

    localStorage.setItem('orders', JSON.stringify([...existingOrders, newOrder]));

    alert('✅ Payment Successful!');
    navigate('/my-orders');
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">
        <i className="fas fa-credit-card text-primary me-2"></i>Payment
      </h2>

      <p><i className="fas fa-user me-2 text-secondary"></i><strong>Name:</strong> {customer.name}</p>
      <p><i className="fas fa-map-marker-alt me-2 text-secondary"></i><strong>Address:</strong> {customer.address}</p>
      <p><i className="fas fa-wallet me-2 text-secondary"></i><strong>Total Amount:</strong> ₹{totalPrice}</p>

      <div className="text-center mt-4">
        <button className="btn btn-success btn-lg" onClick={handlePayment}>
          <i className="fas fa-money-bill-wave me-2"></i>Pay ₹{totalPrice}
        </button>
      </div>
    </div>
  );
};

export default Payment;
