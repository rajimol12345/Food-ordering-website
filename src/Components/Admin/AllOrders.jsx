import React, { useState, useEffect } from 'react';
import './Admin.css'; 

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  // Example fetch or dummy data
  useEffect(() => {
    // Simulate fetching from backend
    const sampleOrders = [
      {
        id: 1,
        customerName: 'Ravi Kumar',
        item: 'Paneer Butter Masala',
        price: 250,
        status: 'Pending',
      },
      {
        id: 2,
        customerName: 'Anjali Sharma',
        item: 'Margherita Pizza',
        price: 320,
        status: 'Delivered',
      },
    ];

    setOrders(sampleOrders);
  }, []);

  const handleStatusChange = (orderId) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: 'Delivered' } : order
    );
    setOrders(updatedOrders);
  };

  return (
    <div className="restaurant-form-container">
      <h3 className="mb-4">All Orders</h3>

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
            {orders.map((order, index) => (
              <tr key={order.id}>
                <td>{index + 1}</td>
                <td>{order.customerName}</td>
                <td>{order.item}</td>
                <td>{order.price}</td>
                <td>
                  <span className={`badge bg-${order.status === 'Delivered' ? 'success' : 'warning'}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  {order.status !== 'Delivered' && (
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={() => handleStatusChange(order.id)}
                    >
                      Mark as Delivered
                    </button>
                  )}
                </td>
              </tr>
            ))}
            {orders.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center">No orders found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrders;
