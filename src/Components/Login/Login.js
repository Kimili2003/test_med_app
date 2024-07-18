import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
    const [formData, setFormData] = useState({
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
            setFormData({
                email: '',
                password: ''
            });
            setErrors({});
        } else {
            console.log('Validation failed');
        }
    };

    return (
        <div className="container" style={{ marginTop: '5%' }}>
            <div className="signup-grid">
                <div className="signup-text">
                    <h1>Login</h1>
                </div>
                <div className="signup-text1" style={{ textAlign: 'left' }}>
                    Not a member? <span><Link to="/signup" style={{ color: '#2190FF' }}>Sign Up</Link></span>
                </div>
                <div className="signup-form">
                    <form onSubmit={handleSubmit}>
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
                            <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light" onClick={() => setFormData({ email: '', password: '' })}>Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
