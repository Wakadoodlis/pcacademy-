import { fromJS } from 'immutable';
import placePageReducer from '../reducer';

describe('placePageReducer', () => {
  it('returns the initial state', () => {
    expect(placePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
