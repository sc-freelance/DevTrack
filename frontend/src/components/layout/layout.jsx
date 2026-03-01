import { Outlet } from 'react-router-dom';
import Navbar from '../navbar';
import Sidebar from '../sidebar';
import Footer from '../footer';

const Layout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content-wrapper" style={{ display: 'flex' }}>
        <Sidebar />
        <main className="page-body">
          {/* This 'Outlet' is where Dashboard.jsx or Register.jsx will render */}
          <Outlet /> 
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;