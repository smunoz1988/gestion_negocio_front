import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import { getProfessionalById } from '../../../actions/teams/thunksteam';

const Professional = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { professional } = useSelector((state) => state.professional);

  const handleEditProfessional = (id) => {
    navigate(`/edit_professional/${id}`);
  };

  useEffect(() => {
    dispatch(getProfessionalById(id));
  }, [dispatch, id]);

  return (
    <>
      <h2>Professional Details</h2>
      <br />
      <GiPlagueDoctorProfile src={professional.photo} alt="Profile" className="professional_photo" />
      <br />

      <p>{professional.role}</p>
      <p>
        {professional.name }
        {' '}
        {professional.last_name}
      </p>
      <p>{professional.document_id}</p>
      <p>{professional.email}</p>
      <p>{professional.phone}</p>
      <p>{professional.address}</p>
      <p>{professional.birthdate}</p>

      <button type="button" onClick={() => { handleEditProfessional(id); }}>Edit</button>

    </>

  );
};

export default Professional;
