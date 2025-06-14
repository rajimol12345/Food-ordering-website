import React, { useState, useEffect } from 'react';


const mockOrders = [
  {
    id: 'ORD001',
    customerName: 'Alice',
    table: 3,
    items: ['Margherita Pizza', 'Cola'],
    status: 'Pending',
    timestamp: '2025-06-14T13:45:00Z',
  },
  {
    id: 'ORD002',
    customerName: 'Bob',
    table: 5,
    items: ['Veg Burger', 'Fries', 'Lemonade'],
    status: 'Preparing',
    timestamp: '2025-06-14T14:00:00Z',
  },
];

function OrdersDashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate API fetch
    setTimeout(() => {
      setOrders(mockOrders);
    }, 1000);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    const updated = orders.map(order =>
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updated);

    // Optionally, send PUT request to backend here
    // e.g., axios.put(`/api/orders/${id}`, { status: newStatus })
  };

  return (
    <div className="orders-dashboard">
      <h1>Orders Dashboard</h1>
      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Table</th>
            <th>Items</th>
            <th>Status</th>
            <th>Time</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.table}</td>
              <td>{order.items.join(', ')}</td>
              <td>{order.status}</td>
              <td>{new Date(order.timestamp).toLocaleTimeString()}</td>
              <td>
                <select
                  value={order.status}
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                >
                  <option>Pending</option>
                  <option>Preparing</option>
                  <option>Ready</option>
                  <option>Served</option>
                  <option>Cancelled</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersDashboard;
