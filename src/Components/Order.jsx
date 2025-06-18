import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MyOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);
  }, []);

  if (orders.length === 0) {
    return (
      <div className="p-5 text-center">
        <h4><i className="fas fa-clock text-warning me-2"></i>No orders placed yet</h4>
        <Link to="/" className="btn btn-outline-primary mt-3">
          <i className="fas fa-arrow-left me-2"></i>Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4"><i className="fas fa-box-open text-primary me-2"></i>My Orders</h2>

      {orders.map((item, index) => (
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
              <p className="text-muted small mb-0">
                <i className="fas fa-calendar-alt me-2"></i>
                Ordered on: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrder;
