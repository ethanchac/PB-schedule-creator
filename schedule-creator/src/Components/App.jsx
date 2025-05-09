import "./App.css";
import React from 'react';
import { AuthProvider } from '../contexts/AuthContext.jsx';
import Nav from "./Nav";
import Schedule from "./Schedule";
import Creator from "./Creator";

function App() {
  return (
    <div className="app">
      <Nav />
      <div className="main-container">
        <div className="left-panel">
          <Schedule />
        </div>
        <div className="right-panel">
          <Creator />
        </div>
      </div>
    </div>
  );
}

export default App;