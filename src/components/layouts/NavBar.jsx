import React from 'react';
import { useSelector } from 'react-redux';
import Logout from '../auth/Logout';

const Navbar = () => {
  const user = useSelector((state) => state.auth.currentUser);
  return (
    <>
      <p>nombre de la empresa</p>
      <p>
        Hola,
        {user.name}
      </p>
      <Logout />
    </>
  );
};

export default Navbar;
