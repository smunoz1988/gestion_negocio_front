import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { GiPlagueDoctorProfile } from 'react-icons/gi';
import Swal from 'sweetalert2';
import { getProfessionalById, getAllProfessionals, deleteProfessional } from '../../../actions/teams/thunksteam';

const Professional = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const { professional } = useSelector((state) => state.professional);

  const handleEditProfessional = (id) => {
    navigate(`/edit_professional/${id}`);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Delete Item',
      text: 'Are you sure you want to delete this professional?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProfessional(id))
          .then(() => {
            dispatch(getAllProfessionals());
            Swal.fire('Deleted!', 'professional has been deleted.', 'success');
            navigate('/team');
          })
          .catch((error) => {
            Swal.fire('Error', 'An error occurred while deleting the item.', error);
          });
      }
    });
  };

  const handleBack = () => {
    navigate('/team');
  };

  useEffect(() => {
    dispatch(getProfessionalById(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="back_container">
        <button type="button" onClick={handleBack}>back</button>
      </div>
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
      <p>{professional.birthday}</p>

      <button type="button" onClick={() => { handleEditProfessional(id); }}>Edit</button>
      <button type="button" onClick={() => { handleDelete(id); }}>delete professional</button>

    </>

  );
};

export default Professional;
