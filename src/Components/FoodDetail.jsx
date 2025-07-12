import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const FoodDetail = () => {
  const { state } = useLocation();
  const item = state?.item;

  if (!item) {
    return (
      <div className="p-4">
        <p className="text-danger">Food item not found.</p>
        <Link to="/" className="btn btn-secondary">← Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="container py-4">
      <Link to="/" className="btn btn-outline-primary mb-3">← Back to Home</Link>
      <div className="card shadow">
        <img
          src={item.image}
          alt={item.name}
          className="card-img-top"
          style={{ height: '350px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h3>{item.name}</h3>
          <p className="text-muted">{item.description}</p>
          <p className="fw-bold text-success">₹{item.price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodDetail;
