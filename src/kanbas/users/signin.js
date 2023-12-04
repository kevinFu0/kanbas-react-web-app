import * as client from "./client";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Signin() {
  
  // state variable credentials to edit username and password
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  // sends the credentials to the server using client.signin
  // navigates to the account page after signin
  const signin = async () => {
    await client.signin(credentials);
    navigate("/Kanbas/Account2");
  };

  return (
    <div>
      <h1>Signin</h1>
      <input value={credentials.username} onChange={(e) => setCredentials({...credentials, username: e.target.value})}/>
      <input value={credentials.password} onChange={(e) => setCredentials({...credentials, password: e.target.value})}/>
      <button onClick={signin}> Signin </button>
    </div>
  );
}
export default Signin;