import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../../actions/auth";
import { useNavigate } from "react-router-dom"; // if you're using react-router

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    name: "",
    last_name: "",
    document_id: "",
    address: "",
    phone: "",
    role: "",
    errors: { status: { message: "" } }
  });
  const dispatch = useDispatch();
  const navigate = useNavigate(); // if you're using react-router for navigation

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, password_confirmation, name, last_name, document_id, address, phone, role } = formData;

    dispatch(signupUser({ email, password, password_confirmation, name, last_name, document_id, address, phone, role }))
      .then(() => navigate("/")) 
      .catch((errors) => setFormData({ ...formData, errors }));
  };

  return (
    <form onSubmit={handleSubmit} className='w-11/12 max-w-2xl mx-auto mt-8'>
      <h1 className='font-bold text-3xl mb-2'>Sign Up</h1>
      <p className='h-8 text-red-400'>{formData.errors.status.message}</p>
      <fieldset>
        <label className='block uppercase mb-2' htmlFor='email'>
          Email:
        </label>
        <input
          type='text'
          name='email'
          id='email'
          className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
          onChange={handleChange}
          value={formData.email}
          required
        />
      </fieldset>
      <fieldset>
        <label className='block uppercase mb-2' htmlFor='password'>
          Password:
        </label>
        <input
          type='password'
          name='password'
          id='password'
          className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
          onChange={handleChange}
          value={formData.password}
          required
        />
      </fieldset>
      <fieldset>
        <label className='block uppercase mb-2' htmlFor='password_confirmation'>
          Password Confirmation:
        </label>
        <input
          type='password'
          name='password_confirmation'
          id='password_confirmation'
          className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
          onChange={handleChange}
          value={formData.password_confirmation}
          required
        />
      </fieldset>
      <fieldset>
        <label className='block uppercase mb-2' htmlFor='name'>
          Name:
        </label>
        <input
          type='text'
          name='name'
          id='name'
          className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
          onChange={handleChange}
          value={formData.name}
          required
        />
      </fieldset>
      <fieldset>
        <label className='block uppercase mb-2' htmlFor='last_name'>
          Last Name:
        </label>
        <input
          type='text'
          name='last_name'
          id='last_name'
          className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
          onChange={handleChange}
          value={formData.last_name}
          required
        />
      </fieldset>
      <fieldset>
        <label className='block uppercase mb-2' htmlFor='document_id'>
          Document ID:
        </label>
        <input
          type='text'
          name='document_id'
          id='document_id'
          className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
          onChange={handleChange}
          value={formData.document_id}
          required
        />
      </fieldset>
      <fieldset>
        <label className='block uppercase mb-2' htmlFor='address'>
          Address:
        </label>
        <input
          type='text'
          name='address'
          id='address'
          className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
          onChange={handleChange}
          value={formData.address}
          required
        />
      </fieldset>
      <fieldset>
        <label className='block uppercase mb-2' htmlFor='phone'>
          Phone:
        </label>
        <input
          type='text'
          name='phone'
          id='phone'
          className='w-full border-2 focus:outline-none focus:ring-2 p-4 mb-4'
          onChange={handleChange}
          value={formData.phone}
          required
        />
      </fieldset>
      <input
        className='w-full text-center uppercase p-4 bg-blue-300 cursor-pointer mt-4'
        type='submit'
        value='Sign Up'
      />
    </form>
  );
};

export default Signup;
