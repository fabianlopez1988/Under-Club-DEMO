const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const passport = require("passport")

router.post("/", usersController.createUser);
router.post("/login", passport.authenticate("local"), (req, res) => {
    res.send(req.user).status(200)
});
router.post("/logout", usersController.logoutUser);
router.get("/:id", usersController.getUser);
router.get("/", usersController.getAllUsers);
router.delete("/:id", usersController.deleteUser);
router.put("/:id", usersController.updateUser);
router.post("/sendMail", usersController.sendMail)

module.exports = router;
