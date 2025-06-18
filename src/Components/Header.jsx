import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link,useLocation } from 'react-router-dom';

const Header = () => {

  return (

    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">EatYoWay</Link>
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
              <Link className="nav-link" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Cart">Cart</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/SavedItems">Save Items</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Order">My Orders</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
