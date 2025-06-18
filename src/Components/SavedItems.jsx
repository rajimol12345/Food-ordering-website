import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SavedItems = () => {
  const [savedItems, setSavedItems] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('savedItems')) || [];
    setSavedItems(items);
  }, []);

  const handleRemove = (index) => {
    const updated = [...savedItems];
    const removedItem = updated.splice(index, 1)[0];
    setSavedItems(updated);
    localStorage.setItem('savedItems', JSON.stringify(updated));
    toast.info(`${removedItem.name} removed from saved items.`);
  };

  if (savedItems.length === 0) {
    return (
      <div className="p-5 text-center">
        <h4>
          <i className="fas fa-heart-broken text-danger me-2"></i>
          Your saved items list is empty
        </h4>
        <Link to="/Home" className="btn btn-outline-primary mt-3">
          <i className="fas fa-arrow-left me-2"></i>Back to Home
        </Link>
        <ToastContainer position="top-center" autoClose={2000} />
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
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={item.image}
                className="img-fluid rounded-start"
                alt={item.name}
                style={{ height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-8 d-flex flex-column justify-content-center p-3">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text text-muted">{item.description}</p>
              <h6 className="text-success fw-bold mb-3">₹ {item.price}</h6>

              <button
                className="btn btn-outline-danger"
                onClick={() => handleRemove(index)}
              >
                <i className="fas fa-trash-alt me-2"></i>Remove
              </button>
            </div>
          </div>
        </div>
      ))}

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default SavedItems;
