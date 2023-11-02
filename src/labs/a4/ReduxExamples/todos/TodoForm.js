import { useSelector, useDispatch } from 'react-redux';
import { addTodo, updateTodo, setTodo } from './todosReducer';

function TodoForm() {
  // retrieve todo from reducer
  // create dispatch instance to invoke
  // reducer functions

  const { todo } = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();

  // wrap reducer functions
  // with dispatch
  return (
    <li className="list-group-item">
      <button onClick={() => dispatch(addTodo(todo))}> Add </button>
      <button onClick={() => dispatch(updateTodo(todo))}> Update </button>
      <input
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
    </li>
  );
}
export default TodoForm;
