import React, { useEffect, useState } from 'react';
import './Admin.css';

const AddMenu = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [menuItem, setMenuItem] = useState({
    name: '',
    price: '',
    description: '',
    image: '',
    restaurantId: ''
  });

  // Fetch all restaurants on mount
  useEffect(() => {
    fetch('http://localhost:5000/api/Admin/list') 
      .then(res => res.json())
      .then(data => {
        setRestaurants(Array.isArray(data) ? data : []);
      })
      .catch(err => {
        console.error('Failed to load restaurants:', err);
        setRestaurants([]);
      });
  }, []);

  // Handle text input change
  const handleChange = (e) => {
    setMenuItem({ ...menuItem, [e.target.name]: e.target.value });
  };

  // Handle image upload and convert to base64
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMenuItem((prev) => ({
          ...prev,
          image: reader.result, // base64 string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/menu/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(menuItem)
      });

      const result = await res.json();
      console.log('Menu added:', result);
      alert('Menu added successfully');
      // Optionally reset form
      setMenuItem({
        name: '',
        price: '',
        description: '',
        image: '',
        restaurantId: ''
      });
    } catch (error) {
      console.error('Error adding menu:', error);
      alert('Failed to add menu');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Menu</h2>

      {/* Dropdown for Restaurant Selection */}
      <select
        name="restaurantId"
        value={menuItem.restaurantId}
        onChange={handleChange}
        required
      >
        <option value="">Select Restaurant</option>
        {restaurants.map((rest) => (
          <option key={rest.restaurantId} value={rest.restaurantId}>
            {rest.name}
          </option>
        ))}
      </select>

      <input
        type="text"
        name="name"
        placeholder="Menu Name"
        value={menuItem.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="price"
        placeholder="Price"
        value={menuItem.price}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={menuItem.description}
        onChange={handleChange}
        required
      />

      {/* Image Upload */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        required
      />

      {/* Preview Image */}
      {menuItem.image && (
        <img
          src={menuItem.image}
          alt="Preview"
          width="150"
          style={{ marginTop: '10px', display: 'block' }}
        />
      )}

      <button type="submit">Add Menu</button>
    </form>
  );
};

export default AddMenu;
