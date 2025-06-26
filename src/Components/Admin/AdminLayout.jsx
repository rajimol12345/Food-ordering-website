import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <>
      <Sidebar isOpen={sidebarOpen} />
      <Header toggleSidebar={toggleSidebar} />
      <div
        className="main-content"
        style={{
          marginLeft: sidebarOpen ? 260 : 0,
          transition: 'margin-left 0.3s ease',
          padding: '20px',
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default AdminLayout;
