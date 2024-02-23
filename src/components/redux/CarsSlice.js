// import { createSlice } from '@reduxjs/toolkit';
// import { getAllCars } from './operations';

// export const carSlice = createSlice({
//   name: 'cars',
//   inititalState: {
//     carsArray: [],
//     filters: {
//       brand: '',
//       pricePerHour: 0,
//       mileage: 0,
//     },
//     isLoading: false,
//     error: null,
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(getAllCars.pending, (state, action) => {
//         state.isLoading = true;
//       })
//       .addCase(getAllCars.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.carsArray = [...action.payload];
//       })
//       .addCase(getAllCars.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//   },
// });

// export const carsReduser = carSlice.reducer;
// console.log(carSlice.reducer);
