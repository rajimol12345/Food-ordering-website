// AdminDashboard.jsx
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';
import './Admin.css';

const data = [
  { name: 'Mon', orders: 120 },
  { name: 'Tue', orders: 200 },
  { name: 'Wed', orders: 150 },
  { name: 'Thu', orders: 278 },
  { name: 'Fri', orders: 189 },
  { name: 'Sat', orders: 239 },
  { name: 'Sun', orders: 349 }
];

const AdminDashboard = () => {
  return (
    <div className="dashboard-main">
      <h1>Welcome to Admin Dashboard</h1>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Total Orders</h3>
          <div className="value">1,245</div>
          <div className="sub-value">+12% this week</div>
        </div>
        <div className="card">
          <h3>Total Revenue</h3>
          <div className="value">₹2,75,000</div>
          <div className="sub-value">+8.5% this month</div>
        </div>
        <div className="card">
          <h3>Active Users</h3>
          <div className="value">3,476</div>
          <div className="sub-value">+5.1% users growth</div>
        </div>
        <div className="card">
          <h3>New Restaurants</h3>
          <div className="value">15</div>
          <div className="sub-value">Added this week</div>
        </div>
      </div>

      <div className="dashboard-chart">
        <h3>Order Trends This Week</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="orders" stroke="#ff6600" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="dashboard-section">
        <h3>Recent Orders</h3>
        <ul>
          <li>#1234 – 2x Pizza, ₹499 – Delivered</li>
          <li>#1235 – 1x Burger, ₹199 – In Progress</li>
          <li>#1236 – 3x Biryani, ₹849 – Delivered</li>
          <li>#1237 – 1x Salad, ₹129 – Cancelled</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
