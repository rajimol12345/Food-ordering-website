import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

    alert("You have been logged out.");
    navigate('/LoginForm'); 
  }, [navigate]);

  return (
    <div className="logout-page">
      <p>Logging you out...</p>
    </div>
  );
}
