import { fromJS } from 'immutable';
import { SET_PLACES } from './constants';

export const initialState = fromJS({
  places: [],
  errors: [],
});

function placesPageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLACES:
      return state.set('places', action.places);
    default:
      return state;
  }
}

export default placesPageReducer;
