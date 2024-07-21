// Import necessary modules from React library
import React, { useEffect } from 'react';

// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Navbar component
import Navbar from './Components/Navbar/Navbar';
import Landing_page from './Components/Landing_Page/LandingPage';
import Sign_Up from "./Components/Sign_Up/Sign_Up";
import Login from "./Components/Login/Login";
import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
import BookingConsultation from "./Components/BookingConsultation/BookingConsultation";
import Notification from "./Components/Notification/Notification";
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import ProfileForm from './Components/ProfileCard/ProfileForm';


// Function component for the main App
function App() {

    // Render the main App component
    return (
        <div className="App">
        <BrowserRouter>
        <Navbar/>
          <Notification>
              <Routes>
                        {/* Route for the Landing page */}
                        <Route path="/" element={<Landing_page/>}/>

                        {/* Route for the Appointments page */}
                        <Route path="/signup" element={<Sign_Up />} />

                        {/* Route for the Login page */}
                        <Route path="/login" element={<Login />} />

                        {/*Route for the InstantConsultation*/}
                        <Route path="/instant-consultation" element={<InstantConsultation />} />

                        {/*Route for the FindDoctor*/}
                        <Route path="//search/doctors" element={<BookingConsultation />} />

                        <Route path="/reviews" element={<ReviewForm />} />

                        <Route path="/profile" component={ProfileForm} />

                </Routes>
            </Notification>
        </BrowserRouter>
        </div>
    );
}

// Export the App component as the default export
export default App;