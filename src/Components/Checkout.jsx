import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('UPI'); // default payment method
  const [error, setError] = useState('');

  const handleContinue = (e) => {
    e.preventDefault();

    if (!name.trim() || !address.trim()) {
      setError('Please fill in all the fields.');
      return;
    }

    if (!paymentMethod) {
      setError('Please select a payment method.');
      return;
    }

    // Navigate to payment page with form data including payment method
    navigate('/payment', {
      state: {
        customer: { name, address },
        paymentMethod,
        cartItems,
      },
    });
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center"> Checkout</h2>

      <form onSubmit={handleContinue}>
        {error && <div className="alert alert-danger">{error}</div>}

        <div className="mb-3">
          <label className="form-label fw-bold">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="form-label fw-bold">Delivery Address</label>
          <textarea
            className="form-control"
            rows="3"
            placeholder="Enter your full address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </div>

        {/* Payment Method Selection */}
        <div className="mb-4">
          <label className="form-label fw-bold">Payment Method</label>
          <select
            className="form-select"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="UPI">UPI</option>
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="Credit/Debit Card">Credit/Debit Card</option>
            <option value="Net Banking">Net Banking</option>
          </select>
        </div>

        <button type="submit" className="btn btn-success w-100">
          Continue
        </button>
      </form>
    </div>
  );
};

export default Checkout;
