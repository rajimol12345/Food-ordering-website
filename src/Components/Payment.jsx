import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { customer, cartItems } = location.state || {};

  if (!customer || !cartItems) {
    return (
      <div className="container text-center py-5">
        <h4>Missing order information.</h4>
        <button onClick={() => navigate('/')} className="btn btn-outline-primary mt-3">
          ← Back to Home
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
      <h2 className="mb-4">🧾 Payment</h2>
      <p><strong>Name:</strong> {customer.name}</p>
      <p><strong>Address:</strong> {customer.address}</p>
      <p><strong>Total Amount:</strong> ₹{totalPrice}</p>

      <div className="text-center mt-4">
        <button className="btn btn-primary btn-lg" onClick={handlePayment}>
          💳 Pay ₹{totalPrice}
        </button>
      </div>
    </div>
  );
};

export default Payment;
