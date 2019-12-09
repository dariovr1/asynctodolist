import {
    ADD_TODO_SUCCESS,
    ADD_TODO_FAILURE,
    ADD_TODO_STARTED,
    DELETE_TODO
  } from '../types/index';
  
  import axios from 'axios';
  
const addTodo = ({ title, userId = "7457f48a-d027-4311-9894-bdfc0b58901a" , completed = false }) => {
    return dispatch => {
      axios
        .post(`https://menzh.free.beeceptor.com/brusu`, {
          title,
          userId,
          completed
        })
        .then(res => {
          console.log("addTodoSuccess");
          console.log(res);
          dispatch(addTodoSuccess(res.data));
        })
        .catch(err => {
          console.log("erraddTodo");
          console.log(err);
          dispatch(addTodoFailure(err.message));
        });
    };
  };

  const addTodoSuccess = todo => ({
    type: ADD_TODO_SUCCESS,
    payload: {
      ...todo
    }
  });
  
  const addTodoFailure = error => ({
    type: ADD_TODO_FAILURE,
    payload: {
      error
    }
  });



  export {
    addTodo,
    addTodoSuccess,
    addTodoFailure
  }