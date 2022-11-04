const express = require("express");
const router = express.Router();
const residents = require("./residents");
const users = require("./users");
const events = require("./events");
const podcast = require("./podcast");
const episode = require("./episode");
const agency = require("./agency")


router.use("/residents", residents);
router.use("/admin", users);
router.use("/events", events);
router.use("/podcast", podcast);
router.use("/episode", episode);
router.use("/agency", agency);

module.exports = router;
