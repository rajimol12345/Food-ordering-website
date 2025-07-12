// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Sidebar = ({ isOpen }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <img src="/images/logo.png" alt="logo" />
        {isOpen && <h2>Dashboard</h2>}
      </div>

      <ul className="sidebar-links">
        <h4><span>Menu</span><div className="menu-separator"></div></h4>
        <li>
          <Link to="/admin/dashboard" data-tooltip="Dashboard">
            <span className="material-symbols-outlined large-icon">dashboard</span>
            {isOpen && 'Dashboard'}
          </Link>
        </li>
        <li>
          <Link to="/admin/overview" data-tooltip="Overview">
            <span className="material-symbols-outlined large-icon">view_compact_alt</span>
            {isOpen && 'Overview'}
          </Link>
        </li>
        <li>
          <Link to="/admin/analytics" data-tooltip="Analytics">
            <span className="material-symbols-outlined large-icon">monitoring</span>
            {isOpen && 'Analytics'}
          </Link>
        </li>

        <h4><span>Restaurants</span><div className="menu-separator"></div></h4>
        <li>
          <Link to="/admin/addrestaurant" data-tooltip="Add Restaurants">
            <span className="material-symbols-outlined large-icon">restaurant</span>
            {isOpen && 'Add Restaurants'}
          </Link>
        </li>
        <li>
          <Link to="/admin/addmenu" data-tooltip="Add Menu">
            <span className="material-symbols-outlined large-icon">add_business</span>
            {isOpen && 'Add Menu'}
          </Link>
        </li>

        <h4><span>Orders</span><div className="menu-separator"></div></h4>
        <li>
          <Link to="/admin/allorders" data-tooltip="All Orders">
            <span className="material-symbols-outlined large-icon">receipt_long</span>
            {isOpen && 'All Orders'}
          </Link>
        </li>
        <li>
          <Link to="/admin/activeorders" data-tooltip="Active Orders">
            <span className="material-symbols-outlined large-icon">local_shipping</span>
            {isOpen && 'Active Orders'}
          </Link>
        </li>

        <h4><span>Settings</span><div className="menu-separator"></div></h4>
        <li>
          <Link to="/admin/settings" data-tooltip="Settings">
            <span className="material-symbols-outlined large-icon">settings</span>
            {isOpen && 'Settings'}
          </Link>
        </li>

        <h4><span>Account</span><div className="menu-separator"></div></h4>
        <li>
          <Link to="/admin/adminprofile" data-tooltip="Profile">
            <span className="material-symbols-outlined large-icon">account_circle</span>
            {isOpen && 'Profile'}
          </Link>
        </li>
        <li>
          <Link to="/admin/adminlogout" data-tooltip="Logout">
            <span className="material-symbols-outlined large-icon">logout</span>
            {isOpen && 'Logout'}
          </Link>
        </li>
      </ul>

      <div className="user-account">
        <div className="user-profile">
          <img src="/images/profile-img.jpg" alt="Profile" />
          {isOpen && (
            <div className="user-detail">
              <h3>Admin Name</h3>
              <span>Web Developer</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;