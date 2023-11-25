import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CancelFlight() {
    const[email, setEmail] = useState('')
    const[bookingID, setBookingID] = useState('')
    function handleSubmit(event){
        event.preventDefault();
    }
    return(
    <div>
        <h2>Plans changed?</h2>
        <p> Enter your email and secure booking ID that was sent to your email to cancel your flight. </p>
        <div className='d-flex justify-content-center align-items-center'>
            <div className='p-3 bg-white w-25'>
                <form onSubmit = {handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input type = "email" placeholder = 'Enter Email' className='form-control'
                        onChange={e=>setEmail(e.target.value)}/>                            
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="bookingID">Booking ID</label>
                        <input type = "bookingID" placeholder = 'Enter Booking ID' className='form-control'
                        onChange={e=>setBookingID(e.target.value)}/>                            
                    </div>
                    <button className='btn btn-success'>Confirm flight cancellation</button>
                </form>
            </div>
        </div>
        <p style={{ fontSize: '12px' }}><b>Flights are not refundable.</b></p>
    </div>
    
    )
}

export default CancelFlight;