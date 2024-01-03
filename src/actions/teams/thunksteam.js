import axios from 'axios';
import baseUrl from '../../api/apiUrl';
import { pending, fulfilled, rejected } from '../../reducers/team';

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

export const createProfessional = (data) => async (dispatch) => {
  dispatch(pending());

  try {
    const response = await axios.post(`${baseUrl}/professionals`, data);
    dispatch(fulfilled(response.data));
  } catch (error) {
    dispatch(rejected(error.response) || '');
  }
};
