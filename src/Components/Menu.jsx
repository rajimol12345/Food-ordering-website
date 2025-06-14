import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/data.json') 
      .then(response => {
        const data = response.data;
        if (Array.isArray(data)) {
          setProducts(data);
        } else if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('Unexpected data format:', data);
        }
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Navigate to cart page and pass cart state as location state or via a global state (Redux, Context API, etc.)
  const goToCart = () => {
    navigate('/Cart', { state: { cart, setCart } });
  };

  return (
    <div>
      <h2>Menu</h2>
      <div 
        onClick={goToCart} 
        style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '18px' }}
      >
        <FaShoppingCart size={24} color="#333" />
        <strong>Cart:</strong> {cart.reduce((acc, item) => acc + item.quantity, 0)} item(s)
      </div>

      <div className="menu-grid" style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '20px' }}>
        {products.map(product => (
          <div 
            key={product.id} 
            className="menu-card" 
            style={{ border: '1px solid #ccc', borderRadius: 4, padding: 16, maxWidth: 220 }}
          >
            <img 
              src={product.image} 
              alt={product.name} 
              style={{ width: '100%', height: 140, objectFit: 'cover' }}
              onError={e => e.target.src = 'https://via.placeholder.com/200x140?text=No+Image'}
            />
            <div className="card-info" style={{ marginTop: 8 }}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <div className="price" style={{ fontWeight: 'bold' }}>${product.price?.toFixed(2)}</div>
              <button onClick={() => addToCart(product)} style={{ marginTop: 8 }}>
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
