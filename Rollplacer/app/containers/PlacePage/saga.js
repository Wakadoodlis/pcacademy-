import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { GET_PLACE, SET_PLACE } from './constants';
import * as placeServise from '../../API/placesServise';

function* getPlace(action) {
  const result = yield call(placeServise.get, action.id);
  yield put({
    type: SET_PLACE,
    place: result.id,
  });
}
// Individual exports for testing
export default function* getPlacesSaga() {
  yield takeEvery(GET_PLACE, getPlace);
}
