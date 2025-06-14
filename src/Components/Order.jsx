import React from 'react';

const Orders = () => {
  const orders = [
    {
      id: 1001,
      status: 'Delivered',
      items: [
        {
          name: '1x Cheese Pizza',
          image: 'https://images.unsplash.com/photo-1604908553725-236f91ba6769',
        },
        {
          name: '2x Chocolate Cake',
          image: 'https://images.unsplash.com/photo-1601979031925-788d0d7e3c4a',
        },
      ],
      total: 24.97,
      statusStyle: {
        backgroundColor: '#d4edda',
        color: '#155724',
      },
    },
    {
      id: 1002,
      status: 'Out for Delivery',
      items: [
        {
          name: '1x Beef Burger',
          image: 'https://images.unsplash.com/photo-1605478371323-b91c5d542ff5',
        },
        {
          name: '1x Fries',
          image: 'https://images.unsplash.com/photo-1585238342028-4c2a6e3c8d98',
        },
      ],
      total: 13.49,
      statusStyle: {
        backgroundColor: '#c3e6cb',
        color: '#155724',
      },
    },
    {
      id: 1003,
      status: 'Cancelled',
      items: [
        {
          name: '2x Spaghetti',
          image: 'https://images.unsplash.com/photo-1603079840817-25b5389b7f5a',
        },
      ],
      total: 19.98,
      statusStyle: {
        backgroundColor: '#f8d7da',
        color: '#721c24',
      },
    },
  ];

  return (
    <section className="orders-section">
      <h2>My Orders</h2>

      {orders.map(order => (
        <div className="order-card" key={order.id}>
          <div className="order-header">
            <h3>Order #{order.id}</h3>
            <div className="order-status" style={order.statusStyle}>
              {order.status}
            </div>
          </div>

          <ul className="order-items">
            {order.items.map((item, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: '60px',
                    height: '60px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginRight: '10px',
                  }}
                />
                {item.name}
              </li>
            ))}
          </ul>

          <div className="order-total">Total: ${order.total.toFixed(2)}</div>
        </div>
      ))}
    </section>
  );
};

export default Orders;
