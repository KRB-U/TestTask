import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCars } from 'components/helpers/API';

export const getAllCars = createAsyncThunk(
  'cars/getAllCars',
  async (_, thunkAPI) => {
    const { page } = thunkAPI.getState().cars.pagination;

    try {
      const response = await fetchCars(page, 12);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
