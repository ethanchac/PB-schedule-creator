// src/components/Header.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
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
    <header className="bg-indigo-600">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">PB Schedule Creator</h1>
        <div className="flex items-center">
          {currentUser && (
            <>
              <span className="text-white mr-4">{currentUser.email}</span>
              <button
                onClick={handleLogout}
                className="bg-white text-indigo-600 py-2 px-4 rounded shadow hover:bg-gray-100"
              >
                Log Out
              </button>
            </>
          )}
          {error && <div className="text-red-300 ml-2">{error}</div>}
        </div>
      </div>
    </header>
  );
};

export default Header;