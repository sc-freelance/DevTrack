import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Layout from "@/components/layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes WITH the layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Every route added here automatically gets the Navbar/Sidebar/Footer */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
