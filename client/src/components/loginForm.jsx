import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/login`,
        { email, password }
      );
      // localStorage.setItem("token", response.data.token);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="session-forms">
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
        <input type="submit" value="Sign in" class="send-button" />
      </form>
    </div>
  );
};

export default LoginForm;
