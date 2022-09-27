const express = require("express");
const router = express.Router();
const residents = require("./residents");
const hitos = require("./hitos");
const users = require("./users");
const events = require("./events");
const history = require("./history");
const culture = require("./culture");
const initialVideo = require("./initialVideo");

router.use("/residents", residents);
router.use("/hitos", hitos);
router.use("/admin", users);
router.use("/events", events);
router.use("/history", history);
router.use("/culture", culture);
router.use("/initialvideo", initialVideo);

module.exports = router;
