import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
import React from "react";


function TodoItem({todo}) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      <button onClick={() => dispatch(deleteTodo(todo.id))}> Delete </button>
      {/* // copies name and id to the todo state variable */}
      <button onClick={() => dispatch(setTodo(todo))}> Edit </button>
      {todo.title}
    </li>
  );
}
export default TodoItem;