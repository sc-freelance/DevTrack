import React, { useState } from 'react';

const SettingsPanel = () => {
  const [activeTab, setActiveTab] = useState('profile'); // 'profile' | 'notifications' | 'appearance'

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem', color: '#ffffff', fontFamily: 'sans-serif' }}>
      
      {/* 📑 Navigation Tabs */}
      <div style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #1e293b', paddingBottom: '0.75rem', marginBottom: '2rem' }}>
        {['profile', 'notifications', 'appearance'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              background: 'none',
              border: 'none',
              color: activeTab === tab ? '#3b82f6' : '#94a3b8',
              fontSize: '0.95rem',
              fontWeight: activeTab === tab ? '600' : '500',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              textTransform: 'capitalize',
              borderBottom: activeTab === tab ? '2px solid #3b82f6' : '2px solid transparent',
              marginBottom: '-0.85rem',
              transition: 'all 0.15s'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 📦 Main Settings Card */}
      <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '0.75rem', padding: '2rem', marginBottom: '1.5rem' }}>
        
        {/* PROFILE TAB PANEL */}
        {activeTab === 'profile' && (
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', color: '#f4f4f5' }}>Profile Preferences</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', color: '#94a3b8', fontWeight: '500' }}>Username / Scope Display</label>
                <input 
                  type="text" 
                  placeholder="Enter workspace handle..."
                  style={{ backgroundColor: '#0b0f19', border: '1px solid #334155', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: '#ffffff', outline: 'none', width: '100%', maxWidth: '400px', fontSize: '0.9rem' }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontSize: '0.875rem', color: '#94a3b8', fontWeight: '500' }}>Bio Details</label>
                <textarea 
                  rows="3"
                  placeholder="Describe your workspace responsibilities..."
                  style={{ backgroundColor: '#0b0f19', border: '1px solid #334155', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: '#ffffff', outline: 'none', width: '100%', maxWidth: '500px', fontSize: '0.9rem', resize: 'vertical' }}
                />
              </div>
            </div>
          </div>
        )}

        {/* NOTIFICATIONS TAB PANEL */}
        {activeTab === 'notifications' && (
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', color: '#f4f4f5' }}>Notification Alerts</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { id: 'email', label: 'Email summaries for critical workload deadlines' },
                { id: 'desktop', label: 'Show desktop badge updates for incoming tasks' },
                { id: 'marketing', label: 'Receive weekly Agile health assessment reports' }
              ].map(item => (
                <label key={item.id} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', fontSize: '0.95rem', color: '#cbd5e1' }}>
                  <input 
                    type="checkbox" 
                    defaultChecked={item.id === 'desktop'}
                    style={{ width: '1.1rem', height: '1.1rem', accentColor: '#3b82f6', cursor: 'pointer' }}
                  />
                  {item.label}
                </label>
              ))}
            </div>
          </div>
        )}

        {/* APPEARANCE TAB PANEL */}
        {activeTab === 'appearance' && (
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', color: '#f4f4f5' }}>Appearance Configurations</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '200px' }}>
                <label style={{ fontSize: '0.875rem', color: '#94a3b8', fontWeight: '500' }}>Interface Theme</label>
                <select style={{ backgroundColor: '#0b0f19', border: '1px solid #334155', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: '#ffffff', outline: 'none', cursor: 'pointer', fontSize: '0.9rem' }}>
                  <option value="dark">Dark Slate Matrix</option>
                  <option value="light">High Contrast Light</option>
                  <option value="system">Follow System Defaults</option>
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', minWidth: '200px' }}>
                <label style={{ fontSize: '0.875rem', color: '#94a3b8', fontWeight: '500' }}>Language Profile</label>
                <select style={{ backgroundColor: '#0b0f19', border: '1px solid #334155', borderRadius: '0.5rem', padding: '0.75rem 1rem', color: '#ffffff', outline: 'none', cursor: 'pointer', fontSize: '0.9rem' }}>
                  <option value="en">English (US / UK)</option>
                  <option value="es">Español</option>
                  <option value="fr">Français</option>
                </select>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* 💾 Submission Controls */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button
          style={{
            backgroundColor: '#2563eb',
            color: '#ffffff',
            fontWeight: '600',
            fontSize: '0.9rem',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            border: 'none',
            cursor: 'pointer',
            transition: 'background-color 0.15s ease',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
        >
          Save All Configuration Changes
        </button>
      </div>

    </div>
  );
};

export default SettingsPanel;