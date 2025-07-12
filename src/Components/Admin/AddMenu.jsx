import React, { useEffect, useState } from 'react';
import axios from 'axios';
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
    axios.get('http://localhost:5000/api/Admin/list')
      .then(res => {
        setRestaurants(Array.isArray(res.data) ? res.data : []);
      })
      .catch(err => {
        console.error('Failed to load restaurants:', err);
        setRestaurants([]);
      });
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    setMenuItem({ ...menuItem, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setMenuItem((prev) => ({
          ...prev,
          image: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  // Submit form with axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/menu/addmenu', menuItem);
      console.log('Menu added:', res.data);
      alert('Menu added successfully');

      // Reset form
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

    <select
  name="restaurantId"
  value={menuItem.restaurantId}
  onChange={handleChange}
  required
    >
    <option value="">Select Restaurant</option>
    {restaurants.map((rest) => (
      <option key={rest._id} value={rest._id}>
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

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        required
      />

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
