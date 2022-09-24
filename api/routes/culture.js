const express = require("express");
const router = express.Router();
const cultureController = require("../../api/controllers/cultureController");


router.get("/", cultureController.getAllCultures);
router.post("/", cultureController.createCulture);
router.put("/:id", cultureController.updateCulture);
router.delete("/:id", cultureController.deleteCulture);


module.exports = router