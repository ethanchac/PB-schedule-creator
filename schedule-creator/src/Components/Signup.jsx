// src/components/Signup.js
import React, { useState, useRef, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Import your Paris Baguette logo
import './Signup.css'; // Import the custom CSS

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const navigate = useNavigate();
  
  // Password validation states
  const [passwordValidation, setPasswordValidation] = useState({
    length: false,
    hasNumber: false,
    hasSpecial: false,
    match: false
  });

  // Check password requirements in real-time
  useEffect(() => {
    const password = passwordRef.current?.value || '';
    const confirmPassword = passwordConfirmRef.current?.value || '';
    
    setPasswordValidation({
      length: password.length >= 8,
      hasNumber: /\d/.test(password),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      match: password === confirmPassword && password !== ''
    });
  }, [loading]); // This will update after form submission attempts

  // Update validation on password change
  const handlePasswordChange = () => {
    const password = passwordRef.current.value;
    const confirmPassword = passwordConfirmRef.current.value;
    
    setPasswordValidation({
      length: password.length >= 8,
      hasNumber: /\d/.test(password),
      hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      match: password === confirmPassword && password !== ''
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }
    
    if (!agreeToTerms) {
      return setError('You must agree to the Terms of Service');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch (error) {
      setError('Failed to create an account: ' + error.message);
    }

    setLoading(false);
  }

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <img src={logo} alt="Paris Baguette" className="signup-logo" />
          <h2>Create an Account</h2>
          <p>Join us to start managing your schedule</p>
        </div>
        
        {error && (
          <div className="error-message">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            {error}
          </div>
        )}
        
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email-address">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              ref={emailRef}
              required
              className="form-input"
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              ref={passwordRef}
              required
              className="form-input"
              placeholder="Create a password"
              onChange={handlePasswordChange}
            />
            
            <div className="password-requirements">
              <div className={`requirement ${passwordValidation.length ? 'valid' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {passwordValidation.length 
                    ? <path d="M20 6L9 17l-5-5"></path> 
                    : <path d="M18 6L6 18M6 6l12 12"></path>}
                </svg>
                At least 8 characters
              </div>
              <div className={`requirement ${passwordValidation.hasNumber ? 'valid' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {passwordValidation.hasNumber 
                    ? <path d="M20 6L9 17l-5-5"></path> 
                    : <path d="M18 6L6 18M6 6l12 12"></path>}
                </svg>
                At least 1 number
              </div>
              <div className={`requirement ${passwordValidation.hasSpecial ? 'valid' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {passwordValidation.hasSpecial 
                    ? <path d="M20 6L9 17l-5-5"></path> 
                    : <path d="M18 6L6 18M6 6l12 12"></path>}
                </svg>
                At least 1 special character
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <label htmlFor="password-confirm">Confirm Password</label>
            <input
              id="password-confirm"
              name="password-confirm"
              type="password"
              ref={passwordConfirmRef}
              required
              className="form-input"
              placeholder="Confirm your password"
              onChange={handlePasswordChange}
            />
            
            <div className={`requirement ${passwordValidation.match ? 'valid' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {passwordValidation.match 
                  ? <path d="M20 6L9 17l-5-5"></path> 
                  : <path d="M18 6L6 18M6 6l12 12"></path>}
              </svg>
              Passwords match
            </div>
          </div>
          
          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="terms"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
            />
            <label htmlFor="terms">
              I agree to the <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="signup-button"
          >
            {loading ? (
              <>
                <span className="loading-spinner"></span>
                Creating Account...
              </>
            ) : (
              'Create Account'
            )}
          </button>
        </form>
        
        <div className="login-link">
          Already have an account?
          <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;