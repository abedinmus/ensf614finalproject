// SeatSelect.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SeatSelect() {

    const navigate = useNavigate();

    const handlePaymentClick = () => {
      navigate('/payment');
    };
  return (
    <div>
      <h1>Seat Selection</h1>
      <p>Choose from the available seats:</p>
      <button onClick={handlePaymentClick}>Proceed to Payment</button> 

    </div>
  );
}

export default SeatSelect;
