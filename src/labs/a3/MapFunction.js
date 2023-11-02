let numberArray1 = [1, 2, 3, 4, 5, 6];
const square = a => a * a;

const squares = numberArray1.map(square);
const cubes = numberArray1.map(a => a * a * a);

const q = [1,2,3,4,5]
const w = q.map(a => a === 3 ? 6: a);

function MapFunction() {
  return (
    <>
      <h3>Map </h3>
      squares = {squares}<br />
      cubes = {cubes}<br />
      w = {w}<br />
    </>
  );
}

export default MapFunction;