import React from 'react';
import Navbar from './layouts/NavBar';
import SideBar from './layouts/SideBar';
import '../styles/protected.css';

const ProtectedRoute = () => (
  <div className="container">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="sidebar">
      <SideBar />
    </div>
    <div className="main-content">
      <h1>Elemento cambiable</h1>
    </div>
  </div>
);

export default ProtectedRoute;
