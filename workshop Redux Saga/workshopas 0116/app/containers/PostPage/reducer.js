/*
 *
 * PostPage reducer
 *
 */

import { fromJS } from 'immutable';
import { RESPONSE_POST, RESPONSE_BODY } from './constants';

export const initialState = fromJS({
  posts: [],
  body: {},
});

function postPageReducer(state = initialState, action) {
  switch (action.type) {
    case RESPONSE_POST:
      return state.set('posts', action.response.data);
    case RESPONSE_BODY:
      return state.set('body', action.response.data);
    default:
      return state;
  }
}

export default postPageReducer;
