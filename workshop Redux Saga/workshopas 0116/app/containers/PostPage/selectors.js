import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the postPage state domain
 */

const selectPostPageDomain = state => state.get('postPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by PostPage
 */

const makeSelectPostPage = () =>
  createSelector(selectPostPageDomain, substate => substate.toJS());

export default makeSelectPostPage;
export { selectPostPageDomain };
