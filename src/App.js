import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Flights from './components/Flights'; 
import NavBar from './components/NavBar'; 
import RegisterForMembership from './components/RegisterForMembership'; 
import SeatSelect from './components/SeatSelect'; 
import Payment from './components/Payment'; 
import Login from './components/Login'; 
import AboutUs from './components/AboutUs'; 


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar /> {/* Render NavBar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flights" element={<Flights />} />
          <Route path="/register" element={<RegisterForMembership />} />
          <Route path="/seat-select" element={<SeatSelect />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about-us" element={<AboutUs />} />
          {/* Add more routes as necessary */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;