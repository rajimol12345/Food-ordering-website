import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SavedItems = () => {
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('savedItems')) || [];
    setSavedItems(items);
  }, []);

  const handleRemove = (index) => {
    const updated = [...savedItems];
    updated.splice(index, 1);
    setSavedItems(updated);
    localStorage.setItem('savedItems', JSON.stringify(updated));
  };

  if (savedItems.length === 0) {
    return (
      <div className="p-5 text-center">
        <h4>
          <i className="fas fa-heart text-muted me-2"></i>Your saved items list is empty
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
        <i className="fas fa-heart text-danger me-2"></i>Saved Items
      </h2>

      {savedItems.map((item, index) => (
        <div key={index} className="card mb-3 shadow">
          <div className="row g-0 align-items-center">
            <div className="col-md-4 p-3">
              <img
                src={item.image}
                className="img-fluid rounded w-100"
                alt={item.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-8 p-3 d-flex flex-column justify-content-center">
              <h5 className="card-title mb-2">{item.name}</h5>
              <p className="card-text text-muted small mb-2">{item.description}</p>
              <h6 className="text-success fw-bold mb-3">₹ {item.price}</h6>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => handleRemove(index)}
              >
                <i className="fas fa-trash-alt me-1"></i>Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedItems;
