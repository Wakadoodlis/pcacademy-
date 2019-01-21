import { GET_PLACES, SET_PLACES, CREATE_PLACE } from './constants';

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

export function createPlace(place) {
  return {
    type: CREATE_PLACE,
    place,
  };
}
