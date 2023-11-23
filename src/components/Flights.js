// Flights.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Flights() {
    const navigate = useNavigate();
    const location = useLocation();
    const { from, to, departureDate, guests } = location.state || {}; // Make sure 'guests' is destructured here
  
    const handleSeatSelectClick = () => {
        navigate('/seat-select');
    };

    return (
      <div>
        <h1>Flights Page</h1>
        <p>Showing flights from {from || 'your departure city'} to {to || 'your destination'} on {departureDate || 'selected date'} for {guests || 'number of'} guests.</p>
        <button onClick={handleSeatSelectClick}>Proceed to Seat Selection</button> 
      </div>
    );
  }

export default Flights;
