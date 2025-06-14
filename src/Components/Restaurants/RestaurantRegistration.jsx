import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; 

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
  padding: '1rem',
  borderRadius: '8px',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
};

const RestaurantRegistration = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate(); 

  const onSubmit = (data) => {
    console.log('Restaurant Added:', data);
    alert('Restaurant added successfully!');
    reset();
    navigate('/DashboardOverview');
  };

  return (
    <div style={backgroundStyle}>
      <div style={formContainerStyle}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          <label htmlFor="name">Restaurant Name:</label><br/>
          <input
            id="name"
            {...register("name", { required: "Restaurant name is required" })}
            placeholder="Enter restaurant name"
          />
          {errors.name && <p style={{color: 'red'}}>{errors.name.message}</p>}
          <br /><br />

          <label htmlFor="address">Address:</label><br/>
          <input
            id="address"
            {...register("address", { required: "Address is required" })}
            placeholder="Enter address"
          />
          {errors.address && <p style={{color: 'red'}}>{errors.address.message}</p>}
          <br /><br />

          <label htmlFor="phone">Phone Number:</label><br/>
          <input
            id="phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Enter a valid 10-digit phone number"
              }
            })}
            placeholder="Enter phone number"
          />
          {errors.phone && <p style={{color: 'red'}}>{errors.phone.message}</p>}
          <br /><br />

          <label htmlFor="cuisine">Cuisine Type:</label><br/>
          <input
            id="cuisine"
            {...register("cuisine", { required: "Cuisine type is required" })}
            placeholder="e.g. Indian, Italian"
          />
          {errors.cuisine && <p style={{color: 'red'}}>{errors.cuisine.message}</p>}
          <br /><br />

          <label htmlFor="email">Contact Email:</label><br/>
          <input
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Enter a valid email"
              }
            })}
            placeholder="Enter contact email"
          />
          {errors.email && <p style={{color: 'red'}}>{errors.email.message}</p>}
          <br /><br />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RestaurantRegistration;
