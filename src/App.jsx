import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import NormalRoute from './components/NormalRoute';
import { checkAuth } from './actions/auth';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  const isAuth = useSelector((state) => state.auth.loggedIn);
  const isChecking = useSelector((state) => state.auth.authChecked);

  if (!isChecking) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <Routes>
        {isAuth ? (
          <>
            <Route path="/" element={<ProtectedRoute />} />
            <Route path="/protected" element={<ProtectedRoute />} />
          </>
        ) : (
          <>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<NormalRoute />} />
          </>
        )}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
