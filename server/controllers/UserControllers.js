const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const getAllUsers = async (req, res) => {
  const users = await User.find();
  try {
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found." });
    }
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUserById = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    if (!user || user.length === 0) {
      return res.status(404).json({ message: "No users found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const userToDelete = await User.findByIdAndDelete({ _id: req.params.id });

    if (!userToDelete) {
      return res.status(404).json({ message: "User not found" });
    }
    return res
      .status(200)
      .json({ message: "User deleted successfully", userToDelete });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (password.length < 8)
      return res
        .status(400)
        .json({ message: "Password must be longer than 8 characters" });

    const encriptedPass = await bcrypt.hash(password, 12);
    const newUser = new User({
      name,
      email,
      password: encriptedPass,
    });
    const user = await newUser.save();
    if (!user) {
      return res.status(400).json({ message: "User not created" });
    }
    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    console.error(error);
  }
  const userExists = await User.findOne({ email: req.body.email });
  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }
};
const logInUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Compare the plaintext password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return res.status(200).json({ message: "User logged in successfully" });
    } else {
      return res.status(400).json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Error logging in user:", error);
    return res
      .status(500)
      .json({ message: "Server error. Please try again later." });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findById({ _id: req.params.id });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    user.name = req.body.name || user.name;
    if (req.body.password) {
      const encriptedPass = await bcrypt.hash(req.body.password, 12);
      user.password = encriptedPass;
    } else {
      user.password = user.password;
    }
    user.email = req.body.email || user.email;
    user.isActive = req.body.isActive || user.isActive;
    user.isAdmin = req.body.isAdmin || user.isAdmin;
    const updatedUser = await user.save();

    if (!updatedUser) {
      return res.status(400).json({ message: "User not updated" });
    }
    return res
      .status(200)
      .json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  deleteUser,
  updateUser,
  getUserById,
  logInUser,
};
