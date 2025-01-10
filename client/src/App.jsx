import React, { useEffect, useState } from "react";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import TableExpenses from "./components/tableExpenses";
import ExpenseForm from "./components/expenseForm";

const App = () => {
  const [backendData, setBackendData] = useState([{}]);
  const [form, setForm] = useState("");
  const [newExpense, setNewExpense] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/users`);
        const data = await response.json();
        setBackendData(data);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="navbar">
        <button id="display-login" onClick={() => setForm("login")}>
          Log in
        </button>
        <button id="display-register" onClick={() => setForm("register")}>
          Register
        </button>
        <button id="logout-button" onClick={() => setForm("")}>
          Log out
        </button>
      </div>
      <button
        type="button"
        className="new-expense-btn"
        onClick={() => setNewExpense(true)}
      >
        Create new expense
      </button>
      {form === "login" ? <LoginForm /> : null}
      {form === "register" ? <RegisterForm /> : null}
      {newExpense ? <ExpenseForm /> : null}
      {newExpense ? <TableExpenses /> : null}
      {/* {backendData.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{user.id}</p>
          <p>{user.email}</p>
          <p>{user.age}</p>
          <p>{user.isActive === true ? "Active" : "Inactive"}</p>
        </div> 
      ))}*/}
    </div>
  );
};

export default App;
