const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");


router.post("/", usersController.createUser);
router.get("/:id", usersController.getUser);
router.delete("/:id", usersController.deleteUser);
router.put("/:id", usersController.updateUser);



module.exports = router