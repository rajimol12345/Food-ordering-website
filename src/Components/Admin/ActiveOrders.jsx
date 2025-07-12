import React, { useEffect, useState } from 'react';
import './Admin.css'; // Optional styling

const ActiveOrders = () => {
  const [orders, setOrders] = useState([]);

  // Fetch or dummy data
  useEffect(() => {
    const sampleOrders = [
      { id: 1, customer: 'Amit Jain', item: 'Veg Biryani', price: 180, status: 'Pending' },
      { id: 2, customer: 'Priya Singh', item: 'Chicken Curry', price: 280, status: 'Preparing' },
      { id: 3, customer: 'Vikram Mehra', item: 'Pasta Alfredo', price: 220, status: 'Delivered' },
    ];

    setOrders(sampleOrders);
  }, []);

  const markAsDelivered = (id) => {
    const updated = orders.map((order) =>
      order.id === id ? { ...order, status: 'Delivered' } : order
    );
    setOrders(updated);
  };

  const activeOrders = orders.filter((order) => order.status !== 'Delivered');

  return (
    <div className="restaurant-form-container">
      <h3 className="mb-4">Active Orders</h3>

      <div className="table-responsive bg-white p-3 rounded shadow-sm">
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Customer</th>
              <th>Item</th>
              <th>Price (₹)</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {activeOrders.length > 0 ? (
              activeOrders.map((order, index) => (
                <tr key={order.id}>
                  <td>{index + 1}</td>
                  <td>{order.customer}</td>
                  <td>{order.item}</td>
                  <td>{order.price}</td>
                  <td>
                    <span className="badge bg-warning">{order.status}</span>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={() => markAsDelivered(order.id)}
                    >
                      Mark as Delivered
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center">No active orders</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveOrders;
