const express = require("express")
const router = express.Router()
const hitosController = require("../controllers/hitosController")

router.post("/add", hitosController.createHito)

module.exports = router