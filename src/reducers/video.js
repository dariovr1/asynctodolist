import { GET_FIRST_VIDEO } from '../types/index';

const initialState = null;


export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FIRST_VIDEO:
      return action.item.shift();
    default:
      return state;
  }
};
