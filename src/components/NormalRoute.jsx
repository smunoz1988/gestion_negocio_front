import React from 'react';
import { useNavigate } from 'react-router-dom';

const NormalRoute = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/Login');
  }

  
  const handleSignupClick = () => {
    navigate('/Signup');
  }

  return (
    <>
      <h1>Normal Route</h1>
      <p>Aca podria haber una bienvenida al usuario</p>
      <button onClick={handleLoginClick}>Login</button>
      <button onClick={handleSignupClick}>Register</button>
    </>
  );
}

export default NormalRoute