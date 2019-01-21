import axios from 'axios';
import CONFIG from './config';
import ENDPOINTS from './endpoints';

export function get() {
  return axios.get(`${CONFIG.URL}${ENDPOINTS.PLACES.BASE}`);
}

export function create(place) {
  return axios.post(`${CONFIG.URL}${ENDPOINTS.PLACES.NEW_PLACE}`, place);
}
