import { SET_TEXT_SEARCH } from '../types/index';

export const setTextSearch = (text = '') => ({
  type: SET_TEXT_SEARCH,
  text
});
