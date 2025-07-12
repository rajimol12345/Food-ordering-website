import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    phone: '',
    profilePic: '' // URL or base64 image
  });
  const [loading, setLoading] = useState(true);
  const [preview, setPreview] = useState(null);
  const navigate = useNavigate();

  const getTokenFromCookie = () => {
    const match = document.cookie.match(/token=([^;]+)/);
    return match ? match[1] : null;
  };

  const userId = getTokenFromCookie();

  useEffect(() => {
    if (!userId) {
      alert('Please login first.');
      navigate('/LoginForm');
      return;
    }

    axios
      .get(`http://localhost:5000/food-ordering-app/api/user/profile/${userId}`)
      .then((res) => {
        setForm(res.data);
        setPreview(res.data.profilePic || null);
        setLoading(false);
      })
      .catch((err) => {
        alert('Failed to fetch user data');
        setLoading(false);
        console.error(err);
      });
  }, [navigate, userId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setForm({ ...form, profilePic: reader.result });
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/food-ordering-app/api/user/profile/${userId}`, form);
      alert('Profile updated successfully!');
      navigate('/Accounts');
    } catch (err) {
      console.error('Update error:', err);
      alert('Failed to update profile');
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="account-container">
      <form onSubmit={handleSubmit} className="account-form">
  {preview && <img src={preview} alt="Profile Preview" className="profile-preview" />}
  <input type="file" accept="image/*" onChange={handleImageChange} />
  <input
    type="text"
    name="fullname"
    value={form.fullname}
    onChange={handleChange}
    placeholder="Full Name"
    required
  />
  <input
    type="email"
    name="email"
    value={form.email}
    onChange={handleChange}
    placeholder="Email"
    required
  />
  <input
    type="text"
    name="phone"
    value={form.phone}
    onChange={handleChange}
    placeholder="Phone"
  />
  <textarea
    name="deliveryAddress"
    value={form.deliveryAddress}
    onChange={handleChange}
    placeholder="Delivery Address"
    rows="3"
  />
  <button type="submit">Save</button>
  <button type="button" onClick={() => navigate('/Accounts')}>Cancel</button>
</form>
    </div>
  );
}
