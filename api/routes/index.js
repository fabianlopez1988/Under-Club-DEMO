const express = require("express");
const router = express.Router();
const residents = require("./residents");
const hitos = require("./hitos");
const users = require ("./users");
const culture = require("./culture")

router.use("/residents", residents);
router.use("/hitos", hitos);
router.use("/admin", users);
router.use("/culture", culture)


module.exports = router;
