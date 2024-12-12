const mongoose = require("mongoose");
const expenseSchema = mongoose.Schema(
  {
    expenseName: {
      type: String,
      required: true,
      minlength: 3,
    },
    amountExpended: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
      minlength: 3,
    },
  },
  { TimeStamp: true }
);

module.exports = mongoose.model("expense", expenseSchema);
