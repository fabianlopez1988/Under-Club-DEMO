const express = require("express");
const router = express.Router();
const residents = require("./residents");
const hitos = require("./hitos")

router.use("/residents", residents);
router.use("/hitos", hitos)

module.exports = router;
