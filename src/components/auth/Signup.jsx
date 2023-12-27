import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signupUser } from "../../actions/auth";
import { useNavigate } from "react-router-dom"; // if you're using react-router

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
    const { email, password } = formData;

    dispatch(signupUser({ email, password }))
      .then(() => navigate("/")) // if using react-router for navigation
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
