import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    setUser({ username, password });
    
  };
  return (
    <>
      <h2>LogIn Page</h2>
      <div>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogIn}>login</button>
      </div>
    </>
  );
}

export default Login;
