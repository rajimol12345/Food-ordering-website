import React from 'react';
import { Link } from 'react-router-dom';
import bgImage from './img/top-view-circular-food-frame.jpg'; 
const heroStyle = {
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
  width:'100%',
  backgroundPosition: 'center',
  color: 'black',
  textAlign: 'center',
  padding: '200px 20px',
  fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
};

const h1Style = {
  fontSize: '4rem',
  margin: 0,
  fontWeight: 700,
  textShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
  textAlign: 'center',
};

const h2Style = {
  fontSize: '1.8rem',
  fontWeight: 400,
  marginTop: '20px',
  color: 'black',
  textShadow: '1px 1px 3px rgba(0, 0, 0, 0.2)',
};

const Index = () => {
  return (
    <div>
      <div className="header">
        <div className="logo">EatToWay</div>
        <div className="nav-buttons">
          <Link to="/Homepage" className="nav-item">Add Restaurant</Link>
          <Link to="/RegisterForm" className="nav-item">Signup</Link>
          <Link to="/LoginForm" className="nav-item">Login</Link>
        </div>
      </div>

      <div className="hero" style={heroStyle}>
        <h1 style={h1Style}>EatToWay</h1>
        <div>
          <h2 style={h2Style}>Discover Top Restaurants, Cafés & Bars Across India</h2>
        </div>
      </div>
    </div>
  );
};

export default Index;
