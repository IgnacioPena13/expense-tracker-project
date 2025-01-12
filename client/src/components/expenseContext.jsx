import React, { createContext, useState } from "react";

export const ExpenseContext = createContext();

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, setExpenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};
