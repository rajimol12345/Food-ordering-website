import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import img1 from './img/burger.jpeg';
import img2 from './img/chocolate.jpg';
import img3 from './img/pizza.jpg';
import axios from 'axios';

const Home = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [restaurants, setRestaurants] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const scrollRef = useRef(null);

  useEffect(() => {
    axios.get('/Foodcollection.json')
      .then(response => {
        setFoods(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching food data:', error);
        setLoading(false);
      });

    axios.get('/restaurant.json')
      .then(response => setRestaurants(response.data))
      .catch(error => console.error('Error fetching restaurants:', error));

    axios.get('/food.json')
      .then(res => setFoodCategories(res.data))
      .catch(err => console.error("Error loading categories:", err));
  }, []);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -150, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 150, behavior: 'smooth' });
  };

  return (
    <div className="container-fluid px-0">
      
      {/* Food Category Horizontal Scroll */}
      <h3 className="mt-4 mb-3 text-center">Food Categories</h3>
      <div className="position-relative mx-3">
        <button
          className="btn btn-light shadow position-absolute start-0 top-50 translate-middle-y z-3"
          onClick={scrollLeft}
          style={{ borderRadius: '50%' }}
        >
          &#8592;
        </button>

        <div
          ref={scrollRef}
          className="scrollbar-hide"
          style={{
            display: 'flex',
            overflowX: 'auto',
            whiteSpace: 'nowrap',
            gap: '16px',
            padding: '10px 20px',
            margin: '20px 0',
            scrollBehavior: 'smooth',
          }}
        >
          {foodCategories.map((item, index) => (
            <div key={index} style={{ flex: '0 0 auto', minWidth: '120px', textAlign: 'center' }}>
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: '100px',
                  height: '100px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  marginBottom: '8px',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              />
              <div style={{ fontSize: '14px', fontWeight: 500 }}>{item.name}</div>
            </div>
          ))}
        </div>

        <button
          className="btn btn-light shadow position-absolute end-0 top-50 translate-middle-y z-3"
          onClick={scrollRight}
          style={{ borderRadius: '50%' }}
        >
          &#8594;
        </button>
      </div>

      {/* Carousel Section */}
      <div className="row">
        <div className="col-12">
          <div id="foodCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img1} className="d-block w-100" alt="Pizza" height="550" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Delicious Pizza</h5>
                  <p className="fs-1">Hot, cheesy, and delivered fast to your door.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={img2} className="d-block w-100" alt="Burger" height="550" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Juicy Burgers</h5>
                  <p className="fs-1">Loaded with flavor and grilled to perfection.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block w-100" alt="Desserts" height="550" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Sweet Desserts</h5>
                  <p className="fs-1">Finish your meal with a delightful dessert.</p>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#foodCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#foodCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Food Collection */}
      <section className="my-5 px-4">
        <h3 className="text-center fw-bold mb-4">Our Food Collection</h3>
        {loading ? (
          <p className="text-center">Loading food collection...</p>
        ) : (
          <div className="row g-4">
            {foods.map(food => (
              <div key={food.id} className="col-sm-6 col-md-4 col-lg-3">
                <div className="card h-100 shadow-sm">
                  <img
                    src={food.image}
                    className="card-img-top"
                    alt={food.name}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{food.name}</h5>
                    <p className="card-text text-muted">{food.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Restaurant List */}
      <section className="my-5 px-4">
        <h3 className="text-center fw-bold mb-4">Popular Restaurants</h3>
        <div className="row g-4">
          {restaurants.map((restaurant, index) => (
            <div key={restaurant.id} className="col-md-6 col-lg-4">
              <Link to={`/restaurant/${restaurant.id}`} className="text-decoration-none text-dark">
                <div className="card h-100 shadow-sm">
                  <img
                    src={`https://source.unsplash.com/400x300/?restaurant,food&sig=${index}`}
                    className="card-img-top"
                    alt={restaurant.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{restaurant.name}</h5>
                    <p className="card-text text-muted mb-1"><strong>Address:</strong> {restaurant.address}</p>
                    <p className="card-text text-muted mb-1"><strong>Cuisine:</strong> {restaurant.cuisine}</p>
                    <p className="card-text text-muted mb-1"><strong>Phone:</strong> {restaurant.phone}</p>
                    <p className="card-text text-muted mb-1"><strong>Rating:</strong> ⭐ {restaurant.rating}</p>
                    <p className="card-text text-muted"><strong>Hours:</strong> {restaurant.openingHours}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
