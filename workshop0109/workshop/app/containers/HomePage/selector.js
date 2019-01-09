import { createSelector } from 'reselect';

const selectHomePage = state => state.get('HomePage');

const makeSelectHomePage = () =>
  createSelector(selectHomePage, substate => substate.toJS());

export default makeSelectHomePage;
export { selectHomePage };
