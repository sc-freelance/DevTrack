import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar"; 

const Layout = () => {
  return (
    // This Provider must be the parent of anything using useSidebar
    <SidebarProvider> 
      <div className="flex min-h-screen w-full bg-background">
        <Sidebar /> 
        <div className="flex flex-1 flex-col">
          <Navbar />
          <main className="flex-1 p-6">
            {/* This is where your Dashboard or other pages appear */}
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Layout;