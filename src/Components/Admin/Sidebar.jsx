import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Admin/Admin.css';
const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <span className="sidebar-logo">Admin</span>
        <button className="toggle-btn" onClick={toggleSidebar}>
          ☰
        </button>
      </div>

      <ul className="nav-links">
        <li>
          <Link to="/admin/dashboard">
            <i className="material-icons">dashboard</i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/restaurants">
            <i className="material-icons">restaurant</i>
            <span>Restaurants</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/orders">
            <i className="material-icons">receipt</i>
            <span>Orders</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/users">
            <i className="material-icons">group</i>
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link to="/admin/promotions">
            <i className="material-icons">local_offer</i>
            <span>Promotions</span>
          </Link>
        </li>
      </ul>

      <div className="nav-links logout">
        <Link to="/logout">
          <i className="material-icons">logout</i>
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
