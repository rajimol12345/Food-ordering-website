import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  BarChart, Bar, PieChart, Pie, Cell, Legend
} from 'recharts';


const DashboardOverview = () => {
  // Sample data
  const orderTrends = [
    { day: 'Mon', orders: 40 },
    { day: 'Tue', orders: 55 },
    { day: 'Wed', orders: 32 },
    { day: 'Thu', orders: 76 },
    { day: 'Fri', orders: 89 },
    { day: 'Sat', orders: 120 },
    { day: 'Sun', orders: 98 },
  ];

  const popularItems = [
    { name: 'Pizza', sales: 200 },
    { name: 'Biryani', sales: 150 },
    { name: 'Burger', sales: 100 },
    { name: 'Wings', sales: 80 }
  ];

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042'];

  return (
    <div className="dashboard-container">
      <h1>Restaurant Dashboard</h1>
      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h2>Today's Orders</h2>
          <p>58 Orders</p>
        </div>

        <div className="dashboard-card">
          <h2>Earnings Summary</h2>
          <p>$1,240.75</p>
        </div>

        <div className="dashboard-card">
          <h2>Order Status</h2>
          <p>Pending: 12</p>
          <p>Completed: 46</p>
        </div>

        <div className="dashboard-card wide">
          <h2>Order Trends (This Week)</h2>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={orderTrends}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="orders" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="dashboard-card wide">
          <h2>Popular Items</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={popularItems}
                dataKey="sales"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {popularItems.map((item, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>
    </div>
  );
};

export default DashboardOverview;
