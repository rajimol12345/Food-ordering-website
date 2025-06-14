import React, { useState, useEffect } from 'react';
import img1 from './img/pizza.avif';
import img2 from './img/burger.avif';
import img3 from './img/dessert.avif';
import axios from 'axios';

const Home = () => {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);

 

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
  }, []);
 
  return (
    <div>
      <main className="flex-grow-1 container-fluid my-6 px-6">

        {/* Carousel and Welcome Section */}
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <div id="foodCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={img1} className="d-block w-100" alt="Pizza" height="450" width="400" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Delicious Pizza</h5>
                    <p>Hot, cheesy, and delivered fast to your door.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={img2} className="d-block w-100" alt="Burger" height="450" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Juicy Burgers</h5>
                    <p>Loaded with flavor and grilled to perfection.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={img3} className="d-block w-100" alt="Desserts" height="450" />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Sweet Desserts</h5>
                    <p>Finish your meal with a delightful dessert.</p>
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
          <div className="col-md-6">
            <div className="p-4 bg-light rounded shadow-sm">
              <h2 className="text-danger fw-bold mb-3">
                Welcome to <span className="text-dark">EatYoWay</span>
              </h2>
              <p className="lead text-secondary">
                At <strong>EatYoWay</strong>, we bring mouthwatering dishes right to your doorstep.
                Whether you're craving a cheesy pizza, a juicy burger, or a sweet dessert to top off your meal, we’ve got you covered.
              </p>
              <p className="text-muted">
                Browse our <strong>Menu</strong> to explore a variety of delicious options. Place your order in just a few clicks
                and enjoy fast, reliable delivery from our kitchen to your table.
              </p>
              <p className="text-muted">
                Join thousands of happy customers and make your next meal unforgettable with <strong>EatYoWay</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Food Collection Section */}
        <section className="my-5">
          <h3 className="text-center fw-bold mb-4">Our Food Collection</h3>
          {loading ? (
            <p className="text-center">Loading food collection...</p>
          ) : (
            <div className="row g-4">
              {foods.map(food => (
                <div key={food.id} className="col-sm-6 col-md-4 col-lg-3">
                  <div className="card h-100">
                    <img src={food.image} className="card-img-top" alt={food.name} />
                    <div className="card-body">
                      <h5 className="card-title text-center">{food.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Restaurant List Section */}
        <section className="my-5">
          <h3 className="text-center fw-bold mb-4">Popular Restaurants</h3>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://source.unsplash.com/400x300/?restaurant,interior"
                  className="card-img-top"
                  alt="Restaurant 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Pizza Palace</h5>
                  <p className="card-text text-muted">New York, NY</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://source.unsplash.com/400x300/?restaurant,food"
                  className="card-img-top"
                  alt="Restaurant 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Burger Barn</h5>
                  <p className="card-text text-muted">Chicago, IL</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://source.unsplash.com/400x300/?cafe,dessert"
                  className="card-img-top"
                  alt="Restaurant 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Sweet Tooth Café</h5>
                  <p className="card-text text-muted">San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Home;
