/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cities: {},
};

const cities = createSlice({
  name: 'cities',
  initialState,
  reducers: {
    getCities: (state, action) => {
      state.cities = action.payload;
    },
  },
});

export const { getCities } = cities.actions;

export default cities.reducer;
