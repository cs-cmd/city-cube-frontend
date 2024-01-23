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

  return (
    <main>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="button" onClick={handleLoginClick}>
        Login
      </button>
    </main>
  );
}
