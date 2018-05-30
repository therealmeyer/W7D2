import React from "react";

export const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  let result = [];
  keys.map( (el) => result.push(state.todos[el]));
  return result ;
};
