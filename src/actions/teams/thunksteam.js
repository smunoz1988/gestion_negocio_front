import axios from 'axios';
import baseUrl from '../../api/apiUrl';
import { pending, fulfilled, rejected } from '../../reducers/team';

// function that displays all the professionals
const getAllProfessionals = () => async (dispatch) => {
  dispatch(pending());

  try {
    const response = await axios.get(`${baseUrl}/professionals`);
    dispatch(fulfilled(response.data));
  } catch (error) {
    dispatch(rejected(error.response) || '');
  }
};

export default getAllProfessionals;
