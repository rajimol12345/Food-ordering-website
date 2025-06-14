import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './login.css';

export default function RegisterForm() {
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    alert('Registration successful!');
    reset(); // Clear form
    navigate('/LoginForm');
  };

  const password = watch('password');

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1>User Register</h1>

        <div className="input-group">
          <div className="input-field">
            <input
              type="text"
              placeholder="Full Name"
              {...register('fullname', {
                required: 'Full name is required',
                pattern: {
                  value: /^[a-zA-Z]+(?: [a-zA-Z]+)+$/,
                  message: 'Enter at least first and last name (letters only)',
                },
              })}
            />
            {errors.fullname && <p className="error">{errors.fullname.message}</p>}
          </div>

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
              type="text"
              placeholder="Phone Number"
              {...register('phone', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: 'Enter a valid phone number (10–15 digits)',
                },
              })}
            />
            {errors.phone && <p className="error">{errors.phone.message}</p>}
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

          <div className="input-field">
            <input
              type="password"
              placeholder="Confirm Password"
              {...register('confirm_password', {
                required: 'Please confirm your password',
                validate: value => value === password || 'Passwords do not match',
              })}
            />
            {errors.confirm_password && <p className="error">{errors.confirm_password.message}</p>}
          </div>
        </div>

        <button type="submit" className="submit-btn">Register</button>
        <p>
          Already have an account? <Link to="/LoginForm">Login here</Link>
        </p>
      </form>
    </div>
  );
}
