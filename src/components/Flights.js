// Flights.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../Flights.css';

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const isFlightOnDay = (day) => {
  // Placeholder logic, replace with real flight data logic
  // For example, if your flight is on a Tuesday:
  return day === "Tuesday";
};

function formatDate(date) {
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

function getWeekDates(selectedDate) {
  const date = new Date(selectedDate);
  const weekDates = [];

  // Setting the first day of the week (Sunday)
  date.setDate(date.getDate() - date.getDay());

  for (let i = 0; i < 7; i++) {
    weekDates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return weekDates;
}

function Flights() {
    const navigate = useNavigate();
    const location = useLocation();
    const { from, to, departureDate, guests } = location.state || {}; // Make sure 'guests' is destructured here
  

    const handleSeatSelectClick = () => {
        navigate('/seat-select');
    };

    const weekDates = getWeekDates(departureDate);

    return (
      <div>
        <h1>Flights</h1>
        <p>Showing flights from {from || 'your departure city '} to {to || 'your destination '} 
         {' on the week of '}{departureDate || 'selected date'} for {guests || 'number of'} guests.</p>

        <div className="week-container">
          {weekDates.map((date) => (
            <div key={date.toISOString()} className="day-box">
              <p className="day-name">{formatDate(date)}</p> {/* Only this part will be bold */}
              {isFlightOnDay(weekDays[date.getDay()]) && <p>FLIGHT</p>} {/* This will remain normal weight */}
            </div>
          ))}
        </div>
        
        <button onClick={handleSeatSelectClick}>Proceed to Seat Selection</button> 
      </div>
    );
  }

export default Flights;
