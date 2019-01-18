import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectPlacesPage = state => state.get('PlacesPage', initialState);

const makeSelectPlacesPage = () =>
  createSelector(selectPlacesPage, substate => substate.toJS());

export default makeSelectPlacesPage;
export { selectPlacesPage };
