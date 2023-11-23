import React from 'react';
import background from '../images/wallpaper2.jpeg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { useState } from 'react'; // Import useState
import { useQuery } from 'react-query';


function Home() {

    //EXPRESS JS TEST STUFF: UNCOMMENT FOR TESTING PROXY
    // const fetchMyData = async () => {
    //     const response = await fetch('http://localhost:3010/my-endpoint');
    //     if (!response.ok) {
    //       throw new Error('Network response was NOT ok');
    //     }
    //     return response.json();
    //   };
    // const {data, error, isLoading } = useQuery('home-page', fetchMyData);

    const navigate = useNavigate();
    // Use only formData state to manage all form fields
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        departureDate: '',
        guests: '1',
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
          ...prevFormData,
          [name]: value,
        }));
    };
    
    // Use formData for navigation state
    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/flights', { state: formData });
    };


    //EXPRESS JS TEST STUFF: UNCOMMENT FOR TESTING PROXY
    // if (isLoading) return <div>Loading...</div>;
    // if (error) return <div>An error has occurred: {error.message}</div>;
    // console.log(data)

    return (
        <div>
        <div className="form-wrapper-2"> {/* This is a new wrapper div for centering the form */}
            <div className="booking-form-container">
            <h2>Welcome to Romil Airlines!</h2>
            <p>Now accepting payment in ROMILCOIN.</p>         

            <form onSubmit={handleSubmit}> 
                <label htmlFor="trip-type">Trip type</label>
                <select id="trip-type" name="trip-type">
                    <option value="one-way">One way</option>
                    <option value="round-trip">Round trip</option>
                </select>

                <label htmlFor="from">From</label>
                <input type="text" id="from" name="from" placeholder="Calgary, AB" onChange={handleInputChange} value={formData.from} />

                <label htmlFor="to">Going to</label>
                <input type="text" id="to" name="to" placeholder="Toronto, ON" onChange={handleInputChange} value={formData.to} />

                <label htmlFor="departure-date">Departure date</label>
                <input type="date" id="departure-date" name="departureDate" onChange={handleInputChange} value={formData.departureDate}/>

                <label htmlFor="guests">Guests</label>
                <select id="guests" name="guests" onChange={handleInputChange} value={formData.guests}>

                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>

                </select>

                <button type="submit">Get Flights</button>
            </form>



            </div>
        </div>
        </div>
    );


}

export default Home;
