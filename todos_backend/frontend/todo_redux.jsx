import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo, receiveTodos, fetchTodos } from './actions/todo_actions';
import App from './components/app';
import Root  from './components/root';
import { allTodos } from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
  const rootEl = document.getElementById('root');
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;
  ReactDOM.render(<Root store={store}/>, rootEl);
});
