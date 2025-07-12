// MenuList.jsx (Frontend React Component)
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MenuList = ({ restaurantId, handleAddToWishlist, showCustomToast }) => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMenu = async () => {
      if (!restaurantId) {
        console.warn('No restaurantId provided. Cannot fetch menu.');
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5000/api/menu/${restaurantId}`);
        setMenu(response.data);
      } catch (error) {
        console.error('Error fetching menu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, [restaurantId]);

  const handleAddToCart = async (item) => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      alert('Please log in to add items to cart.');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/addcart', {
        userId,
        menuId: item._id,
        quantity: 1,
      });

      showCustomToast(`${item.name} added to cart.`);
      navigate('/Cart');
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Failed to add item to cart');
    }
  };

  if (loading) return <div className="text-center py-5">Loading menu...</div>;
  if (!menu || menu.length === 0) return <div className="text-center py-5">No menu items found.</div>;

  return (
    <div className="bg-light py-5">
      <h3 className="text-center mb-4">Menu</h3>
      <div className="row g-4">
        {menu.map((item, i) => (
          <div className="col-md-3" key={i}>
            <div className="card h-100 shadow">
              <img
                src={item.image}
                alt={item.name}
                onError={(e) => { e.target.src = '/fallback.jpg'; }}
                className="card-img-top"
                style={{ height: '180px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5>{item.name}</h5>
                <p className="small text-muted">{item.description}</p>
                <p className="fw-bold text-success">₹{item.price}</p>

                <div className="mt-auto d-flex flex-column gap-2">
                  <button
                    className="btn btn-outline-success d-flex align-items-center justify-content-center gap-2"
                    onClick={() => handleAddToWishlist(item)}
                  >
                    <FaHeart /> Add to Wishlist
                  </button>
                  <button
                    className="btn btn-primary d-flex align-items-center justify-content-center gap-2"
                    onClick={() => handleAddToCart(item)}
                  >
                    <FaShoppingCart /> Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuList;
