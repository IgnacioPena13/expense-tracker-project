import React from "react";

const ExpenseForm = () => {
  const handleSubmit = async () => {
    try {
      const url = "http://localhost:5000/api/expenses";
      const res = await axios.post(url, { category, description, amount });
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
        <select name="category" id="category">
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
        <input type="text" name="description" id="description" required />
        <label htmlFor="amount">Amount</label>
        <input type="number" name="amount" id="amount" required />
        <input type="submit" value="Add Expense" />
      </form>
    </div>
  );
};

export default ExpenseForm;
