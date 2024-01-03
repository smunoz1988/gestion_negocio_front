import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './layouts/NavBar';
import SideBar from './layouts/SideBar';
import '../styles/protected.css';
import Team from './team/members/Team';
import Test from './team/Test';
import Calendar from './calendar/Calendar';

const ProtectedRoute = () => (
  <div className="container">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="sidebar">
      <SideBar />
    </div>
    <div className="main-content">
      <div className="container-protected-route">
        <Routes>
          <Route path="/" element={<Calendar />} />
          <Route path="/team" element={<Team />} />
          <Route path="/test" element={<Test />} />
          {/* Add more Route components for other components */}
        </Routes>
      </div>
    </div>
  </div>
);

export default ProtectedRoute;
