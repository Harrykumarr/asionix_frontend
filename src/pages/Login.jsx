import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [role, setRole] = useState('guest'); // 'guest' or 'admin'
  const [viewMode, setViewMode] = useState('login'); // 'login', 'forgot_username', 'forgot_password', 'otp', 'reset_password', 'recovered_username'
  const [identifier, setIdentifier] = useState(''); // Email or Mobile Number
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [recoveredUser, setRecoveredUser] = useState('');
  const navigate = useNavigate();

  // Handle standard Login process
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const endpoint = role === 'admin' ? '/api/auth/admin-login' : '/api/auth/login';
      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role, identifier, password })
      });
      const data = await response.json();

      if (data.success) {
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        alert(`Welcome back! Successfully logged in as ${data.user.username} (${role}).`);
        navigate('/');
      } else {
        alert(data.message || 'Login failed.');
      }
    } catch (err) {
      console.error(err);
      alert('Could not reach the authentication server.');
    }
  };

  const requestOTP = async (e, type) => {
    e.preventDefault();
    if (!identifier) {
      alert("Please enter your Phone or Email first.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, type })
      });
      const data = await response.json();

      if (data.success) {
        setViewMode(type === 'forgot_username' ? 'otp' : 'otp_password');
      } else {
        alert(data.message || 'Error requesting OTP');
      }
    } catch (err) {
      alert('Server unreachable');
    }
  };

  const verifyOTP = async (e, type) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, otp })
      });
      const data = await response.json();

      if (data.success) {
        if (type === 'forgot_username') {
          setRecoveredUser(data.username);
          setViewMode('recovered_username');
        } else {
          setViewMode('reset_password');
        }
      } else {
        alert(data.message || "Invalid OTP, try again");
      }
    } catch (err) {
      alert('Verification failed');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const response = await fetch('http://localhost:5000/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, newPassword })
      });
      const data = await response.json();

      if (data.success) {
        alert("Password reset successfully!");
        setViewMode('login');
      } else {
        alert(data.message || "Reset failed. Session may have expired.");
      }
    } catch (error) {
      alert('Connection error');
    }
  };

  return (
    <section className="login-page">
      <div className="login-container">
        {viewMode === 'login' && (
          <form className="login-form" onSubmit={handleLogin}>
            <h2>Welcome Back</h2>
            <p>Please login to your account</p>

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
              <label htmlFor="identifier">Email / Mobile Number</label>
              <input
                type="text"
                id="identifier"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
                placeholder="Enter Email or Mobile No."
              />
            </div>

            <div className="form-group password-group">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
                <button type="button" className="toggle-pwd" onClick={() => setShowPassword(!showPassword)}>
                  <i className={`fas fa-eye${showPassword ? '-slash' : ''}`}></i>
                </button>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-primary login-btn">Login</button>
            </div>

            <div className="recovery-links">
              <button type="button" className="link-btn" onClick={() => setViewMode('forgot_username_request')}>Forgot Username?</button>
              <span>|</span>
              <button type="button" className="link-btn" onClick={() => setViewMode('forgot_password_request')}>Forgot Password?</button>
            </div>

            <div style={{ textAlign: 'center', marginTop: '15px', color: '#666' }}>
              <span>Don't have an account? <Link to="/register" className="link-btn" style={{ fontWeight: 'bold' }}>Register here</Link></span>
            </div>
          </form>
        )}

        {/* --- RECOVERY FLOWS --- */}
        {viewMode === 'forgot_username_request' && (
          <form className="login-form" onSubmit={(e) => requestOTP(e, 'forgot_username')}>
            <h2>Recover Username</h2>
            <p>Enter your Email or Mobile Number to receive an OTP</p>
            <div className="form-group">
              <input type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} required placeholder="Email or Mobile No." />
            </div>
            <button type="submit" className="btn-primary login-btn">Send OTP</button>
            <button type="button" className="link-btn back-btn" onClick={() => setViewMode('login')}>Back to Login</button>
          </form>
        )}

        {viewMode === 'forgot_password_request' && (
          <form className="login-form" onSubmit={(e) => requestOTP(e, 'forgot_password')}>
            <h2>Reset Password</h2>
            <p>Enter your Email or Mobile Number to receive an OTP</p>
            <div className="form-group">
              <input type="text" value={identifier} onChange={(e) => setIdentifier(e.target.value)} required placeholder="Email or Mobile No." />
            </div>
            <button type="submit" className="btn-primary login-btn">Send OTP</button>
            <button type="button" className="link-btn back-btn" onClick={() => setViewMode('login')}>Back to Login</button>
          </form>
        )}

        {viewMode === 'otp' && (
          <form className="login-form" onSubmit={(e) => verifyOTP(e, 'forgot_username')}>
            <h2>Enter OTP</h2>
            <p>We've sent a code to {identifier || 'your device'}</p>
            <div className="form-group">
              <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required placeholder="12345" maxLength="6" className="otp-input" />
            </div>
            <button type="submit" className="btn-primary login-btn">Verify & View Username</button>
            <button type="button" className="link-btn back-btn" onClick={() => setViewMode('login')}>Cancel</button>
          </form>
        )}

        {viewMode === 'otp_password' && (
          <form className="login-form" onSubmit={(e) => verifyOTP(e, 'forgot_password')}>
            <h2>Enter OTP</h2>
            <p>We've sent a code to {identifier || 'your device'}</p>
            <div className="form-group">
              <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required placeholder="12345" maxLength="6" className="otp-input" />
            </div>
            <button type="submit" className="btn-primary login-btn">Verify to Reset</button>
            <button type="button" className="link-btn back-btn" onClick={() => setViewMode('login')}>Cancel</button>
          </form>
        )}

        {viewMode === 'recovered_username' && (
          <div className="login-form success-view">
            <i className="fas fa-check-circle success-icon"></i>
            <h2>Username Recovered</h2>
            <p>Your Username associated with {identifier} is:</p>
            <h3 className="recovered-text">{recoveredUser || 'Not Found'}</h3>
            <button type="button" className="btn-primary login-btn" onClick={() => { setViewMode('login'); setIdentifier(''); }}>Back to Login</button>
          </div>
        )}

        {viewMode === 'reset_password' && (
          <form className="login-form" onSubmit={handleResetPassword}>
            <h2>Create New Password</h2>
            <div className="form-group password-group">
              <label>New Password</label>
              <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
            </div>
            <div className="form-group password-group">
              <label>Confirm Password</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </div>
            <button type="submit" className="btn-primary login-btn">Update Password</button>
            <button type="button" className="link-btn back-btn" onClick={() => setViewMode('login')}>Cancel</button>
          </form>
        )}

      </div>
    </section>
  );
};

export default Login;
