import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Locations from "./components/locations/Locations";
import View from "./components/view/View";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Locations />} />
          <Route path="/view" element={<View />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
