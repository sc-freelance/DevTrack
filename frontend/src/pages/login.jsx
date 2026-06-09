// src/components/Login.jsx
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submission requested for:", email);
  };

  return (
    // 🌌 Viewport Wrapper: Centers everything perfectly on screen
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#0b0f19', // Deep dark backdrop matching your sidebar
      padding: '1.5rem'
    }}>
      
      {/* 📦 Authentication Card Component */}
      <div style={{
        width: '100%',
        maxWidth: '420px',
        backgroundColor: '#0f172a', // Slightly lighter slate card body
        border: '1px solid #1e293b',
        borderRadius: '0.75rem',
        padding: '2.5rem',
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)'
      }}>
        
        {/* Header Stack */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: '#ffffff', fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem' }}>
            Welcome Back
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: 0 }}>
            Enter your credentials to access DevTrack workspace.
          </p>
        </div>

        {/* Form Elements */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          
          {/* Email input field wrapper */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ color: '#cbd5e1', fontSize: '0.875rem', fontWeight: '500' }}>Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              style={{
                backgroundColor: '#070a12',
                border: '1px solid #334155',
                borderRadius: '0.5rem',
                padding: '0.75rem 1rem',
                color: '#ffffff',
                outline: 'none',
                fontSize: '0.9rem',
                transition: 'border-color 0.15s'
              }}
            />
          </div>

          {/* 🛠️ YOUR TURN: Add the Password field stack below following the pattern above! */}


          {/* Utility Row: Remembers checkbox and password retrieval link */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '0.25rem' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.85rem', cursor: 'pointer' }}>
              <input type="checkbox" style={{ accentColor: '#3b82f6' }} />
              Remember me
            </label>
            <a href="#forgot" style={{ color: '#3b82f6', fontSize: '0.85rem', textDecoration: 'none', fontWeight: '500' }}>
              Forgot password?
            </a>
          </div>

          {/* Action Trigger Button */}
          <button 
            type="submit"
            style={{
              backgroundColor: '#2563eb',
              color: '#ffffff',
              padding: '0.75rem',
              borderRadius: '0.5rem',
              border: 'none',
              fontWeight: '600',
              fontSize: '0.95rem',
              cursor: 'pointer',
              marginTop: '0.5rem',
              transition: 'background-color 0.15s',
            }}
          >
            Sign In to Workspace
          </button>

        </form>
      </div>
    </div>
  );
};

export default Login;