import React, { useEffect, useState } from 'react';

const Analytics = () => {
  const [orders, setOrders] = useState([]);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalOrders, setTotalOrders] = useState(0);
  const [topItems, setTopItems] = useState([]);
  const [topCustomers, setTopCustomers] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(storedOrders);

    const revenue = storedOrders.reduce((sum, order) => sum + (order.total || 0), 0);
    setTotalRevenue(revenue);
    setTotalOrders(storedOrders.length);

    const itemCount = {};
    const customerCount = {};

    storedOrders.forEach(order => {
      if (Array.isArray(order?.items)) {
        order.items.forEach(item => {
          if (!itemCount[item.name]) itemCount[item.name] = 0;
          itemCount[item.name] += 1;
        });
      }

      const customerName = order.customer?.name || 'Unknown';
      if (!customerCount[customerName]) customerCount[customerName] = 0;
      customerCount[customerName] += 1;
    });

    const sortedItems = Object.entries(itemCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);

    const sortedCustomers = Object.entries(customerCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);

    setTopItems(sortedItems);
    setTopCustomers(sortedCustomers);
  }, []);

  return (
    <div className="container my-5">
      <h2 className="mb-4">
        <i className="fas fa-chart-line me-2 text-primary"></i>Analytics Dashboard
      </h2>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card p-4 shadow-sm">
            <h5><i className="fas fa-receipt text-success me-2"></i>Total Orders</h5>
            <h3>{totalOrders}</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 shadow-sm">
            <h5><i className="fas fa-rupee-sign text-warning me-2"></i>Total Revenue</h5>
            <h3>₹{totalRevenue}</h3>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card p-4 shadow-sm">
            <h5><i className="fas fa-star text-danger me-2"></i>Top Items</h5>
            <ul className="list-unstyled mb-0">
              {topItems.map(([name, count], index) => (
                <li key={index}>{name} ({count} orders)</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="col-md-6 mt-4">
          <div className="card p-4 shadow-sm">
            <h5><i className="fas fa-user text-info me-2"></i>Top Customers</h5>
            <ul className="list-unstyled mb-0">
              {topCustomers.map(([name, count], index) => (
                <li key={index}>{name} ({count} orders)</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
