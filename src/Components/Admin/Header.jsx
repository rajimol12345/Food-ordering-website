import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
  return (
    <header className="admin-header">
      <div className="header-left">
        <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h3>Dashboard</h3>
      </div>

      <div className="header-right">
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <i className="material-symbols-outlined">search</i>
        </div>

        <div className="header-icons">
          <i className="material-symbols-outlined">notifications</i>
          <i className="material-symbols-outlined">settings</i>
          <Link to="/admin/profile" className="admin-avatar">
            <img src="/images/profile-img.jpg" alt="Admin" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
