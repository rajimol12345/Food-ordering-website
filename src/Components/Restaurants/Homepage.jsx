import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const backgroundImageUrl = 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1350&q=80';
const logoUrl = 'https://your-logo-url-here.com/logo.png'; 

const Homepage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
      position: 'relative',
      fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      padding: '20px',
    },
    topBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: '10px 20px',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      zIndex: 1000,
      boxShadow: '0 2px 6px rgba(0,0,0,0.5)',
    },
    logo: {
      height: '40px',
      cursor: 'pointer',
    },
    loginButton: {
      backgroundColor: '#e65100',  // Changed to a bright orange (dark orange)
      color: '#fff',
      border: 'none',
      padding: '10px 16px',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: '600',
      textDecoration: 'none',
      fontSize: '16px',
      boxShadow: '0 2px 6px rgba(230, 81, 0, 0.7)',
      transition: 'background-color 0.3s ease',
    },
    loginButtonHover: {
      backgroundColor: '#bf360c',  // Darker orange on hover
    },
    centerContent: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '40px 20px',
      backdropFilter: 'brightness(0.7)',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      borderRadius: '8px',
      maxWidth: '800px',
      margin: '100px auto 40px',
    },
    message: {
      fontSize: '2rem',
      fontWeight: '700',
      marginBottom: '24px',
      textShadow: '2px 2px 6px rgba(0,0,0,0.7)',
    },
    registerButton: {
      padding: '14px 32px',
      fontSize: '20px',
      fontWeight: '700',
      backgroundColor: '#ff5722',
      border: 'none',
      borderRadius: '8px',
      color: 'white',
      cursor: 'pointer',
      textDecoration: 'none',
      boxShadow: '0 4px 10px rgba(255, 87, 34, 0.5)',
      transition: 'background-color 0.3s ease',
      marginBottom: '40px',
    },
    restaurantList: {
      width: '100%',
      maxHeight: '400px',
      overflowY: 'auto',
      backgroundColor: 'rgba(255, 255, 255, 0.85)',
      borderRadius: '8px',
      color: '#333',
      padding: '20px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    },
    restaurantItem: {
      borderBottom: '1px solid #ddd',
      padding: '10px 0',
    },
    restaurantName: {
      fontSize: '1.3rem',
      fontWeight: '700',
      marginBottom: '6px',
    },
    restaurantDetails: {
      fontSize: '0.9rem',
      color: '#555',
    },
  };

  // Optional: you can add hover effect with React state or CSS-in-JS libraries
  // For simplicity, we'll skip hover styling here.

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get('/restaurant.json');
        setRestaurants(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to load restaurants');
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div style={styles.container}>
      {/* Top bar with logo and login button */}
      <div style={styles.topBar}>
        <img
          src={logoUrl}
          alt="EatToWay"
          style={styles.logo}
          onClick={() => window.location.href = '/'} // Optional: clicking logo goes home
        />

        <Link to="/RestaurantLogin" style={styles.loginButton}>
          Login 
        </Link>
      </div>

      <div style={styles.centerContent}>
        <div style={styles.message}>Welcome to EatYoWay! Discover the best food around you.</div>
        <Link to="/RestaurantLogin" style={styles.registerButton}>
          Register
        </Link>

        {loading && <p>Loading restaurants...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        {!loading && !error && (
          <div style={styles.restaurantList}>
            {restaurants.length === 0 ? (
              <p>No restaurants found.</p>
            ) : (
              restaurants.map((r) => (
                <div key={r.id} style={styles.restaurantItem}>
                  <div style={styles.restaurantName}>{r.name}</div>
                  <div style={styles.restaurantDetails}>
                    {r.cuisine} | {r.address} | {r.phone}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;
