import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllProfessionals, updateProfessional } from '../../../actions/teams/thunksteam';

const EditProfessional = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const { professional } = useSelector((state) => state.professional);

  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    document_id: '',
    email: '',
    phone: '',
    role: '',
    address: '',
    birthday: '',
    errors: { status: { message: '' } },
  });

  const checkingEmptyFields = (data) => {
    const updatedData = {};

    Object.entries(data).forEach(([key, value]) => {
      if (value !== '') {
        updatedData[key] = value;
      }
    });

    if (Object.keys(updatedData).length > 0) {
      return updatedData;
    }
    return null;
  };

  const handleBack = () => {
    navigate(`/professional/${id}`);
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(updateProfessional(id, checkingEmptyFields(formData)));
      await dispatch(getAllProfessionals());
      navigate('/team');
    } catch (error) {
      setFormData({
        ...formData,
        errors: error.response.data,
      });
    }
  };

  return (
    <div>
      <h1>edit professional</h1>

      <div className="back_container">
        <button type="button" onClick={handleBack}>back</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            onChange={handleChange}
            value={formData.name}
            placeholder={professional.name}

          />
        </div>

        <div className="form_group">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            id="last_name"
            className="form-control"
            onChange={handleChange}
            value={formData.last_name}
            placeholder={professional.last_name}

          />
        </div>

        <div className="form_group">
          <label htmlFor="document_id">Document ID</label>
          <input
            type="text"
            name="document_id"
            id="document_id"
            className="form-control"
            onChange={handleChange}
            value={formData.document_id}
            placeholder={professional.document_id}

          />
        </div>

        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="form-control"
            onChange={handleChange}
            value={formData.email}
            placeholder={professional.email}

          />
        </div>

        <div className="form_group">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            name="phone"
            id="phone"
            className="form-control"
            onChange={handleChange}
            value={formData.phone}
            placeholder={professional.phone}

          />
        </div>

        <div className="form_group">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            name="role"
            id="role"
            className="form-control"
            onChange={handleChange}
            value={formData.role}
            placeholder={professional.role}

          />
        </div>

        <div className="form_group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            className="form-control"
            onChange={handleChange}
            value={formData.address}
            placeholder={professional.address}

          />
        </div>

        <div className="form_group">
          <label htmlFor="birthday">Birthdate</label>
          <input
            type="date"
            name="birthday"
            id="birthday"
            className="form-control"
            onChange={handleChange}
            value={formData.birthday || ''}

          />
        </div>
        <input type="submit" value="update Professional" className="btn btn-primary" />
      </form>

    </div>
  );
};

export default EditProfessional;
