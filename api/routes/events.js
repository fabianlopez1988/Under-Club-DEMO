const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/eventsController");

router.post("/", eventsController.createEvent);
router.put("/:id", eventsController.updateEvent);
router.delete("/:id", eventsController.deleteEvent);
router.get("/", eventsController.getAllEvents);
router.get("/:id", eventsController.getEvent);

module.exports = router;