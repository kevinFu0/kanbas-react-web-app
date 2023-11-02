import React, { useState } from "react";
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { useSelector, useDispatch } from "react-redux";


function TodoList() {
  // todos is an array of todos
  const {todos } = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();
  // const [todos, setTodos] = useState([
  //   { id: "1", title: "Learn React" },
  //   { id: "2", title: "Learn Node"  }]);
  // const [todo, setTodo] = useState({ title: "Learn Mongo" });
  // crud operations
  // appends a new todo to the end of the todos array
  // const addTodo = (todo) => {
  //   // creates a new todo object with a unique id
  //   const newTodos = [ ...todos, { ...todo,
  //     id: new Date().getTime().toString() }];
  //   // updates the todos array
  //   setTodos(newTodos);
  //   // clear out the todo
  //   setTodo({title: ""});
  // };

  // const deleteTodo = (id) => {
  //   const newTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(newTodos);
  // };


  // const updateTodo = (newTodo) => {
  //   // rebuilds a new array with the new todo with the id i'm modifying
  //   const newTodos = todos.map((oldTodo) =>
  //     (oldTodo.id === todo.id ? todo : oldTodo));
  //   setTodos(newTodos);
  //   setTodo({title: ""});
  // };

  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem todo={todo}/>
        ))}
      </ul>
    </div>
  );
}
export default TodoList;