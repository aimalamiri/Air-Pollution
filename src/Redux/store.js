import { configureStore } from '@reduxjs/toolkit';
import citiesReducer from './cities/citiesSlice';
import cityReducer from './city/citySlice';

const store = configureStore({
  reducer: {
    cities: citiesReducer,
    city: cityReducer,
  },
});

export default store;
