const express = require("express");
const router = express.Router();
const residents = require("./residents");
const hitos = require("./hitos");
const users = require ("./users");

router.use("/residents", residents);
router.use("/hitos", hitos);
router.use("/admin", users);


module.exports = router;
