const bcrypt = require("bcrypt");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const blacklist = new Set();

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
    const token = req.haders.authentication.split(" ")[1];
    if (token) {
      blacklist.add(token);
      res.status(200).json({ message: "Logout successful" });
    } else {
      res.status(400).json({ message: "Invalid token or no token provided" });
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
};
module.exports = {
  login,
  logout,
};
