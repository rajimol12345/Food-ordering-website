import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 👇 No localStorage or cookie clearing
    // You can handle logout logic in backend if needed

    // Redirect to login page
    navigate('/login');
  }, [navigate]);

  return (
    <div className="text-center mt-5">
      <h4>Logging out...</h4>
    </div>
  );
};

export default AdminLogout;
