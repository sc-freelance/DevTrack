import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Dashboard from './components/dashboard/dashboard.jsx';
import Login from './pages/login';
import Register from './pages/register';
import Categories from './pages/categories';
import Settings from './pages/settings';
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import Navbar from './components/navbar';
import './index.css';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SidebarProvider>
        <div className="flex w-full h-screen overflow-hidden">
          {/* Sidebar - ensures it doesn't shrink */}
          <div className="flex-shrink-0 border-r border-slate-800">
            <Sidebar /> 
          </div>
          <main className="flex-1 overflow-y-auto">
            <Routes>
              {/* Redirect root to dashboard for testing */}
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              
              <Route path="/dashboard" element={<Dashboard />} />
              
              {/* Placeholder Routes */}
              <Route path="/projects" element={<div className="p-10 text-white">Projects Content</div>} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* 404 Guard */}
              <Route path="*" element={
                <div className="flex h-full items-center justify-center text-slate-500">
                  Page Not Found
                </div>
              } />
            </Routes>
          </main>
          
        </div>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;