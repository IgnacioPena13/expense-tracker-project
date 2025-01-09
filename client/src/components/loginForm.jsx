import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [post, setPost] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setPost({ [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:5000/api/users/login`, { post })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="session-forms">
        <label htmlFor="email-log">E-mail: </label>
        <input
          type="email"
          onChange={handleInput}
          name="email-log"
          id="email-log"
          required
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          onChange={handleInput}
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
