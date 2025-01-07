import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [post, setPost] = useState({
    email: "",
    password: "",
  });
  const handleInput = (event) => {
    setPost({ [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(post);
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/users`, { post })
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="session-forms">
        <label htmlFor="name">First name: </label>
        <input
          type="email"
          onChange={handleInput}
          name="email-log"
          id="email-log"
          required
        />
        <label htmlFor="name">Last name: </label>
        <input
          type="email"
          onChange={handleInput}
          name="email-log"
          id="email-log"
          required
        />
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
          minLength={8}
          required
        />
        <input type="submit" value="Sign in" />
      </form>
    </div>
  );
};

export default RegisterForm;
