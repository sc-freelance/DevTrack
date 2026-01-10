import { useState } from "react";
import { useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/health/")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div>
        <h1>Devtrack Frontend</h1>
      </div>
    </>
  );
}

export default App;
