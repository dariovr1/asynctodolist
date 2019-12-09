import {combineReducers } from 'redux';
import videoReducers from '../reducers/video';
import searchReducers from '../reducers/search';
import todosReducer from '../reducers/todolist';

export default combineReducers({
  video: videoReducers,
  search: searchReducers,
  todolist : todosReducer
});
