// MODIFY: src/components/Nav.jsx
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);
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

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="nav-container">
      <div className="nav-logo">PB Schedule Creator</div>
      <div className="nav-menu">
        <div className="nav-item" onClick={toggleDropdown}>
          Account
          {showDropdown && (
            <div className="dropdown-menu">
              {/* Keep existing dropdown content */}
              {currentUser && (
                <>
                  <div className="dropdown-item">
                    {currentUser.email}
                  </div>
                  <div className="dropdown-item" onClick={handleLogout}>
                    Log Out
                  </div>
                </>
              )}
              {error && <div className="error-text">{error}</div>}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Nav;