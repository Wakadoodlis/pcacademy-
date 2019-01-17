import { createSelector } from 'reselect';

const selectPlacesPage = state => state.get('PlacesPage');

const makeSelectPlacesPage = () =>
  createSelector(selectPlacesPage, substate => substate.toJS());

export default makeSelectPlacesPage;
export { selectPlacesPage };
