const express = require("express");
const router = express.Router();
const agencyController = require("../controllers/agencyController");


router.post("/", agencyController.createInternationalResident);
router.get("/", agencyController.getAllInternationalResidents);
router.get("/:id", agencyController.getInternationalResidentById);
router.put("/:id", agencyController.updateInternationalResident)
router.delete("/:id", agencyController.deleteInternationalResident);




module.exports = router