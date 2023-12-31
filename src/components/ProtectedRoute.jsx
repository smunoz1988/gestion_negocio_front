import React from 'react'
import Navbar from './NavBar'
import SideBar from './SideBar';

const ProtectedRoute = () => {  
  return (
    <>
      <Navbar />
      <SideBar />
      <h1>Elemento cambiable</h1>
    </>
  );
}

export default ProtectedRoute;