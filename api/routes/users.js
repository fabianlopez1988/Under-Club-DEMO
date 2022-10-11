const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.post("/", usersController.createUser);
router.post("/login", usersController.loginUser);
router.post("/logout", usersController.logoutUser);
router.get("/:id", usersController.getUser);
router.get("/", usersController.getAllUsers);
router.delete("/:id", usersController.deleteUser);
router.put("/:id", usersController.updateUser);
router.post("/sendMail", usersController.sendMail)

module.exports = router;
