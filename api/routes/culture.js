const express = require("express");
const router = express.Router();
const cultureController = require("../controllers/cultureController");


router.get("/", cultureController.getAllCultures);
router.get("/:id", cultureController.getCultureById);
router.post("/", cultureController.createCulture);
router.put("/:id", cultureController.updateCulture);
router.delete("/:id", cultureController.deleteCulture);


module.exports = router

