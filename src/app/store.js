import { configureStore } from '@reduxjs/toolkit';
import carSlice from '../features/counter/car/carSlice';

export const store = configureStore({
  reducer: {
    car: carSlice
  },
});
