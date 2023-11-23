// BrowsePassengerList.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BrowsePassengerList() {
    const navigate = useNavigate();
    const [flightNumber, setFlightNumber] = useState(''); // State to store the flight number

    const handleBrowsePassengerClick = () => {
      navigate('/pass');
      // Can also use flightNumber here to do something (like fetching data)
    };

    const handleInputChange = (event) => {
      setFlightNumber(event.target.value); // Update the state when the input changes
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
        
        {/* Display the entered flight number */}
        <p>Entered Flight Number: {flightNumber}</p>
      </div>
    );
}

export default BrowsePassengerList;
