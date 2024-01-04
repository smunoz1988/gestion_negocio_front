import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProfessionalById } from '../../../actions/teams/thunksteam';

const Professional = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { professional } = useSelector((state) => state.professional);

  useEffect(() => {
    dispatch(getProfessionalById(id));
  }, [dispatch, id]);

  return (
    <>
      <h2>Professional Details</h2>
      <p>{professional.name}</p>

    </>

  );
};

export default Professional;
