import axios from 'axios';
import baseUrl from '../../api/apiUrl';
import {
  pending, fulfilled, rejected, fullfiledById,
} from '../../reducers/team';

// function that displays all the professionals
export const getAllProfessionals = () => async (dispatch) => {
  dispatch(pending());

  try {
    const response = await axios.get(`${baseUrl}/professionals`);
    dispatch(fulfilled(response.data));
  } catch (error) {
    dispatch(rejected(error.response) || '');
  }
};

// function that creates a professional
export const createProfessional = (data) => async (dispatch) => {
  dispatch(pending());

  try {
    const response = await axios.post(`${baseUrl}/professionals`, data);
    dispatch(fulfilled(response.data));
  } catch (error) {
    dispatch(rejected(error.response) || '');
  }
};

// function that show details of a professional
export const getProfessionalById = (id) => async (dispatch) => {
  dispatch(pending());

  try {
    const response = await axios.get(`${baseUrl}/professionals/${id}`);
    dispatch(fullfiledById(response.data));
  } catch (error) {
    dispatch(rejected(error.response) || '');
  }
};

// function that updates a professional

export const updateProfessional = (id, data) => async (dispatch) => {
  dispatch(pending());

  try {
    const response = await axios.put(`${baseUrl}/professionals/${id}`, data);
    return response.data;
  } catch (error) {
    dispatch(rejected(error.response) || '');
  }
  return null;
};

// function that deletes a professional
export const deleteProfessional = (id) => async (dispatch) => {
  dispatch(pending());

  try {
    const response = await axios.delete(`${baseUrl}/professionals/${id}`);
    dispatch(fullfiledById(response.data));
  } catch (error) {
    dispatch(rejected(error.response) || '');
  }
};
