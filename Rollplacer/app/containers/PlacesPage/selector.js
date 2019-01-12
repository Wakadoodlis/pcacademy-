import { createSelector } from 'reselect';

const selectPlacesPage = state => state.get('PlacesPage');

const makeSelectPlacesPage = () =>
  createSelector(selectPlacesPage, subState => subState);

export default makeSelectPlacesPage;
export { selectPlacesPage };
