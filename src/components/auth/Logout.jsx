import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'; // if you're using react-router
import { logoutUser } from '../../actions/auth';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(logoutUser())
      .then(() => navigate('/'))
      .catch((errors) => (errors));
  };

  return (
    <button
      type="submit"
      className="w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4"
      onClick={handleSubmit}
    >
      Log Out
    </button>
  );
};

export default Logout;
