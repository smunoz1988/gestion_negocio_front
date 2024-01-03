import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getAllProfessionals from '../../../actions/teams/thunksteam';
import LoadingSpinner from '../../LoadingSpinner';
import '../../../styles/team.css';
import { GiPlagueDoctorProfile } from "react-icons/gi";

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
  }

  return (
    <>
      <div className='title_container'>
        <h3 className='team_title'>Team of Professionals</h3>
        <button className="btn btn-primary" onClick={handleAddNewProfessional}>Add new</button>
      </div>
      
      <div className="team">
        {pending ? (

          <LoadingSpinner />
        ) : (

          <table>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Document ID</th>
                <th>Contact</th>
                <th>Role</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {professionals.professionals.map((professional) => (
                <tr key={professional.id}>
                  <td><GiPlagueDoctorProfile /></td>
                  <td>{professional.name} {professional.last_name}</td>
                  <td>{professional.document_id}</td>
                  <td>{professional.email} <br/> {professional.phone}</td>
                  <td>{professional.role}</td>
                  <td><button className="btn btn-primary">Actions</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Team;
