import { GET_PLACES, SET_PLACES } from './constants';

export function getPlaces() {
  return {
    type: GET_PLACES,
  };
}
export function setPlaces(places) {
  return {
    type: SET_PLACES,
    places,
  };
}
