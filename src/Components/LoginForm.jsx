import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import './login.css'
export default function LoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    alert('Login successful!');
    reset();
    navigate('/Home');
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
