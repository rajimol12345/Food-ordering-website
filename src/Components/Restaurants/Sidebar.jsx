import React, { useState } from 'react';
import {
  FaHome,
  FaUtensils,
  FaListAlt,
  FaChartBar,
  FaTags,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaUserCircle
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom'; 

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-logo">{isCollapsed ? 'E' : 'EatYoWay'}</h2>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/Dashboard" className="nav-link">
            <FaHome />
            <span>{!isCollapsed && 'Dashboard'}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/DashboardOverview/Userinfo" className="nav-link">
            <FaUserCircle />
            <span>{!isCollapsed && 'User Info'}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/DashboardOverview/orders" className="nav-link">
            <FaListAlt />
            <span>{!isCollapsed && 'Orders'}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/DashboardOverview/menu" className="nav-link">
            <FaUtensils />
            <span>{!isCollapsed && 'Menu'}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/DashboardOverview/Promotions" className="nav-link">
            <FaTags />
            <span>{!isCollapsed && 'Promotions'}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/DashboardOverview/analytics" className="nav-link">
            <FaChartBar />
            <span>{!isCollapsed && 'Analytics'}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/DashboardOverview/settings" className="nav-link">
            <FaCog />
            <span>{!isCollapsed && 'Settings'}</span>
          </NavLink>
        </li>
        <li className="logout">
          <NavLink to="/Logout" className="nav-link">
            <FaSignOutAlt />
            <span>{!isCollapsed && 'Logout'}</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
