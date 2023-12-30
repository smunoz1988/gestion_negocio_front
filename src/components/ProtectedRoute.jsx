import React from 'react'
import { useSelector} from 'react-redux'
import Navbar from './Navbar'

const ProtectedRoute = () => {

  const user = useSelector(state => state.auth.currentUser);
  console.log('protected', user);
  
  return (
    <>
      <Navbar />
      <p>Hello, {user.email}</p>
      <h1>Full Calendar</h1>
    </>
  );
}

export default ProtectedRoute;