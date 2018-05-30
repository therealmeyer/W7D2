import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from '../todo_list/todo_form';
import { createTodo } from '../../actions/todo_actions';

class TodoList extends React.Component {

  componentDidMount() {
    this.props.fetchTodos();
  }

  render () {
    const {todos, createTodo} = this.props;
    return (
      <div>
        <h3>Todo List</h3>
        <ul>
          { todos.map((todo) => (
            <TodoListItem key={todo.id} title={todo.title} />
          ))}
        </ul>
        <TodoForm createTodo={ createTodo }/>
      </div>
    );
  }
}
export default TodoList;
