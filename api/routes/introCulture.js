const express = require("express");
const router = express.Router();
const introCultureController = require("../../api/controllers/introCultureController");


router.get("/", introCultureController.getIntroCulture);
router.post("/", introCultureController.createIntroCulture);
router.put("/:id", introCultureController.updateIntroCulture);
router.delete("/:id", introCultureController.deleteIntroCulture);


module.exports = router
