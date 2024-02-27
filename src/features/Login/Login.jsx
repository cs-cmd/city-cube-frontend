import "./Login.css";
import { useState } from "react";

export default function Login({ userStore }) {
  const [username, setUsername] = useState("");
  function handleLoginClick() {
    const newUser = {
      username,
    };

    userStore.setUser(newUser);
  }

  function handleSignUpClick() {
    return;
  }

  return (
    <div className="account-login">
      <h1>Login</h1>
      <input
        type="text"
        className=""
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <div className="buttons">
        <button 
          type="button" 
          onClick={handleLoginClick}
          className="page-button">
          Login
        </button>
        <button
          type="button"
          onClick={handleSignUpClick}
          className='page-button secondary'>
            Sign Up
          </button>
        </div>
    </div>
  );
}
