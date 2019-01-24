import { GET_PLACE, SET_PLACE } from './constants';

export function getPlace() {
  return {
    type: GET_PLACE,
  };
}
export function setPlace(place) {
  return {
    type: SET_PLACE,
    place,
  };
}
