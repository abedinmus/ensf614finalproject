


// // RegisterForMembership.js
// import React, {useState} from 'react';
// import '../App.css';

// function RegisterForMembership() {
//     const [registrationData, setRegistrationData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: ''
//     });
    
//     const handleInputChange = (event) => {
//         const { name, value } = event.target;
//         setRegistrationData(prevData => ({
//           ...prevData,
//           [name]: value
//         }));
//     };
    
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Handle the registration logic here. Send data to server, etc.
//         console.log(registrationData); // For now, just log the data to the console
//     };    

//     return (
//     <div>
//       <h1 style={{ textAlign: 'left' }}>Become a member today!</h1>
//       <p style={{ textAlign: 'left' }}>Perks include:</p>

//       <div className="centered-container">
//         <div className="left-aligned-text">
//           <p>
//           • Eligibility to apply for the company’s credit card<br />
//           • Monthly promotion news<br />  
//           • Discount prices at airport lounges<br />
//           • One free companion ticket once a year
//           </p>
//         </div>
//       </div>



//         <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="firstName">First Name</label>
//           <input
//             type="text"
//             id="firstName"
//             name="firstName"
//             value={registrationData.firstName}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="lastName">Last Name</label>
//           <input
//             type="text"
//             id="lastName"
//             name="lastName"
//             value={registrationData.lastName}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="email">Email Address</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={registrationData.email}
//             onChange={handleInputChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={registrationData.password}
//             onChange={handleInputChange}
//           />
//         </div>

//         <button type="submit">Apply for Membership</button>
//       </form>

//       {/* <img src={romilnice} alt="romil" style={{ width: '400px' }} />; */}




//     </div>
//   );
// }

// export default RegisterForMembership;
