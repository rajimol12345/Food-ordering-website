import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Accounts() {
  const navigate = useNavigate();

  // User state — normally you'd fetch this from API or global state
  const [user] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '123-456-7890',
    address: '123 Main St, New York, NY',
    profileImage: 'https://via.placeholder.com/100',
  });

  return (
    <div className="account-container">
      <h2>My Account</h2>
      <div className="profile-header">
        <img src={user.profileImage} alt="Profile" className="profile-image" />
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Address:</strong> {user.address}</p>
        </div>
      </div>

      <button onClick={() => navigate('/EditProfile')} className="edit-profile-button">
        Edit Profile
      </button>
    </div>
  );
}

export default Accounts;
