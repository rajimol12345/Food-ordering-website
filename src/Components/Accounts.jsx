import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function Accounts() {
  const navigate = useNavigate();
  const { id } = useParams(); // assumes route is like /account/:id

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/users/${id}`);
        setUser(res.data);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div className="account-container">
      <h2>My Account</h2>
      <div className="profile-header">
        <div>
          <p><strong>Name:</strong> {user.fullname}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phonenumber}</p>
        </div>
      </div>

      <button onClick={() => navigate(`/EditProfile/${user._id}`)} className="edit-profile-button">
        Edit Profile
      </button>
    </div>
  );
}

export default Accounts;
