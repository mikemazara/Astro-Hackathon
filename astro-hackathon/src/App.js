import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Locations from "./components/locations/Locations";
import View from "./components/view/View";
import axios from "axios";

import "./App.css";

function App() {
  const [thisLongLat, setThisLongLat] = useState({});

  useEffect(() => {
    axios
      .get("http://api.open-notify.org/iss-now.json")
      .then((response) => {
        setThisLongLat(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const convertTime = (time) => {
  //   let date = new Date(time * 1000);
  //   return date;
  // };



  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/location" element={<Locations
          thisLongLat ={thisLongLat}
          />} />
          <Route path="/view" element={<View 
           thisLongLat ={thisLongLat}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
