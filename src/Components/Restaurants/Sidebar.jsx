import React, { useState } from 'react';
import {
  FaHome,
  FaUtensils,
  FaListAlt,
  FaChartBar,
  FaTags,
  FaCog,
  FaSignOutAlt,
  FaBars
} from 'react-icons/fa';

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
        <li><FaHome /><span>{!isCollapsed && 'Dashboard'}</span></li>
        <li><FaListAlt /><span>{!isCollapsed && 'Orders'}</span></li>
        <li><FaUtensils /><span>{!isCollapsed && 'Menu'}</span></li>
        <li><FaTags /><span>{!isCollapsed && 'Promotions'}</span></li>
        <li><FaChartBar /><span>{!isCollapsed && 'Analytics'}</span></li>
        <li><FaCog /><span>{!isCollapsed && 'Settings'}</span></li>
        <li className="logout"><FaSignOutAlt /><span>{!isCollapsed && 'Logout'}</span></li>
      </ul>
    </div>
  );
};

export default Sidebar;
