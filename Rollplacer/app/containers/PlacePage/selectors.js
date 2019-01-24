import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the placePage state domain
 */

const selectPlacePageDomain = state => state.get('placePage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by PlacePage
 */

const makeSelectPlacePage = () =>
  createSelector(selectPlacePageDomain, substate => substate.toJS());

export default makeSelectPlacePage;
export { selectPlacePageDomain };
