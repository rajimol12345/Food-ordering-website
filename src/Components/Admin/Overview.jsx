
import React from 'react';

const Overview = () => {
  return (
    <div className="dashboard-main">
      <h1>Overview</h1>

      <div className="dashboard-cards">
        <div className="card">
          <h3>Users</h3>
          <div className="value">4,320</div>
          <div className="sub-value">+5.2% this month</div>
        </div>

        <div className="card">
          <h3>Restaurants</h3>
          <div className="value">112</div>
          <div className="sub-value">+3 added</div>
        </div>

        <div className="card">
          <h3>Orders</h3>
          <div className="value">9,876</div>
          <div className="sub-value">+8.7% this month</div>
        </div>

        <div className="card">
          <h3>Revenue</h3>
          <div className="value">₹8,92,000</div>
          <div className="sub-value">+10.4% from last month</div>
        </div>
      </div>

      <div className="dashboard-section">
        <h3>Recent Activity</h3>
        <ul>
          <li>User Ramesh placed an order worth ₹1,200</li>
          <li>New restaurant "Spice Club" registered</li>
          <li>User Priya wrote a review for "Curry Point"</li>
          <li>5 new users signed up</li>
        </ul>
      </div>
    </div>
  );
};

export default Overview;
