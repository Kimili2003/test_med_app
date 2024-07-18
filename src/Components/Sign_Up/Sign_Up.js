import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sign_Up.css";

const Sign_Up = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let inputErrors = {};

        if (!formData.name) {
            inputErrors.name = "Name is required";
        }

        if (!formData.phone) {
            inputErrors.phone = "Phone number is required";
        } else if (formData.phone.length !== 10 || !/^\d{10}$/.test(formData.phone)) {
            inputErrors.phone = "Phone number should be 10 digits";
        }

        if (!formData.email) {
            inputErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            inputErrors.email = "Email address is invalid";
        }

        if (!formData.password) {
            inputErrors.password = "Password is required";
        }

        setErrors(inputErrors);
        return Object.keys(inputErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form submitted', formData);
            alert('Form submitted successfully');
            window.location.reload()
        } else {
            console.log('Validation failed');
        }
    };

    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <div className="signup-grid">
                <div className="signup-text">
                    <h1>Sign Up</h1>
                </div>
                <div className="signup-text1" style={{ textAlign: 'left' }}>
                    Already a member? <span><Link to="/login" style={{ color: '#2190FF' }}>Login</Link></span>
                </div>
                <div className="signup-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" id="name" required className="form-control"
                                   placeholder="Enter your name"
                                   value={formData.name}
                                   onChange={handleChange}
                                   aria-describedby="helpId"/>
                            {errors.name && <div className="error" style={{ color: 'red' }}>{errors.name}</div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" name="phone" id="phone" required className="form-control"
                                   placeholder="Enter your phone number"
                                   value={formData.phone}
                                   onChange={handleChange}
                                   aria-describedby="helpId"/>
                            {errors.phone && <div className="error" style={{ color: 'red' }}>{errors.phone}</div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" required className="form-control"
                                   placeholder="Enter your email"
                                   value={formData.email}
                                   onChange={handleChange}
                                   aria-describedby="helpId"/>
                            {errors.email && <div className="error" style={{ color: 'red' }}>{errors.email}</div>}
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" required className="form-control"
                                   placeholder="Enter your password"
                                   value={formData.password}
                                   onChange={handleChange}
                                   aria-describedby="helpId"/>
                            {errors.password && <div className="error" style={{ color: 'red' }}>{errors.password}</div>}
                        </div>

                        <div className="btn-group">
                            <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light" onClick={() => setFormData({ name: '', phone: '', email: '', password: '' })}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Sign_Up;
