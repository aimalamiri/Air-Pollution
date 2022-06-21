/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../services/axios';
import { REACT_APP_API_KEY } from '../../services/environment';

const getCity = createAsyncThunk('city/getCity', async (name) => axios
  .get(`weather?q=${name}&APPID=${REACT_APP_API_KEY}`)
  .then((response) => {
    console.log('First then');
    console.log(response);
    if (!response.statusText === 'OK') throw Error(response.statusText);
    return response.data;
  })
  .then((json) => {
    console.log('Second then');
    console.log(json);
    return json;
  })
  .catch((error) => error));

const initialState = {
  loading: false,
  error: '',
  city: {},
};

const city = createSlice({
  name: 'city',
  initialState,
  reducers: {
    // [getCity.pending]: (state) => {
    //   state.loading = true;
    // },
    // [getCity.rejected]: (state, action) => {
    //   state.loading = false;
    //   console.log(action.payload);
    //   state.error = action.payload;
    // },
    // [getCity.fulfilled]: (state, action) => {
    //   state.loading = false;
    //   console.log(action.payload);
    //   state.data = action.payload;
    // },
  },
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
