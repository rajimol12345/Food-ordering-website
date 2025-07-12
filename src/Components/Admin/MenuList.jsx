import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './menu.css';

const MenuList = () => {
  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/menus')
      .then((res) => setMenus(res.data))
      .catch((err) => {
        console.error('Error fetching menus:', err);
        setMenus([]);
      });
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this menu?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:5000/food-ordering-app/api/admin/menus/${id}`);
      setMenus(prev => prev.filter(menu => menu._id !== id));
      alert('Menu deleted successfully');
    } catch (err) {
      console.error('Delete error:', err);
      alert('Failed to delete menu');
    }
  };

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>All Menus</h2>
        <button onClick={() => navigate('/admin/addmenu')}>Add Menu</button>
      </div>

      {menus.length === 0 ? (
        <p>No menu items found.</p>
      ) : (
        <table className="menu-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Menu Name</th>
              <th>Restaurant</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {menus.map((menu, index) => (
              <tr key={menu._id}>
                <td>{index + 1}</td>
                <td>{menu.name}</td>
                <td>{menu.restaurant?.name || 'N/A'}</td>
                <td>
                  <button onClick={() => navigate(`/admin/menus/view/${menu._id}`)}>View</button>
                  <button onClick={() => navigate(`/admin/menus/edit/${menu._id}`)}>Edit</button>
                  <button onClick={() => handleDelete(menu._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MenuList;
