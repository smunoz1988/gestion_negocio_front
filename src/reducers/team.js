import { createSlice } from '@reduxjs/toolkit';

export const professionalsSlice = createSlice({
  name: 'professional',
  initialState: {
    status: 'checking',
    professionals: [],
    professional: {},
    errorMessage: undefined,
  },

  reducers: {
    pending: (state) => ({
      ...state,
      status: 'checking',
      professionals: [],
      errorMessage: undefined,
    }),
    fulfilled: (state, { payload }) => ({
      ...state,
      status: 'succceded',
      professionals: payload,
      errorMessage: undefined,
    }),
    fullfiledById: (state, { payload }) => ({
      ...state,
      status: 'succceded',
      professional: payload,
      errorMessage: undefined,
    }),
    rejected: (state, { payload }) => ({
      ...state,
      status: 'failed',
      professionals: [],
      errorMessage: payload,
    }),

  },

});
export const {
  pending, fulfilled, rejected, fullfiledById,
} = professionalsSlice.actions;
