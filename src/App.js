import React from 'react';
import './App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Component imports
import Header from './Components/Header';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import Orders from './Components/Order';
import Profile from './Components/Profile';
import Logout from './Components/Logout';
import Index from './Components/Index';
import Sidebar from './Components/Restaurants/Sidebar';
import RestaurantDetail from './Components/Restaurants/RestaurantDetail';
import Checkout from './Components/Checkout';
import Payment from './Components/Payment';
import Homepage from './Components/Restaurants/Homepage';
import RestaurantRegistration from './Components/Restaurants/RestaurantRegistration'; 
import RestaurantLogin from './Components/Restaurants/RestaurantLogin';
import DashboardOverview from './Components/Restaurants/DashboardOverview';
import RestaurantList from './Components/Restaurants/RestaurantList';
import OrdersDashboard from './Components/Restaurants/OrdersDashboard';
import UserInfo from './Components/Restaurants/UserInfo';
import Promotions from './Components/Restaurants/Promotions';
import SavedItems from './Components/SavedItems';
import Search from './Components/Search'; // ✅ Import Search Component

function App() {
  const location = useLocation();

  // Routes where Header should be hidden
  const hideHeaderOnRoutes = [
    '/',
    '/LoginForm',
    '/RegisterForm',
    '/Homepage',
    '/RestaurantRegistration',
    '/RestaurantLogin',
    '/DashboardOverview',
    '/Orders',
    '/Userinfo',
    '/Promotions'
  ];
  const shouldHideHeader = hideHeaderOnRoutes.includes(location.pathname);

  // Routes where Sidebar should be shown
  const showSidebarOnRoutes = ['/DashboardOverview'];
  const shouldShowSidebar = showSidebarOnRoutes.includes(location.pathname);

  // Routes where Footer should be hidden
  const hideFooterOnRoutes = [
    '/Homepage',
    '/RestaurantRegistration',
    '/RestaurantLogin',
    '/DashboardOverview'
  ];
  const shouldHideFooter = hideFooterOnRoutes.includes(location.pathname);

  // Routes where Search should be hidden
  const hideSearchOnRoutes = [
    '/',
    '/LoginForm',
    '/RegisterForm',
    '/Homepage',
    '/RestaurantLogin',
    '/DashboardOverview',
    '/Orders',
    '/Userinfo',
    '/Promotions'
  ];
  const shouldHideSearch = hideSearchOnRoutes.includes(location.pathname);

  return (
    <div>
      {/* Header */}
      {!shouldHideHeader && <Header />}

      {/* Search shown on all pages except excluded routes */}
      {!shouldHideSearch && <Search />}

      <div style={{ display: 'flex' }}>
        {/* Sidebar */}
        {shouldShowSidebar && <Sidebar />}

        <div
          style={{
            marginLeft: shouldShowSidebar ? '220px' : '0',
            padding: '20px',
            flex: 1,
          }}
        >
          {/* Routes */}
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/LoginForm" element={<LoginForm />} />
            <Route path="/RegisterForm" element={<RegisterForm />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/restaurant/:id" element={<RestaurantDetail />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Order" element={<Orders />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/SavedItems" element={<SavedItems />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/Logout" element={<Logout />} />

            {/* Restaurant Module Routes */}
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/RestaurantRegistration" element={<RestaurantRegistration />} />
            <Route path="/RestaurantLogin" element={<RestaurantLogin />} />
            <Route path="/RestaurantList" element={<RestaurantList />} />
            <Route path="/DashboardOverview" element={<DashboardOverview />} />
            <Route path="/Orders" element={<OrdersDashboard />} />
            <Route path="/Userinfo" element={<UserInfo />} />
            <Route path="/Promotions" element={<Promotions />} />

            {/* Fallback Route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>

          {/* Footer */}
          {!shouldHideFooter && <Footer />}
        </div>
      </div>
    </div>
  );
}

export default App;
