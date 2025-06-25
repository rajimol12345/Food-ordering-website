import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBox, FaUtensils, FaFolder, FaUsers, FaSignOutAlt } from 'react-icons/fa';
import '../Admin/Admin.css';

const AdminDashboard = () => {
  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <h2 className="admin-logo">EatToWay Admin</h2>
        <nav>
          <ul>
            <li>
              <Link to="/admin/orders">
                <FaBox className="icon" /> Orders
              </Link>
            </li>
            <li>
              <Link to="/admin/menu">
                <FaUtensils className="icon" /> Menu
              </Link>
            </li>
            <li>
              <Link to="/admin/categories">
                <FaFolder className="icon" /> Categories
              </Link>
            </li>
            <li>
              <Link to="/admin/users">
                <FaUsers className="icon" /> Users
              </Link>
            </li>
            <li>
              <Link to="/admin/login">
                <FaSignOutAlt className="icon" /> Logout
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main content area */}
      <main className="admin-content">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminDashboard;
