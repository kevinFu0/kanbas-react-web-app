// use useSelector, useDispatch to read/write to reducer
// use useState to maintain a and b parameters in UI
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { add } from './addReducer';
function AddRedux() {
  // a and b state variables to edit
  // parameters to add in the reducer
  // read the sum state variable from the reducer
  // dispatch to call add redux function
  const [a, setA] = useState(12);
  const [b, setB] = useState(23);
  const { sum } = useSelector((state) => state.addReducer);
  const dispatch = useDispatch();
  return (
    <div className="w-25">
      <h1>Add Redux</h1>
      <h2>
        {/* // render local state variables a and b, as well as
        // application state variable sum */}
        {a} + {b} = {sum}
      </h2>
      <input
        type="number"
        value={a}
        onChange={(e) => setA(parseInt(e.target.value))}
        className="form-control"
      />
      <input
        type="number"
        value={b}
        onChange={(e) => setB(parseInt(e.target.value))}
        className="form-control"
      />
      {/* // on click, call add reducer function to compute the
      // arithmetic addition of a and b, and store it in
      // application state variable sum */}
      <button
        onClick={() => dispatch(add({ a, b }))}
        className="btn btn-primary"
      >
        Add Redux
      </button>
    </div>
  );
}
export default AddRedux;
