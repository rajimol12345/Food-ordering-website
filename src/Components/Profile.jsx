import React from 'react';
const Profile = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 234 567 8901',
    address: '1234 Elm Street, Springfield, USA',
    memberSince: 'January 2023',
    profileImage: 'https://randomuser.me/api/portraits/men/75.jpg',
  };

  return (
    <section className="profile-section">
      <img src={user.profileImage} alt="User Profile" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>

      <div className="profile-info">
        <h3>Profile Details</h3>
        <div>
          <label>Phone:</label>
          <p>{user.phone}</p>
        </div>
        <div>
          <label>Address:</label>
          <p>{user.address}</p>
        </div>
        <div>
          <label>Member Since:</label>
          <p>{user.memberSince}</p>
        </div>
      </div>

      <button className="edit-btn">Edit Profile</button>
    </section>
  );
};

export default Profile;
