import React from 'react';
import './App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Component imports
import Header from './Components/Header';
import RegisterForm from './Components/RegisterForm';
import LoginForm from './Components/LoginForm';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Cart from './Components/Cart';
import Orders from './Components/Order';
import Logout from './Components/Logout';
import Index from './Components/Index';
import RestaurantDetail from './Components/RestaurantDetail';
import Checkout from './Components/Checkout';
import Payment from './Components/Payment';
import RestaurantList from './Components/RestaurantList';
import SavedItems from './Components/SavedItems';
import Search from './Components/Search'; 
import Accounts from './Components/Accounts';
import EditProfile from './Components/EditProfile';
import FoodDetail from './Components/FoodDetail';
// Admin
import Adminlogin from './Components/Admin/Adminlogin';
import AdminRegister from './Components/Admin/AdminRegisteration';
import AdminDashboard from './Components/Admin/AdminDashboard';
import AdminLayout from './Components/Admin/AdminLayout';
import Overview from './Components/Admin/Overview';
import RestaurantForm from './Components/Admin/RestaurantForm';
import AddMenu from './Components/Admin/AddMenu';
import AllOrders from './Components/Admin/AllOrders';
import ActiveOrders from './Components/Admin/ActiveOrders';
import Settings from './Components/Admin/Settings';
import UsersList from './Components/Admin/UsersList';
import AdminLogout from './Components/Admin/AdminLogout';
import Resturants from './Components/Admin/Resturants';
import MenuList from './Components/Admin/MenuList';
function App() {
  const location = useLocation();

  // Routes where Header should be hidden
  const hideHeaderOnRoutes = ['/', '/LoginForm', '/RegisterForm','/admin/login','/admin/register','/admin/dashboard','/admin','/admin/overview','/admin/addrestaurant','/admin/addmenu','/admin/allorders','/admin/activeorders','/admin/settings','/admin/adminprofile','/admin/adminlogout','/admin/users','/admin/restaurant'];
  const hideFooterOnRoutes = ['/admin/login','/admin/register','/admin/dashboard','/admin','/admin/overview','/admin/addrestaurant','/admin/addmenu','/admin/allorders','/admin/activeorders','/admin/settings','/admin/adminprofile','/admin/adminlogout','/admin/users','/admin/restaurant'];
  const hideSearchOnRoutes = ['/', '/LoginForm', '/RegisterForm','/admin/login','/admin/register','/admin/dashboard','/admin','/admin/overview','/admin/addrestaurant','/admin/addmenu','/admin/allorders','/admin/activeorders','/admin/settings','/admin/adminprofile','/admin/adminlogout','/admin/users','/admin/restaurant'];

  const shouldHideHeader = hideHeaderOnRoutes.includes(location.pathname);
  const shouldHideFooter = hideFooterOnRoutes.includes(location.pathname);
  const shouldHideSearch = hideSearchOnRoutes.includes(location.pathname);

  return (
    <div>
      {/* Header */}
      {!shouldHideHeader && <Header />}

      {/* Search */}
      {!shouldHideSearch && <Search />}

        {/* Routes */}
        <Routes>
  {/* Public Routes */}
  <Route path="/" element={<Index />} />
  <Route path="/LoginForm" element={<LoginForm />} />
  <Route path="/RegisterForm" element={<RegisterForm />} />
  <Route path="/Home" element={<Home />} />
  <Route path="/restaurant/:restaurantid" element={<RestaurantDetail />} />
  <Route path="/Cart" element={<Cart />} />
  <Route path="/Order" element={<Orders />} />
  <Route path="/SavedItems" element={<SavedItems />} />
  <Route path="/Accounts" element={<Accounts />} />
  <Route path="/checkout" element={<Checkout />} />
  <Route path="/payment" element={<Payment />} />
  <Route path="/EditProfile" element={<EditProfile />} />
  <Route path="/Logout" element={<Logout />} />
  <Route path="/RestaurantList" element={<RestaurantList />} />
  <Route path="/food/:id" element={<FoodDetail />} />
  <Route path="*" element={<Navigate to="/" replace />} />

  {/* Admin Auth (No Layout) */}
  <Route path="/admin/login" element={<Adminlogin />} />
  <Route path="/admin/register" element={<AdminRegister />} />

  {/* Admin Routes (With AdminLayout) */}
  <Route path="/admin" element={<AdminLayout />}>
    <Route path="/admin/dashboard" element={<AdminDashboard />} />
    <Route path="/admin/overview" element={<Overview />} />
     <Route path="/admin/addrestaurant" element={<RestaurantForm />} />
     <Route path="/admin/addmenu" element={<AddMenu />} />
      <Route path="/admin/allorders" element={<AllOrders />} />
      <Route path="/admin/activeorders" element={<ActiveOrders />} />
      <Route path="/admin/settings" element={<Settings />} />
      <Route path="/admin/users" element={<UsersList />} />
      <Route path="/admin/adminlogout" element={<AdminLogout />} />
      <Route path="/admin/restaurant" element={<Resturants />} />
      <Route path="/admin/menulist" element={<MenuList/>} />
    {/* You can add more nested admin routes here, e.g.: */}
    {/* <Route path="orders" element={<AdminOrders />} /> */}
    {/* <Route path="restaurants" element={<AdminRestaurants />} /> */}
  </Route>
</Routes>


        {/* Footer */}
        {!shouldHideFooter && <Footer />}
      </div>
    
  );
}

export default App;
