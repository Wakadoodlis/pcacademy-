import axios from 'axios';
import CONFIG from './config';
import ENDPOINTS from './endpoints';

export function get(id) {
  return axios.get(`${CONFIG.URL}${ENDPOINTS.PLACES.PLACE}${id}`);
}
