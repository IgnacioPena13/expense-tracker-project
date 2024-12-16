const express = require("express");
const router = express.Router();
const expensesController = require("../Controllers/expensesControllers");
const authMiddleware = require("../middleware/authMiddleware");

router.get("/", expensesController.getAllExpenses);
router.post("/", authMiddleware, expensesController.createExpense);
router.patch("/:id", expensesController.updateExpense);
router.delete("/:id", expensesController.deleteExpense);

module.exports = router;
