// src/Components/Layout.jsx
import React from 'react';
import Nav from "./Nav";

function Layout({ children }) {
  return (
    <div className="app">
      <Nav />
      {children}
    </div>
  );
}

export default Layout;