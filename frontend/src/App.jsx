import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/navbar';
// Import Sidebar and SidebarProvider from your UI folder
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
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
            </Routes>
          </main>
        </div>
      </SidebarProvider>
    </BrowserRouter>
  );
}

export default App;