import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createProfessional, getAllProfessionals } from '../../../actions/teams/thunksteam';

const AddNewProfessional = () => {
  const [formData, setFormData] = useState({
    name: '',
    last_name: '',
    document_id: '',
    email: '',
    phone: '',
    role: '',
    address: '',
    birthdate: '',
    errors: { status: { message: '' } },
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleBack = () => {
    navigate('/team');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await dispatch(createProfessional(formData));
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
    <>
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
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
            required
          />
        </div>
        <input type="submit" value="Add New Professional" className="btn btn-primary" />
      </form>
    </>
  );
};

export default AddNewProfessional;
