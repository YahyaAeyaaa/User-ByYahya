const express = require("express");
const router = express.Router();

const UserController = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/login", UserController.loginUser);
router.post("/register", UserController.createUser);
router.post("/refresh-token", UserController.newAccesToken)


router.get("/users", authMiddleware, UserController.getAllUsers);
router.get("/users/:id", authMiddleware, UserController.getUserById);
router.put("/users/:id", authMiddleware, UserController.updateUser);
router.delete("/users/:id", authMiddleware, UserController.deleteUser);
module.exports = router;