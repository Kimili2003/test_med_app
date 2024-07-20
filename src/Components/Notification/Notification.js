import React, { useEffect, useState } from 'react';
import "./Notification.css";

const Notification = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [doctorData, setDoctorData] = useState(null);
    const [appointments, setAppointments] = useState([]);
    const [showNotification, setShowNotification] = useState(true);

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('email');
        const storedDoctorData = JSON.parse(localStorage.getItem('doctorData'));
        const storedAppointments = storedDoctorData ? JSON.parse(localStorage.getItem(storedDoctorData.name)) : [];

        console.log('storedUsername:', storedUsername);
        console.log('storedDoctorData:', storedDoctorData);
        console.log('storedAppointments:', storedAppointments);

        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }

        if (storedDoctorData) {
            setDoctorData(storedDoctorData);
        }

        if (storedAppointments.length > 0) {
            setAppointments(storedAppointments);
        }
    }, []);

    useEffect(() => {
        console.log('Updated Appointments:', appointments);
    }, [appointments]);

    const handleCancel = (appointmentId) => {
        const updatedAppointments = appointments.filter(appointment => appointment.id !== appointmentId);
        setAppointments(updatedAppointments);
        if (doctorData) {
            localStorage.setItem(doctorData.name, JSON.stringify(updatedAppointments));
        }
    };

    return (
        <div>
            {children}
            {isLoggedIn && appointments.length > 0 && showNotification && (
                <div className="notification-container">
                    <div className="notification-content">
                        <h3>Appointment Details</h3>
                        {appointments.map(appointment => (
                            <div key={appointment.id} className="appointment-details">
                                <p><strong>User:</strong> {username}</p>
                                <p><strong>Doctor:</strong> {doctorData?.name}</p>
                                <p><strong>Speciality:</strong> {doctorData?.speciality}</p>
                                <p><strong>Date:</strong> {appointment.date}</p>
                                <p><strong>Time:</strong> {appointment.time}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Notification;
