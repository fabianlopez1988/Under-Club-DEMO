const express = require("express");
const router = express.Router();
const residentsController = require("../controllers/residentsController");


router.post("/add", residentsController.createResident);
router.get("/", residentsController.getAllResidents);



module.exports = router