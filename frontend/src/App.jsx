import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes WITH the layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
          {/* Every route added here automatically gets the Navbar/Sidebar/Footer */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
