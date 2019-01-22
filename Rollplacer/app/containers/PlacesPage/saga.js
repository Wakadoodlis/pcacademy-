import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { GET_PLACES, SET_PLACES, CREATE_PLACE } from './constants';
import * as placesServise from '../../API/placesServise';

function* getPlaces(action) {
  const result = yield call(placesServise.get);
  yield put({
    type: SET_PLACES,
    places: result.data,
  });
}

function* createPlaces(action) {
  yield call(placesServise.create, action.place);
  yield put({
    type: GET_PLACES,
  });
}
// Individual exports for testing
export default function* getPlacesSaga() {
  yield takeEvery(GET_PLACES, getPlaces);
  yield takeEvery(CREATE_PLACE, createPlaces);
}
