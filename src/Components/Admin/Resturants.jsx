import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './restaurant.css';
const Resturants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/Admin/list')
      .then((res) => setRestaurants(res.data))
      .catch((err) => {
        console.error('Error fetching restaurants:', err);
        setRestaurants([]);
      });
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this restaurant?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/food-ordering-app/api/admin/restaurants/${id}`);
      setRestaurants(prev => prev.filter(rest => rest._id !== id));
      alert('Restaurant deleted successfully');
    } catch (err) {
      console.error('Delete error:', err);
      alert('Failed to delete restaurant');
    }
  };

  return (
    <div className="restaurant-container">
      <div className="restaurant-header">
        <h2>All Restaurants</h2>
        <button onClick={() => navigate('/admin/addrestaurant')}>Add Restaurant</button>
      </div>

      {restaurants.length === 0 ? (
        <p>No restaurants found.</p>
      ) : (
        <table className="restaurant-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {restaurants.map((restaurant, index) => (
              <tr key={restaurant._id}>
                <td>{index + 1}</td>
                <td>{restaurant.name}</td>
                <td>{restaurant.address}</td>
                <td>{restaurant.email}</td>
                <td>
                  <button onClick={() => navigate(`/admin/restaurants/view/${restaurant._id}`)}>View</button>
                  <button onClick={() => navigate(`/admin/restaurants/edit/${restaurant._id}`)}>Edit</button>
                  <button onClick={() => handleDelete(restaurant._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Resturants;
