const express = require("express");
const router = express.Router();
const residents = require("./residents");
const users = require ("./users")

router.use("/residents", residents);
router.use("/admin", users)

module.exports = router;
