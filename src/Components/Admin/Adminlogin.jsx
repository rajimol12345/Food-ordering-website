import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './Admin.css'; 

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); // For redirection
  const [serverError, setServerError] = useState('');
  const [success, setSuccess] = useState('');

  const onSubmit = async (data) => {
    setServerError('');
    setSuccess('');

    try {
      const response = await fetch('http://localhost:5000/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess('Login successful!');
        // Optionally store token
        // localStorage.setItem('adminToken', result.token);
        navigate('/admin/dashboard'); // Navigate to admin dashboard
      } else {
        setServerError(result.message || 'Login failed.');
      }
    } catch (error) {
      console.error(error);
      setServerError('Server error. Try again later.');
    }
  };

  return (
    <div className="form-container">
      <h2>Admin Login</h2>

      {serverError && <p className="error-msg">{serverError}</p>}
      {success && <p className="success-msg">{success}</p>}

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Invalid email format',
            },
          })}
        />
        {errors.email && <p className="error-msg">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
        />
        {errors.password && <p className="error-msg">{errors.password.message}</p>}

        <button type="submit">Login Admin</button>
      </form>

      <p style={{ marginTop: '15px', textAlign: 'center' }}>
        Don't have an account?{' '}
        <Link to="/admin/register" className="login-link">
          Register here
        </Link>
      </p>
    </div>
  );
};

export default AdminLogin;
