import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const UserInfo = ({ user = { name: 'John Doe', email: 'john@example.com' } }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleLogout = () => {
    // Clear session/token or redirect to login
    console.log('User logged out');
  };

  return (
    <div className="user-info">
      <div className="user-icon" onClick={toggleDropdown}>
        <FaUserCircle size={28} />
        <span className="user-name">{user.name}</span>
      </div>

      {isOpen && (
        <ul className="user-dropdown">
          <li>Profile</li>
          <li>Settings</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      )}
    </div>
  );
};

export default UserInfo;
