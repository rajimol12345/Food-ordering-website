import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';

export default function LoginForm() {
  const navigate = useNavigate();

  // ✅ Redirect if already logged in
  useEffect(() => {
    const token = getCookie('token');
    if (token) {
      navigate('/Home'); // User already logged in
    }
  }, [navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // ✅ Read cookie function
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/food-ordering-app/api/user/login', {
        email: data.email,
        password: btoa(data.password),
      });

      const user = response.data;
      const userID = user.token;

      // ✅ Set cookie for 1 hour
      document.cookie = `token=${userID}; max-age=3600; path=/`;

      alert('Login successful!');
      reset();
      navigate('/Home');
    } catch (error) {
      console.error('Login error:', error);
      alert(error.response?.data?.error || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1>User Login</h1>

        <div className="input-group">
          <div className="input-field">
            <input
              type="email"
              placeholder="Email"
              autoComplete="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: 'Invalid email format',
                },
              })}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
          </div>

          <div className="input-field">
            <input
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />
            {errors.password && <p className="error">{errors.password.message}</p>}
          </div>
        </div>

        <button type="submit" className="submit-btn">Login</button>
        <p>
          Don't have an account? <Link to="/RegisterForm">Register here</Link>
        </p>
      </form>
    </div>
  );
}
