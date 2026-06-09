// src/components/Sidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Settings', path: '/settings' },
    { name: 'Login Page', path: '/login' }, // 👈 Connects directly to the route path
  ];

  return (
    <div style={{
      width: '260px',
      backgroundColor: '#0b0f19',
      borderRight: '1px solid #1e293b',
      padding: '2rem 1rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
    }}>
      {/* Platform Branding */}
      <div style={{ paddingLeft: '0.75rem' }}>
        <h2 style={{ color: '#ffffff', fontSize: '1.25rem', fontWeight: '700', margin: 0, trackingTight: '-0.025em' }}>
          DevTrack <span style={{ color: '#3b82f6', fontSize: '0.75rem' }}>v1.0</span>
        </h2>
      </div>

      {/* Navigation Stack */}
      <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            style={({ isActive }) => ({
              display: 'block',
              padding: '0.75rem 1rem',
              borderRadius: '0.5rem',
              color: isActive ? '#ffffff' : '#94a3b8',
              backgroundColor: isActive ? '#1e293b' : 'transparent',
              textDecoration: 'none',
              fontSize: '0.925rem',
              fontWeight: isActive ? '600' : '500',
              transition: 'all 0.15s ease',
              borderLeft: isActive ? '3px solid #3b82f6' : '3px solid transparent'
            })}
            // Simple hover effect handler
            onMouseEnter={(e) => {
              if (!e.currentTarget.style.backgroundColor || e.currentTarget.style.backgroundColor === 'transparent') {
                e.currentTarget.style.backgroundColor = '#0f172a';
                e.currentTarget.style.color = '#cbd5e1';
              }
            }}
            onMouseLeave={(e) => {
              if (window.location.pathname !== item.path) {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#94a3b8';
              }
            }}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;