import React, { useEffect, useState } from "react";
import { ExpensesProvider } from "./components/expenseContext";
import NavbarLogin from "./components/navbarLogin";
import NavbarUser from "./components/navbarUser";
import ExpenseButton from "./components/expenseButton";
import LoginForm from "./components/loginForm";

const App = () => {
  const [sessionToken, setSessionToken] = useState(false);
  useEffect(() => {
    const checkToken = async () => {
      const token = localStorage.getItem("token");
      token ? setSessionToken(true) : setSessionToken(false);
    };
    checkToken();
  }, []);

  return (
    <ExpensesProvider>
      <div className="App">
        {sessionToken && <NavbarUser />}
        {!sessionToken && <NavbarLogin />}
        {!sessionToken && <LoginForm setSessionToken={setSessionToken} />}
        {sessionToken && <ExpenseButton />}
      </div>
    </ExpensesProvider>
  );
};

export default App;
