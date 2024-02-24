import { createSlice } from '@reduxjs/toolkit';
import { getAllCars } from './operations';

export const carSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    favorite: [],
    filters: {
      brand: '',
      pricePerHour: 0,
      minMileage: 0,
      maxMileage: 0,
    },
    isLoading: false,
    error: null,
  },
  reducers: {
    addFavorite(state, action) {
      state.favorite.push(action.payload);
    },

    delFavorite(state, action) {
      state.favorite = state.favorite.filter(
        item => item.id !== action.payload
      );
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getAllCars.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAllCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cars = [...action.payload];
      })
      .addCase(getAllCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const carsReduser = carSlice.reducer;
export const { addFavorite, delFavorite } = carSlice.actions;
