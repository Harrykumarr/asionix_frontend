import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Register = () => {
    const [role, setRole] = useState('guest'); // 'guest' or 'admin'
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        if (!email && !mobile) {
            alert("Please provide either email or mobile number!");
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, email, mobile, password, role })
            });
            const data = await response.json();

            if (data.success) {
                alert(`Successfully registered! You can now log in.`);
                navigate('/login');
            } else {
                alert(data.message || 'Registration failed.');
            }
        } catch (err) {
            console.error(err);
            alert('Could not reach the authentication server.');
        }
    };

    return (
        <section className="login-page">
            <div className="login-container">
                <form className="login-form" onSubmit={handleRegister}>
                    <h2>Create Account</h2>
                    <p>Register as a new user</p>

                    <div className="role-toggle">
                        <button
                            type="button"
                            className={`role-btn ${role === 'guest' ? 'active' : ''}`}
                            onClick={() => setRole('guest')}
                        >
                            Guest
                        </button>
                        <button
                            type="button"
                            className={`role-btn ${role === 'admin' ? 'active' : ''}`}
                            onClick={() => setRole('admin')}
                        >
                            Admin
                        </button>
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Username *</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder="Enter Username"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="mobile">Mobile Number</label>
                        <input
                            type="text"
                            id="mobile"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder="Enter Mobile No."
                        />
                    </div>

                    <div className="form-group password-group">
                        <label htmlFor="password">Password *</label>
                        <div className="password-input">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Enter password"
                            />
                            <button type="button" className="toggle-pwd" onClick={() => setShowPassword(!showPassword)}>
                                <i className={`fas fa-eye${showPassword ? '-slash' : ''}`}></i>
                            </button>
                        </div>
                    </div>

                    <div className="form-group password-group">
                        <label htmlFor="confirmPassword">Confirm Password *</label>
                        <div className="password-input">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                placeholder="Confirm password"
                            />
                        </div>
                    </div>

                    <div className="form-actions">
                        <button type="submit" className="btn-primary login-btn">Register</button>
                    </div>

                    <div className="recovery-links" style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                        <span>Already have an account? <Link to="/login" className="link-btn">Login here</Link></span>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Register;
