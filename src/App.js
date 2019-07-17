import React, { useContext, useEffect } from "react";

import "./App.scss";
import Home from "/views/Home/Home";

import Navbar from "/components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
