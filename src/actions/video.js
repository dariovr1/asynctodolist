import { GET_FIRST_VIDEO } from '../types/index';


export const getFirstVideo = (item = []) => ({
  type: GET_FIRST_VIDEO,
  item
});
