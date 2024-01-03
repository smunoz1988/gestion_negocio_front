import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllProfessionals from '../../../actions/teams/thunksteam';
import LoadingSpinner from '../../LoadingSpinner';

const Team = () => {
  const dispatch = useDispatch();
  const professionals = useSelector((state) => state.professional);
  const pending = useSelector((state) => state.professional.status === 'checking');

  useEffect(() => {
    dispatch(getAllProfessionals());
  }, [dispatch]);

  return (
    <>
      <h3>Team of Professionals</h3>
      <div className="team">
        {pending ? (

          <LoadingSpinner />
        ) : (

          professionals.professionals.map((professional) => (
            <div className="member" key={professional.id}>
              <h4>{professional.name}</h4>
              <p>{professional.document_id}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Team;
