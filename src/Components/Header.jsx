import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { 
  FaUtensils,
  FaHome,
  FaShoppingCart,
  FaHeart,
  FaBox,
  FaUser,
  FaSignOutAlt
} from 'react-icons/fa';

const Header = () => {
  // Define your nav items in an array for cleaner rendering
  const navItems = [
    { Icon: FaHome, to: '/Home', label: 'Home' },
    { Icon: FaShoppingCart, to: '/Cart', label: 'Cart' },
    { Icon: FaHeart, to: '/SavedItems', label: 'Saved Items' },
    { Icon: FaBox, to: '/Order', label: 'My Orders' },
    { Icon: FaUser, to: '/Accounts', label: 'Account' },
    { Icon: FaSignOutAlt, to: '/Logout', label: 'Logout' },
  ];

  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-dark" to="/Home">
          <FaUtensils className="me-2" /> EatYoWay
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            {navItems.map(({ Icon, to, label }) => (
              <li className="nav-item" key={to}>
                <Link className="nav-link" to={to}>
                  <Icon className="me-1" /> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
