import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    try {
      const url = `http://localhost:5000/api/users`;
      const res = await axios.post(url, { name, email, password });
      console.log(res.data);
      alert(`Thanks for registering, ${res.data.user.name}! Please log in.`);
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <div>
      <form
        className="session-forms"
        onSubmit={() => {
          handleSubmit();
        }}
      >
        <label htmlFor="name">Enter your name: </label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          name="name"
          id="name"
          required
        />
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
          minLength={8}
          required
        />
        <input type="submit" value="Register" className="send-button" />
      </form>
    </div>
  );
};

export default RegisterForm;
