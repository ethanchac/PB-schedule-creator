// src/Components/App.jsx
import "./App.css";
import React from 'react';
import Schedule from "./Schedule";
import Creator from "./Creator";

function App() {
  return (
    
    <div className="main-container">
      <div className="left-panel">
        <Schedule />
      </div>
      <div className="right-panel">
        <Creator />
      </div>
    </div>
  );
}

export default App;