import React from 'react';
import { Link } from 'react-router-dom'; // For internal navigation


const Logout = () => {
  return (
    <div className="logout-box">
      <h2>You have been logged out</h2>
      <p>Thank you for using EatYoWay. We hope to see you again soon!</p>
      <Link to="/LoginForm">Log in again</Link>
    </div>
  );
};

export default Logout;
