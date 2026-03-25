import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

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
    <nav className="flex items-center justify-between p-4 border-b border-zinc-800 bg-zinc-950">
      <Link to="/" className="text-xl font-bold">DevTrack</Link>

      <div className="flex gap-4 items-center">
        {/* 2. Conditional Rendering using the Ternary Operator */}
        {isLoggedIn ? (
          <>
            <Link to="/dashboard" className="text-zinc-400 hover:text-white">Dashboard</Link>
            <button 
              onClick={handleLogout}
              className="bg-red-600/10 text-red-500 px-3 py-1 rounded-md hover:bg-red-600/20 transition-all"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-zinc-400 hover:text-white">Login</Link>
            <Link 
              to="/register" 
              className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-all"
            >
              Get Started
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;