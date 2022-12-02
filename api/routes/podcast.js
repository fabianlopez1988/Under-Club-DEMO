const express = require("express");
const router = express.Router();
const podcastController = require("../controllers/podcastController");


router.get("/", podcastController.getAllPodcast);
router.get("/:id", podcastController.getPodcastById);
router.post("/", podcastController.createPodcast);
router.put("/:id", podcastController.updatePodcast);
router.delete("/:id", podcastController.deletePodcast);


module.exports = router

