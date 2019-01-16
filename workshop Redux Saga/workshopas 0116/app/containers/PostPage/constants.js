/*
 *
 * PostPage constants
 *
 */

import axios from 'axios';

export const REQUEST_POST = 'app/PostPage/GET_POST';
export const RESPONSE_POST = 'app/PostPage/RESPONSE_POST';
export const REQUEST_BODY = 'app/PostPage/REQUEST_BODY';
export const RESPONSE_BODY = 'app/PostPage/RESPONSE_BODY';

export const getPostAPI = async () => {
  try {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getBodyAPI = async id => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
