import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'
import Login from './auth/Login'

const ProtectedRoute = ({ authChecked, loggedIn, currentUser }) => {
  const user = useSelector(state => state.auth.currentUser);
  
  return (
    <>
      <Navbar currentUser={user} />
      <p>Hello, {user.email}</p>
      <h1>Full Calendar</h1>
    </>
  );
}

export default ProtectedRoute;