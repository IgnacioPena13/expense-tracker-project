import React, { useState, useContext } from "react";
import axios from "axios";

const ExpenseForm = () => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const handleSubmit = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/expenses", {
        category,
        description,
        amount,
      });
      console.log(res.data);
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  return (
    <div>
      <form
        className="expense-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <label htmlFor="expense-category">Choose a Category</label>
        <select
          name="category"
          id="category"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          required
        >
          <optgroup label="Essential">
            <option value="rent_mortgage">Rent/Mortgage</option>
            <option value="groceries" selected>
              Groceries
            </option>
            <option value="utilities">Utilities</option>
            <option value="healthcare">Healthcare</option>
          </optgroup>
          <optgroup label="Transportation">
            <option value="public_transportation">Public Transportation</option>
            <option value="fuel">Fuel</option>
            <option value="vehicle_maintenance">Vehicle Maintenance</option>
          </optgroup>
          <optgroup label="Leisure">
            <option value="entertainment">Entertainment</option>
            <option value="travel">Travel</option>
            <option value="subscriptions">Subscriptions</option>
          </optgroup>
          <optgroup label="Financial">
            <option value="debt_repayment">Debt Repayment</option>
            <option value="savings">Savings</option>
            <option value="investments">Investments</option>
          </optgroup>
          <optgroup label="Miscellaneous">
            <option value="clothing">Clothing</option>
            <option value="gifts_and_donations">Gifts & Donations</option>
            <option value="personal_care">Personal Care</option>
            <option value="others">Others</option>
          </optgroup>
        </select>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
        />
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          id="amount"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          required
        />
        <input type="submit" value="Add Expense" />
      </form>
    </div>
  );
};

export default ExpenseForm;
