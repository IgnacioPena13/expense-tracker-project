const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userControllers");

/* api/user/ */
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById); // api/user/id
router.post("/", userController.createUser);
router.post("/login", userController.logInUser);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
