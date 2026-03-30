import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  // 1. Simulated Authentication State (for demonstration purposes)
  const isLoggedIn = false; 
  const navigate = useNavigate();

  const handleLogout = () => {
    // Logic to clear tokens will go here later
    console.log("Logging out...");
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">DevTrack</Link>

      <div className="navbar-links">
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="navbar-link">Dashboard</Link>
            <button 
              onClick={handleLogout}
              className="navbar-button"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-link">Login</Link>
            <Link 
              to="/register" 
              className="navbar-link navbar-primary"
            >
              Get Started
            </Link>
          </>
        )}
        <Link to="/editor" className="navbar-link">Editor</Link>
        <Link
          to="/tiptap"
          className="navbar-link"
        >
          Tiptap
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;