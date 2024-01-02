import React from 'react';
import Navbar from './NavBar';
import SideBar from './SideBar';

const ProtectedRoute = () => (
  <>
    <Navbar />
    <SideBar />
    <div className="content-app">
      <h1>Elemento cambiable</h1>
    </div>
  </>
);

export default ProtectedRoute;
