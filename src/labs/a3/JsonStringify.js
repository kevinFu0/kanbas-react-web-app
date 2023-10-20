const squares = [1, 4, 16, 25, 36];

function JsonStringfy() {
  return (
    <>
      <h3>JSON Stringify</h3>
      squares = {JSON.stringify(squares)} <br />
    </>
  );
}

export default JsonStringfy;