import React, { useState } from 'react';
import './Admin.css';

const Settings = () => {
  const [settings, setSettings] = useState({
    name: 'Admin Name',
    email: 'admin@example.com',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setSettings({ ...settings, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (settings.password !== settings.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    console.log('Updated Settings:', settings);
    // axios.post('/api/admin/settings', settings);
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <h3 className="mb-4 text-center">Account Settings</h3>

          <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-sm">
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={settings.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={settings.email}
                onChange={handleChange}
                required
              />
            </div>

            <hr />

            <h5 className="mb-3">Change Password</h5>

            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={settings.password}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="confirmPassword"
                value={settings.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
