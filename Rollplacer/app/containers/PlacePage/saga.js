import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { GET_PLACE, SET_PLACE } from './constants';
import * as placeServise from '../../API/placesServise';

function* getPlace(action) {
  console.log('action from place saga', action);
  const result = yield call(placeServise.get);
  console.log('cia result is saga', result);
  yield put({
    type: SET_PLACE,
    place: result.data,
  });
}
// Individual exports for testing
export default function* getPlacesSaga() {
  yield takeEvery(GET_PLACE, getPlace);
}
