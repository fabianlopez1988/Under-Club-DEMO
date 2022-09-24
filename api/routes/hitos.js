const express = require("express");
const router = express.Router();
const hitosController = require("../controllers/hitosController");

router.post("/", hitosController.createHito);
router.put("/:id", hitosController.updateHito);
router.delete("/:id", hitosController.deleteHito);

module.exports = router;
