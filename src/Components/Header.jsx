import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-dark" to="/Home">
          <i className="fas fa-utensils me-2"></i>EatYoWay
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
            <li className="nav-item">
              <Link className="nav-link" to="/Home">
                <i className="fas fa-home me-1"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cart">
                <i className="fas fa-shopping-cart me-1"></i>Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/SavedItems">
                <i className="fas fa-heart me-1"></i>Saved Items
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Order">
                <i className="fas fa-box me-1"></i>My Orders
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Accounts">
                <i className="fas fa-user me-1"></i>Account
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Logout">
                <i className="fas fa-sign-out-alt me-1"></i>Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
