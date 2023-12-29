import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import Navbar from './Navbar'
import { checkAuth } from '../actions/auth'

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

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