import { fromJS } from 'immutable';
import { SET_PLACES } from './constants';

const initialState = fromJS({
  places: [],
});

export default function placesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLACES:
      return state.set('places', action.payload);
    default:
      return state;
  }
}
