import { combineReducers } from 'redux';
import authReducer from './auth';
import { professionalsSlice } from './team';
// import professionalReducer from './team';

export default combineReducers({
  auth: authReducer,
  professional: professionalsSlice.reducer,
});
