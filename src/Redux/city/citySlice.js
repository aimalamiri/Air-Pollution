/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../services/axios';
import { REACT_APP_API_KEY } from '../../services/environment';

const getCity = createAsyncThunk('city/getCity', async (name) => axios
  .get(`weather?q=${name}&APPID=${REACT_APP_API_KEY}`)
  .then((response) => {
    if (!response.statusText === 'OK') throw Error(response.statusText);
    return response.data;
  })
  .then((json) => json)
  .catch((error) => error));

const initialState = {
  loading: true,
  error: '',
  city: {},
};

const city = createSlice({
  name: 'city',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCity.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCity.fulfilled, (state, action) => {
      state.loading = false;
      state.city = action.payload;
    });
    builder.addCase(getCity.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export { getCity };

export default city.reducer;
