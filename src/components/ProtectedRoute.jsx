import React from 'react'
import { useSelector } from 'react-redux'
import Navbar from './Navbar'
import Login from './auth/Login'

const ProtectedRoute = ({ authChecked, loggedIn, currentUser }) => {
  const isAuth = useSelector(state => state.auth.loggedIn);
  const user = useSelector(state => state.auth.currentUser);
  return isAuth ? (
    <>
      <Navbar currentUser={currentUser} />
      <p>Hello, {user.email}</p>
      <h1>Full Calendar</h1>
    </>
  ) : (
    <>
      <p>Please, login</p>
      <Login />
    </>
    
  )
}

export default ProtectedRoute