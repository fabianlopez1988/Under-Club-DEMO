const express = require("express");
const router = express.Router();
const residents = require("./residents");

router.use("/residents", residents);

module.exports = router;
