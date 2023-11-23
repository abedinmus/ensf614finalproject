import React, { useState, useEffect } from 'react';

const FlightsComponent = () => {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/flights') // Adjust port if different
            .then(response => response.json())
            .then(data => setFlights(data))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>Available Flights</h1>
            <ul>
                {flights.map(flight => (
                    <li key={flight.FlightNum}>{flight.Origin} to {flight.Destination} - ${flight.Price}</li>
                ))}
            </ul>
        </div>
    );
};

export default FlightsComponent;
