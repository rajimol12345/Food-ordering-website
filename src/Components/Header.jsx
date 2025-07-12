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
  const navItems = [
    { Icon: FaHome, to: '/Home', label: 'Home' },
    { Icon: FaShoppingCart, to: '/Cart', label: 'Cart' },
    {
      Icon: FaUser,
      label: 'Account',
      dropdown: [
        { to: '/Accounts', label: 'Profile' },
        { to: '/Order', label: 'My Orders' },
        { to: '/SavedItems', label: 'Saved Items' },
      ],
    },
    { Icon: FaSignOutAlt, to: '/Logout', label: 'Logout' },
  ];

  return (
    <nav className="navbar navbar-expand-lg shadow-sm ">
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
            {navItems.map(({ Icon, to, label, dropdown }) => (
              dropdown ? (
                <li className="nav-item dropdown" key={label}>
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Icon className="me-1" /> {label}
                  </span>
                  <ul className="dropdown-menu">
                    {dropdown.map(({ to, label }) => (
                      <li key={to}>
                        <Link className="dropdown-item" to={to}>
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item" key={to}>
                  <Link className="nav-link" to={to}>
                    <Icon className="me-1" /> {label}
                  </Link>
                </li>
              )
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
