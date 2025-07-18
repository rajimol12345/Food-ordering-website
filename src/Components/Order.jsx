import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orders = location.state?.orders || [];

  if (!orders.length) {
    return (
      <div className="p-5 text-center">
        <h4><i className="fas fa-clock text-warning me-2"></i>No orders found</h4>
        <Link to="/" className="btn btn-outline-primary mt-3">
          <i className="fas fa-arrow-left me-2"></i>Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h2 className="mb-4"><i className="fas fa-box-open text-primary me-2"></i>My Orders</h2>

      {orders.map((order, orderIndex) => (
        <div key={orderIndex} className="mb-5">
          <div className="mb-3">
            <h5>
              <i className="fas fa-user me-2 text-secondary"></i>
              {order.customer?.name || 'Unknown'} <span className="text-muted">({order.customer?.address})</span>
            </h5>
            <p className="text-muted">
              <i className="fas fa-calendar-alt me-2"></i>
              Ordered on: {order.date || 'Unknown'}
            </p>
          </div>

          {order.items?.map((item, idx) => (
            <div key={idx} className="card mb-3 shadow-sm">
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
                  <p className="card-text text-muted">{item.description}</p>
                  <h6 className="text-success fw-bold">₹ {item.price}</h6>
                </div>
              </div>
            </div>
          ))}

          <div className="text-end">
            <h5 className="fw-bold text-primary">Total: ₹ {order.total}</h5>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Order;
