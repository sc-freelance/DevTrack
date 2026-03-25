import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
// Import Sidebar and SidebarProvider from your UI folder
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import './index.css';
import './App.css';

function App() {
 return (
    <BrowserRouter>
      <SidebarProvider>
        <div className="flex min-h-screen w-full border-4 border-red-500">
          <Sidebar className="border-4 border-green-500"/> 
          {/* This 'flex-1' tells the main content to take up the remaining space */}
          <main className="flex-1 border-4 border-blue-500">
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