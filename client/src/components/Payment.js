// Payment.js

import React, { useState } from 'react';
import '../styles/Payment.css';

function Payment() {
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    cardHolder: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPaymentData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission. IMPORTANT: Don't send raw card details like this in a real app!
    console.log(paymentData);
  };

  return (
    <form onSubmit={handleSubmit}>
    
    <h1>Payment</h1>
    <p>Please enter payment information below:</p>
      
    <div>


        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          name="cardNumber"
          value={paymentData.cardNumber}
          onChange={handleInputChange}
        />
    </div>

    <div>
        <label htmlFor="cardHolder">Cardholder Name</label>
        <input
          type="text"
          id="cardHolder"
          name="cardHolder"
          value={paymentData.cardHolder}
          onChange={handleInputChange}
        />
    </div>

    <div className="expiry-container">
        <div className="expiry-field">
            <label htmlFor="expiryMonth">Expiry Month</label>
            <select id="expiryMonth" name="expiryMonth" value={paymentData.expiryMonth} onChange={handleInputChange}>
                {/* Add options for months */}
            </select>
        </div>

    <div className="expiry-field">
        <label htmlFor="expiryYear">Expiry Year</label>
        <select id="expiryYear" name="expiryYear" value={paymentData.expiryYear} onChange={handleInputChange}>
            {/* Add options for years */}
        </select>
    </div>
</div>


    <div>
        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          name="cvv"
          value={paymentData.cvv}
          onChange={handleInputChange}
        />
    </div>

    <button type="submit">Submit Payment</button>
    </form>
  );
}

export default Payment;
