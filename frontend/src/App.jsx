// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Sidebar from './components/ui/sidebar';
import Dashboard from './components/dashboard/dashboard';
import Settings from './pages/settings';
import Login from './pages/login';

// This is an inner component that handles layout and hooks safely
const MainAppContent = () => {
  const location = useLocation(); // It is safe to call here because it runs inside the <Router> grid!
  
  // Hiding the sidebar completely if the current active URL path is exactly '/login'
  const showSidebar = location.pathname !== '/login';

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#0f172a', width: '100%' }}>
      
      {/* Conditionally render your navigation sidebar layout panel */}
      {showSidebar && <Sidebar />}

      {/* Main viewport area changes dynamically depending on the route path */}
      <div style={{ flexGrow: 1, width: '100%' }}>
        <Routes>
          {/* Main workspace page paths */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />

          {/* Safe fallback router path */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>

    </div>
  );
};

// Keep the main App export simple—just wrapping everything inside the Router provider
const App = () => {
  return (
    <Router>
      <MainAppContent />
    </Router>
  );
};

export default App;