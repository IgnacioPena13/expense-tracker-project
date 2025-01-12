import React, { useEffect, useContext } from "react";
import { ExpenseContext } from "./expenseContext";

const TableExpenses = () => {
  const { expenses, setExpenses } = useContext(ExpenseContext);

  const getExpenses = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch("http://localhost:5000/api/expenses", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setExpenses(data);
      console.log("for table: ", data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th id="month">Month</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Category</th>
            <th>Description</th>
            <th>Amount</th>
          </tr>
          {expenses &&
            expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.category}</td>
                <td>{expense.description}</td>
                <td>{expense.amount}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableExpenses;
