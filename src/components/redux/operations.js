// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d5ce78f6967ba8e3bca1f5.mockapi.io';

// export const getAllCars = createAsyncThunk(
//   'cars/getAllCars',
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/advert');
//       return response.data;
//     } catch (errot) {
//       //   thunkAPI;
//     }
//   }
// );
