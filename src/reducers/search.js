import { SET_TEXT_SEARCH } from '../types/index';

const searchReducerDefaultState = "";

export default (state = searchReducerDefaultState, action) => {
  switch (action.type) {
    case SET_TEXT_SEARCH:
      return action.text;
    default:
      return state;
  }
};
