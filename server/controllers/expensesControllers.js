const Expense = require("../models/expenseModel");

const getAllExpenses = async (req, res) => {
  const expenses = await Expense.find().populate("user");
  try {
    if (!expenses || expenses.length === 0) {
      return res.status(404).json({ message: "No expenses saved." });
    }
    return res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createExpense = async (req, res) => {
  try {
    const { category, description, amount } = req.body;

    if (description.length < 4)
      return res.status(400).json({ message: "Description too short" });

    const newExpense = new Expense({
      user: req.user.userId,
      amount,
      category,
      description,
    });
    const expense = await newExpense.save();
    if (!expense) {
      return res.status(400).json({ message: "Expense not created" });
    }
    return res
      .status(201)
      .json({ message: "Expense created successfully", expense });
  } catch (error) {
    console.error(error);
  }
};

const updateExpense = async (req, res) => {
  try {
    const expense = await Expense.findById({ _id: req.params.id });
    if (!expense) {
      return res.status(400).json({ message: "User not found" });
    }

    expense.amount = req.body.amount || expense.amount;
    expense.category = req.body.category || expense.category;
    expense.description = req.body.description || expense.description;
    const updatedExpense = await expense.save();

    if (!updatedExpense) {
      return res.status(400).json({ message: "Expense not updated" });
    }
    return res
      .status(200)
      .json({ message: "Expense updated successfully", updatedExpense });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

const deleteExpense = async (req, res) => {
  try {
    const expenseToDelete = await Expense.findByIdAndDelete({
      _id: req.params.id,
    });

    if (!expenseToDelete) {
      return res.status(404).json({ message: "Expense not found" });
    }
    return res
      .status(200)
      .json({ message: "Expense deleted successfully", expenseToDelete });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getAllExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
};
