const express = require("express");
// const { deleteResident } = require("../controllers/residentsController");
const router = express.Router();
const residentsController = require("../controllers/residentsController");


router.post("/", residentsController.createResident);
router.get("/", residentsController.getAllResidents);
router.put("/:id", residentsController.updateResident)
router.delete("/:id", residentsController.deleteResident);



module.exports = router