import { takeLatest, put, call } from 'redux-saga/effects';
import {
  REQUEST_POST,
  getPostAPI,
  getBodyAPI,
  REQUEST_BODY,
} from './constants';
import { responsePosts, responseBody } from './actions';

function* getPosts() {
  try {
    const data = yield call(getPostAPI);
    yield put(responsePosts(data));
  } catch (error) {
    console.log(error);
  }
}
function* getBody(action) {
  console.log(action);
  try {
    const data = yield call(getBodyAPI, action.id);
    yield put(responseBody(data));
  } catch (error) {
    console.log(error);
  }
}
// Individual exports for testing
export default function* postPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(REQUEST_POST, getPosts);
  yield takeLatest(REQUEST_BODY, getBody);
}
