const express = require("express");
const router = express.Router();
const historyController = require("../controllers/historyController");

router.post("/", historyController.createHistory);
router.put("/:id", historyController.updateHistory);
router.delete("/:id", historyController.deleteHistory);
router.get("/", historyController.getAllHistory);
router.get("/:id", historyController.getHistory);

module.exports = router;
