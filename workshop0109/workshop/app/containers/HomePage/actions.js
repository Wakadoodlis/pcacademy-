import { SET_DATA, SORT_DATA } from './constants';

export const setDATA = data => {
  return {
    type: SET_DATA,
    payload: data,
  };
};

export const sortDATA = data => {
  return {
    type: SORT_DATA,
    payload: data,
  };
};
