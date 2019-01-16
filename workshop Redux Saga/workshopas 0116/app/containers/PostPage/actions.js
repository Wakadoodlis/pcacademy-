/*
 *
 * PostPage actions
 *
 */

import {
  REQUEST_POST,
  RESPONSE_POST,
  REQUEST_BODY,
  RESPONSE_BODY,
} from './constants';

export function getPosts() {
  return {
    type: REQUEST_POST,
  };
}

export function responsePosts(data) {
  return {
    type: RESPONSE_POST,
    response: data,
  };
}

export function requestBody(id) {
  return {
    type: REQUEST_BODY,
    id,
  };
}

export function responseBody(data) {
  return {
    type: RESPONSE_BODY,
    response: data,
  };
}
