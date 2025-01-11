import React, { useState } from "react";
import ExpenseForm from "./expenseForm";
import TableExpenses from "./tableExpenses";

const ExpenseButton = () => {
  const [newExpense, setNewExpense] = useState(false);
  return (
    <div>
      <button
        type="button"
        className="new-expense-btn"
        onClick={() => setNewExpense(true)}
      >
        Create new expense
      </button>
      {newExpense ? <ExpenseForm /> : null}
      {newExpense ? <TableExpenses /> : null}
    </div>
  );
};

export default ExpenseButton;
