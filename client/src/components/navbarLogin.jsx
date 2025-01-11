import React, { useState } from "react";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

const NavbarLogin = () => {
  const [form, setForm] = useState("");

  return (
    <div>
      <div className="navbar">
        <button id="display-login" onClick={() => setForm("login")}>
          Log in
        </button>
        <button id="display-register" onClick={() => setForm("register")}>
          Register
        </button>
      </div>
      {form === "login" ? <LoginForm /> : null}
      {form === "register" ? <RegisterForm /> : null}
    </div>
  );
};

export default NavbarLogin;
