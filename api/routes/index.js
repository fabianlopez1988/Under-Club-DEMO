const express = require("express");
const router = express.Router();
const residents = require("./residents");
const hitos = require("./hitos");
const users = require("./users");
const events = require("./events");
const history = require("./history");

router.use("/residents", residents);
router.use("/hitos", hitos);
router.use("/admin", users);
router.use("/events", events);
router.use("/history", history);

module.exports = router;
