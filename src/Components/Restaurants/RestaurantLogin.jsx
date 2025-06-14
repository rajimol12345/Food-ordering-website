import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'; 

const backgroundStyle = {
  backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1350&q=80')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
};

const formContainerStyle = {
  maxWidth: '400px',
  width: '100%',
  padding: '1.5rem',
  borderRadius: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  textAlign: 'center',
};

const linkStyle = {
  color: '#007bff',
  textDecoration: 'none',
  marginLeft: '5px',
};

const RestaurantLogin = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); 

  const onSubmit = (data) => {
    console.log('Login Data:', data);
    alert('Login successfully');
    navigate('/DashboardOverview');
  };

  return (
    <div style={backgroundStyle}>
      <div style={formContainerStyle}>
        <h2>Restaurant Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            Email:
            <input
              type="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Enter a valid email address',
                },
              })}
            />
            {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
          </label>
          <br /><br />

          <label>
            Password:
            <input
              type="password"
              placeholder="Enter your password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 6,
                  message: 'Password must be at least 6 characters',
                },
              })}
            />
            {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
          </label>
          <br /><br />

          <button type="submit">Login</button>
        </form>

        <p style={{ marginTop: '20px' }}>
          Don't have an account?
          <Link to="/RestaurantRegistration" style={linkStyle}>
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RestaurantLogin;
