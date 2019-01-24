import { GET_PLACE, SET_PLACE } from './constants';

export function getPlace(id) {
  return {
    type: GET_PLACE,
    id,
  };
}
export function setPlace(place) {
  return {
    type: SET_PLACE,
    place,
  };
}
