const express = require("express");
const router = express.Router();
const userController = require("../Controllers/userControllers");

/* api/user/ */
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById); // api/user/id
router.post("/", userController.createUser);
router.patch("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);

module.exports = router;
