
import { useParams } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';

function Rew() {
  const { qwe, wer } = useParams();
  // returns a link using qwe and wer from useParams
  return <Link to={`/asd/${wer}/${qwe}`}>LINK B</Link>;
}
export default Rew;
