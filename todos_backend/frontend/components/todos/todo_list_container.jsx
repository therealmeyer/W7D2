import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, fetchTodos ,createTodo} from '../../actions/todo_actions';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = (dispatch)=> ({
  createTodo: (todo)=> dispatch(createTodo(todo)),
  fetchTodos: (todo)=> dispatch(fetchTodos())
});


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
