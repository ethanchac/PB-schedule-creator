// MODIFY: src/components/Nav.jsx
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import logo from '../assets/logo.png'; // Import the logo
import './Nav.css';

function Nav() {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError('');

    try {
      await logout();
      navigate('/login');
    } catch {
      setError('Failed to log out');
    }
  }

  return (
    <header style={{ width: '100%', position: 'sticky', top: 0, zIndex: 100 }}>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/">
            <img src={logo} alt="Logo" className="nav-logo" />
          </Link>
          <div className="nav-links">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/custom" className="nav-link">Custom</Link>
          </div>
        </div>
        
        <div className="nav-right">
          {currentUser && (
            <>
              <span className="user-email">{currentUser.email}</span>
              <button className="logout-button" onClick={handleLogout}>
                Log Out
              </button>
            </>
          )}
          {error && <div className="error-text">{error}</div>}
        </div>
      </nav>
    </header>
  );
}

export default Nav;

