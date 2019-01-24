/*
 *
 * PlacePage reducer
 *
 */

import { fromJS } from 'immutable';
import { SET_PLACE } from './constants';

export const initialState = fromJS({
  place: {},
});

function placePageReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PLACE:
      return state.set('place', action.place);
    default:
      return state;
  }
}

export default placePageReducer;
