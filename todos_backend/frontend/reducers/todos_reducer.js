import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};


const todosReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS:
      return action.todos ;
    case RECEIVE_TODO:
      const newObj = { [action.todo.id]: action.todo};
      // const newState = Object.assign({}, state);
      const newState = merge({}, state, newObj);
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
