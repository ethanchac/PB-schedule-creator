// MODIFY: src/App.jsx
import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from '../contexts/AuthContext';
import Nav from "./Nav";
import Schedule from "./Schedule";
import Creator from "./Creator";
import Login from './Login';
import Signup from './Signup';

// Route protection component
const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="app">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route 
              path="/" 
              element={
                <PrivateRoute>
                  <>
                    <Nav />
                    <div className="main-container">
                      <div className="left-panel">
                        <Schedule />
                      </div>
                      <div className="right-panel">
                        <Creator />
                      </div>
                    </div>
                  </>
                </PrivateRoute>
              } 
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;