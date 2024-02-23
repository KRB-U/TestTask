import axios from 'axios';

axios.defaults.baseURL = 'https://65d5ce78f6967ba8e3bca1f5.mockapi.io';
// axios.defaults.params = {
//   page: 1,
//   limit: 12,
// };

export const fetchCars = async (page, limit) => {
  try {
    const response = await axios.get('/advert', {
      params: { page: page, limit: limit },
    });
    return response;
  } catch (error) {
    throw new Error(error.message);
  }
};
