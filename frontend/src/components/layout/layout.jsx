import { Outlet } from 'react-router-dom';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import Footer from '../footer';

const Layout = () => {
  return (
    <div className="flex h-screen w-full bg-gray-50 overflow-hidden">
      {/* Sidebar - Fixed width */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          <Outlet /> {/* This is where Dashboard.jsx will render */}
        </main>
      </div>
    </div>
  )
}

export default Layout;