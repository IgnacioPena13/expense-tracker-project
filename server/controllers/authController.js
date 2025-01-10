const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOneAndUpdate({ email }, { isActive: true });

    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    return res.status(200).json({ message: "Login successful", user, token });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
const logout = async (req, res, next) => {
  try {
    const user = await User.findOneAndUpdate({ email }, { isActive: false });
  } catch (error) {
    console.error(error);
    next(error);
  }
};
module.exports = {
  login,
  logout,
};
