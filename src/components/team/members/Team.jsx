import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import { getAllProfessionals } from '../../../actions/teams/thunksteam';
import LoadingSpinner from '../../LoadingSpinner';
import '../../../styles/team.css';

const Team = () => {
  const dispatch = useDispatch();
  const professionals = useSelector((state) => state.professional);
  const pending = useSelector((state) => state.professional.status === 'checking');

  useEffect(() => {
    dispatch(getAllProfessionals());
  }, [dispatch]);

  const navigate = useNavigate();

  const handleAddNewProfessional = () => {
    navigate('/add_professional');
  };

  const renderTeamContent = () => {
    if (pending) {
      return <LoadingSpinner />;
    }

    if (professionals.professionals.length === 0) {
      return <p className="no_professionals">No professionals found</p>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Profile Picture</th>
            <th>Name</th>
            <th>Document ID</th>
            <th>Contact</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {professionals.professionals.map((professional) => (
            <tr key={professional.id}>
              <td><GiPlagueDoctorProfile className="professional_photo" aria-label="Profile Picture" /></td>
              <td>
                {professional.name}
                {' '}
                {professional.last_name}
              </td>
              <td>{professional.document_id}</td>
              <td>
                {professional.email}
                {' '}
                <br />
                {' '}
                {professional.phone}
              </td>
              <td>{professional.role}</td>
              <td>
                <button type="button" className="btn btn-primary" aria-label="View Actions">Actions</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <>
      <div className="title_container">
        <h3 className="team_title">Team of Professionals</h3>
        <button type="button" className="btn btn-primary" onClick={handleAddNewProfessional}>Add new</button>
      </div>

      <div className="team">
        {renderTeamContent()}
      </div>
    </>
  );
};

export default Team;
