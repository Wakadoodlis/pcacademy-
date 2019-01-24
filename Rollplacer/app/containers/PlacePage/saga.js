import { call, put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { GET_PLACE, SET_PLACE } from './constants';
import * as placeServise from '../../API/placeServise';

function* getPlace(action) {
  try {
    console.log('action from place saga', action);
    const result = yield call(placeServise.get, action.id);
    console.log('cia result is saga', result);
    yield put({
      type: SET_PLACE,
      place: result.data,
    });
  } catch (err) {
    console.log(err);
  }
}
// Individual exports for testing
export default function* getPlacesSaga() {
  yield takeEvery(GET_PLACE, getPlace);
}
