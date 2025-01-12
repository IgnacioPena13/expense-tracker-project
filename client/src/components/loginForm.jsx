import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "./userContext";

const LoginForm = ({ setSessionToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [backendData, setBackendData] = useState([{}]);
  const { setUser } = useContext(UserContext);

  const loginUser = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/login`,
        { email, password }
      );
      const UserData = response.data;
      console.log(response);
      const userName = UserData.user.name;
      setUser(userName);
      localStorage.setItem("token", response.data.token);
      setSessionToken(true);
      alert("You have been logged in.");
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/users`);
      const data = await response.json();
      setBackendData(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  return (
    <div>
      <form onSubmit={loginUser} className="session-forms" method="POST">
        <label htmlFor="email-log">E-mail: </label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          name="email-log"
          id="email-log"
          required
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          id="password"
          required
        />
        <input
          type="submit"
          value="Sign in"
          class="send-button"
          onClick={fetchData}
        />
      </form>
    </div>
  );
};

export default LoginForm;
