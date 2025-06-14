import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const CartPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Access cart state passed from Menu
  const { cart, setCart } = location.state || { cart: [], setCart: () => {} };

  const updateQuantity = (id, quantity) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleBuy = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Add some products before buying.');
      return;
    }
    // Simulate purchase success
    alert('Purchase successful! Thank you for your order.');
    setCart([]);  // Clear cart after purchase
    navigate('/'); // Redirect back to menu or home page
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} style={{ marginBottom: '16px' }}>
            <h4>{item.name}</h4>
            <p>Price: ${item.price.toFixed(2)}</p>
            <label>
              Quantity: 
              <input 
                type="number" 
                value={item.quantity} 
                min={1}
                onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
                style={{ marginLeft: '8px', width: '50px' }}
              />
            </label>
          </div>
        ))
      )}

      <button onClick={() => navigate('/Men')}>Back to Menu</button>
      
      {/* Buy Button */}
      <button 
        onClick={handleBuy} 
        style={{ marginLeft: '12px', backgroundColor: 'green', color: 'white', padding: '8px 16px', border: 'none', cursor: 'pointer' }}
      >
        Buy
      </button>
    </div>
  );
};

export default CartPage;
