import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

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
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      last_name,
      document_id,
      email,
      phone,
      role,
      address,
      birthdate,
    } = formData;

    // dispatch action
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
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

      <div className="form-group">
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

      <div className="form-group">
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

      <div className="form-group">
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

      <div className="form-group">
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

      <div className="form-group">
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

      <div className="form-group">
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

      <div className="form-group">
        <label htmlFor="birthdate">Birthdate</label>
        <input
          type="text"
          name="birthdate"
          id="birthdate"
          className="form-control"
          onChange={handleChange}
          value={formData.birthdate}
          required
        />
      </div>
      <input type="submit" value="Add New Professional" className="btn btn-primary" />
    </form>
  );
};

export default AddNewProfessional;
