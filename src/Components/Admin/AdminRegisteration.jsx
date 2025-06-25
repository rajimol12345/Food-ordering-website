import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom';
import '../Admin/Admin.css';

const AdminRegister = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm();

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Admin registered successfully!');
      } else {
        alert(result.message || 'Registration failed');
      }
    } catch (error) {
      console.error(error);
      alert('Server error');
    }
  };

  return (
    <div className="form-container">
      <h2>Admin Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', { required: 'Name is required' })}
          placeholder="Full Name"
        />
        {errors.name && <p className="error-msg">{errors.name.message}</p>}

        <input
          {...register('email', {
            required: 'Email is required',
            pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' },
          })}
          placeholder="Email"
        />
        {errors.email && <p className="error-msg">{errors.email.message}</p>}

        <input
          type="password"
          {...register('password', {
            required: 'Password is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters' },
          })}
          placeholder="Password"
        />
        {errors.password && <p className="error-msg">{errors.password.message}</p>}

        <input
          type="password"
          {...register('confirmPassword', {
            validate: (value) => value === watch('password') || 'Passwords do not match',
          })}
          placeholder="Confirm Password"
        />
        {errors.confirmPassword && (
          <p className="error-msg">{errors.confirmPassword.message}</p>
        )}

        <button type="submit">Register Admin</button>
      </form>
       <p style={{ marginTop: '15px', textAlign: 'center' }}>
        Already registered?{' '}
        <Link to="/admin/login" className="login-link">
          Login here
        </Link>
      </p>
    </div>
  );
};

export default AdminRegister;
