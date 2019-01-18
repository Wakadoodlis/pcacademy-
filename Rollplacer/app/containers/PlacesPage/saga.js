import { take, call, put, select } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { GET_PLACES, SET_PLACES } from './constants';
import * as placesServise from '../../API/placesServise';

function* getPlaces(action) {
  console.log('my saga');
  const result = yield call(placesServise.get);
  yield put({
    type: SET_PLACES,
    places: result.data,
  });
  console.log('result', result);
}

// Individual exports for testing
export default function* getPlacesSaga() {
  yield takeEvery(GET_PLACES, getPlaces);
}
