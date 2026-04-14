import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Import your page components
import Home from './pages/home';
import Dashboard from './components/dashboard/dashboard';
import Login from './pages/login';
import Register from './pages/register';
import Categories from './pages/categories';
import Settings from './pages/settings';
// Import Sidebar and SidebarProvider from your UI folder
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import Navbar from './components/navbar';
import './index.css';
import './App.css';

function App() {
 return (
    <BrowserRouter>
      <Navbar />
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <Sidebar /> 
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<div>Projects Page</div>} />
              <Route path="/tasks" element={<div> Tasks Page </div>} />
              <Route path="/categories" element={<Categories />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/login" element={<Login />} />
              <Route path='register' element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/contacts" element={<div> Contacts Page </div>} />
            </Routes>
          </main>
        </div>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;