import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './layouts/NavBar';
import SideBar from './layouts/SideBar';
import '../styles/protected.css';
import Team from './team/members/Team';
import AddNewProfessional from './team/members/AddNewProfessional';
import Clients from './clients/Clients';
import Calendar from './calendar/Calendar';
import Services from './services/Services';
import Professional from './team/members/Professional';
import EditProfessional from './team/members/EditProfessional';

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
          <Route path="/add_professional" element={<AddNewProfessional />} />
          <Route path="/services" element={<Services />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/professional/:id" element={<Professional />} />
          <Route path="/edit_professional/:id" element={<EditProfessional />} />
        </Routes>
      </div>
    </div>
  </div>
);

export default ProtectedRoute;
