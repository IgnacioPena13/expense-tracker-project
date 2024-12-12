const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 100,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 25,
    },
    isAdmin: {
      type: Boolean,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("user", userSchema);
