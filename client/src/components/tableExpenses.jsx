import React, { useState, useEffect } from "react";

const TableExpenses = () => {
  const [data, setData] = useState({});
  const getExpenses = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/expenses");
      const data = await response.json();
      setData(data);
      // console.log(data)
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
          {data.expenses &&
            data.expenses.map((expense) => (
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
