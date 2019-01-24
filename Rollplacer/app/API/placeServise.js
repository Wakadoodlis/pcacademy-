import axios from 'axios';
import CONFIG from './config';
import ENDPOINTS from './endpoints';

export function get(id) {
  return axios.get(`${CONFIG.URL}${ENDPOINTS.PLACES.PLACE}${id}`);
}

// export const getPlaceById = async id => {
//   try {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/posts/${id}`,
//     );
//     return response;
//   } catch (error) {
//     console.log(error);
//   }
// };
