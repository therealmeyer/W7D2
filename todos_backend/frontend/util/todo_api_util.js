export const fetchTodos = () => {
  return $.ajax({
    method: 'GET',
    url: 'http://localhost:3000/api/todos'
  });
};
export const createTodo = (todo) => {
  return $.ajax({
    method: 'POST',
    url: 'http://localhost:3000/api/todos',
    data: {todo}
  });
};
