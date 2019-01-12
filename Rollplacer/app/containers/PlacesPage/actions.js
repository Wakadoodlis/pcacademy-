import { SET_PLACES } from './constants';

export function setPlaces(places) {
  return {
    type: SET_PLACES,
    places,
  };
}
