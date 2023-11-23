// BrowsePassengerList.js

import React, { useState } from 'react';


function BrowsePassengerList() {

    const [flightNumber, setFlightNumber] = useState(''); // State to store the flight number
    const [showFlightNumber, setShowFlightNumber] = useState(false); // State to control display of the flight number

    const handleBrowsePassengerClick = () => {

      setShowFlightNumber(true); // Set to true to display the flight number
    };

    const handleInputChange = (event) => {
      setFlightNumber(event.target.value); // Update the state when the input changes
      setShowFlightNumber(false); // Reset display state when input changes
    };

    return (
      <div>
        <h1>Browse Passenger List</h1>
        <p>Enter flight number:</p>
        <input 
          type="text" 
          value={flightNumber} 
          onChange={handleInputChange} 
          placeholder="Flight Number"
        />
        <button onClick={handleBrowsePassengerClick}>Search</button>
        
        {/* Conditionally display the entered flight number */}
        {showFlightNumber && <p>{flightNumber}</p>}
        {/* OK. so we want to send 'flightnumber' to the database do an SQL query and
        select all passengers where FlightID = 'flightnumber' and generate a table*/}
      </div>
    );
}

export default BrowsePassengerList;
