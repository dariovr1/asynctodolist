import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store/store';

import TodoListForm from './components/Forms/TodoListForm';



function App() {
  return (
    <Provider store={store}>
    <TodoListForm />
    </Provider>
  );
}

export default App;
