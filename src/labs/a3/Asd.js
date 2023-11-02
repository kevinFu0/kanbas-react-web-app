import { useParams } from "react-router";


function Asd({asd}) {
  const { cvb, bnm } = useParams();
  return (
    <h2>{parseInt(asd) + parseInt(bnm) - parseInt(cvb)}</h2>
  );
}
export default Asd;