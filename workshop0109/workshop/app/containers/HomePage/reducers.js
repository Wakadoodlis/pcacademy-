import { fromJS } from 'immutable';
import { SET_DATA, SORT_DATA } from './constants';

const initialState = fromJS({
  Data: [],
});

function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_DATA:
      return state.set('Data', action.payload);
    case SORT_DATA:
      return state.set('myData', action.payload);
    default:
      return state;
  }
}

export default reducer;
