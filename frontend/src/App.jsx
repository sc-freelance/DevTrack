import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 1. PUBLIC ROUTES (No Sidebar/Navbar) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 2. PROTECTED/APP ROUTES (With Sidebar & Layout) */}
        <Route element={<Layout />}>
          {/* We use 'path="/"' for the Dashboard */}
          <Route path="/" element={<Dashboard />} />
          
          {/* Add more app pages here later, like /profile or /settings */}
          {/* <Route path="/projects" element={<Projects />} /> */}
        </Route>

        {/* 3. FALLBACK: If user goes to a random URL, send them home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
