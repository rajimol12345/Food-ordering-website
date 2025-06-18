import React, { useState, useEffect } from 'react';
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
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;

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

  return (
    <div className="container-fluid">

      {/* Carousel Section */}
      <div className="row mt-5">
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
                             src={restaurant.image}
                             alt={`Banner of ${restaurant.name}`}
                             className="img-fluid w-100 rounded mb-4 shadow"
                             style={{ maxHeight: '500px', objectFit: 'cover' }}
                           />
                  <div className="card-body">
                    <h5 className="card-title">{restaurant.name}</h5>
                    <p className="card-text text-muted mb-1"><strong>Address:</strong> {restaurant.address}</p>
                    <p className="card-text text-muted mb-1"><strong>Cuisine:</strong> {restaurant.cuisine}</p>
                    <p className="card-text text-muted mb-1"><strong>Phone:</strong> {restaurant.phone}</p>
                    <p className="card-text text-muted mb-1">
                    <strong>Rating:</strong> <i className="fas fa-star text-warning me-1"></i> {restaurant.rating}
                    </p>

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
