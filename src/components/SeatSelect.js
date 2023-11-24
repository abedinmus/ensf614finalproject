// SeatSelect.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../SeatSelect.css';

function SeatSelect() {

    const navigate = useNavigate();
    const handlePaymentClick = () => {
      navigate('/payment');
    };


    const createSeatRow = (numSeats, rowNum) => (
      <div className="seat-row" key={`row-${rowNum}`}>
        {Array.from({ length: numSeats }, (_, index) => (
          <div className="seat" key={`seat-${rowNum}-${index}`}></div>
        ))}
      </div>
    );
    
  const createSeatGrid = () => (
    <div className="seat-grid">
      {Array.from({ length: 18 * 3 }, (_, index) => ( // Create 20 rows x 3 columns
        <div className="seat" key={`seat-${index}`}></div>
      ))}
    </div>  
  );


  return (
    <div>
      <h1>Seat Selection</h1>
      <p>Choose from the available seats:</p>
      <div className="seat-selection-container">
        {createSeatGrid()}
        <div className="aisle"></div> {/* Represents the aisle */}
        {createSeatGrid()}
      </div>
      <button onClick={handlePaymentClick}>Proceed to Payment</button> 

    </div>
  );
}

export default SeatSelect;
